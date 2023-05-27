let notification = document.getElementById('notification');
notification.textContent = '';

let table = document.createElement('table');
table.classList.add('table');
let thead = document.createElement('thead');
thead.classList.add('thead');
let tbody = document.createElement('tbody');
tbody.classList.add('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('notification').appendChild(table);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.addEventListener('click', function() {
    // Your click event logic for the "Name" header goes here
    sortTable(0);
  });
heading_1.innerHTML = "Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Strength";
heading_2.addEventListener('click', function() {
    // Your click event logic for the "Strength" header goes here
    sortTable(1);
  });
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Age";
heading_3.addEventListener('click', function() {
    // Your click event logic for the "Age" header goes here
    sortTable(2);
  });

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);
// Массив данных
let data = [
    { name: "Black Panther", strength: 66, age: 53 },
    { name: "Captain America", strength: 79, age: 137 },
    { name: "Captain Marvel", strength: 97, age: 26 },
    { name: "Hulk", strength: 80, age: 49 },
    { name: "Iron Man", strength: 88, age: 48 },
    { name: "Spider-Man", strength: 78, age: 16 },
    { name: "Thanos", strength: 99, age: 1000 },
    { name: "Thor", strength: 95, age: 1000 },
    { name: "Yon-Rogg", strength: 73, age: 52 },
  ];
  
  // Цикл for для создания строк и ячеек таблицы
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    cell1.innerHTML = data[i].name;
    let cell2 = document.createElement('td');
    cell2.innerHTML = data[i].strength;
    let cell3 = document.createElement('td');
    cell3.innerHTML = data[i].age;
  
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
  
    tbody.appendChild(row);
  }

  function sortTable(columnIndex) {
    let tableBody = table.getElementsByTagName('tbody')[0];
    let rows = Array.from(tableBody.getElementsByTagName('tr'));
  
    rows.sort(function(rowA, rowB) {
      let cellA = rowA.getElementsByTagName('td')[columnIndex].innerText;
      let cellB = rowB.getElementsByTagName('td')[columnIndex].innerText;
  
      // Compare the cell values for sorting

      if (cellA < cellB) return -1;
      if (cellA > cellB) return 1;
      return 0;
    });
  
    // Reverse the order for descending sorting
    if (tableBody.classList.contains('sorted') && tableBody.classList.contains('asc')) {
      rows.reverse();
      tableBody.classList.remove('asc');
      tableBody.classList.add('desc');
    } else {
      tableBody.classList.remove('desc');
      tableBody.classList.add('asc');
    }
  
    // Remove existing rows from the table
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  
    // Append the sorted rows to the table
    rows.forEach(function(row) {
      tableBody.appendChild(row);
    });
    let notification = document.getElementById('placeholder');
    let sortOrder = tableBody.classList.contains('asc') ? 'ASC' : 'DESC';
    let parameter = getColumnHeaderText(columnIndex);
    notification.textContent =`Sorting by ${parameter}, order: ${sortOrder}.`;
  }
  function getColumnHeaderText(columnIndex) {
    // Get the header text of the specified column index
    let headerRow = table.getElementsByTagName('th');
    return headerRow[columnIndex].innerText;
  }