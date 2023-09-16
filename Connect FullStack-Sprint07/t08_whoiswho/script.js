function readCSV() {
    const csvFileInput = document.getElementById("csvFileInput");
    const tableContainer = document.getElementById("tableContainer");
    const dataTable = document.getElementById("dataTable");

    dataTable.innerHTML = "";

    const file = csvFileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const contents = e.target.result;
            const rows = contents.split("\n");

            if (rows.length > 0) {
                const table = document.createElement("table");
                const headerRow = document.createElement("tr");
                const headers = rows[0].split(",");
                headers.forEach((header) => {
                    const th = document.createElement("th");
                    th.textContent = header;
                    headerRow.appendChild(th);
                });
                table.appendChild(headerRow);

                for (let i = 1; i < rows.length; i++) {
                    const row = document.createElement("tr");
                    const cells = rows[i].split(",");
                    cells.forEach((cell) => {
                        const td = document.createElement("td");
                        td.textContent = cell;
                        row.appendChild(td);
                    });
                    table.appendChild(row);
                }

                dataTable.appendChild(table);

                tableContainer.style.display = "block";
            } else {
                alert("Error");
            }
        };

        reader.readAsText(file);
    } else {
        alert("Choose");
    }
}