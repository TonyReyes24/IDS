var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": 1234567890
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": 1234567890
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": 1234567890
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": 1234567890
    }
];

function generateTable() {
    var tableBody = document.getElementById("tableBody");

    // Limpiar contenido previo de la tabla (si hay)
    tableBody.innerHTML = "";

    // Iterar sobre el arreglo de personas y añadir filas a la tabla
    personArr.forEach(function(person) {
        var row = document.createElement("tr");

        var personIdCell = document.createElement("td");
        personIdCell.textContent = person.personId;
        row.appendChild(personIdCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        var cityCell = document.createElement("td");
        cityCell.textContent = person.city;
        row.appendChild(cityCell);

        var phoneNoCell = document.createElement("td");
        phoneNoCell.textContent = person.phoneNo;
        row.appendChild(phoneNoCell);

        tableBody.appendChild(row);
    });
}

// Llamar a la función para generar la tabla al cargar la página
generateTable();