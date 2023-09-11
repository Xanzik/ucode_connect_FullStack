document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const submittedDataDiv = document.getElementById('submitted-data');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Получаем данные из формы
      const formData = new FormData(form);

      // Отправляем данные на сервер
      fetch('/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
      })
      .then(response => response.json())
      .then(responseData => {
          // Отображаем данные на странице
          submittedDataDiv.innerHTML = `
              <h2>Submitted Data:</h2>
              <p>Name: ${responseData.name}</p>
              <p>Email: ${responseData.email}</p>
              <p>Age: ${responseData.age}</p>
              <p>Personal Statement: ${responseData.personalStatement}</p>
          `;

          // Очищаем форму после отправки
          form.reset();

          // Запрашиваем и отображаем все сохраненные данные
          fetch('/get-data')
              .then(response => response.json())
              .then(data => {
                  const dataHTML = data.map(item => `
                      <p>Name: ${item.name}</p>
                      <p>Email: ${item.email}</p>
                      <p>Age: ${item.age}</p>
                      <p>Personal Statement: ${item.personalStatement}</p>
                  `).join('<hr>');

                  submittedDataDiv.innerHTML += `
                      <h2>All Submitted Data:</h2>
                      ${dataHTML}
                  `;
              })
              .catch(error => console.error(error));
      })
      .catch(error => {
          console.error(error);
          submittedDataDiv.innerHTML = 'An error occurred while submitting the form.';
      });
  });
});
