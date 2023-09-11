document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
      if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
      }
  
      const answerValue = selectedAnswer.value;
  
      fetch('/check-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `answer=${answerValue}`,
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data); // Display the response from the server
        });
    });
  });
  