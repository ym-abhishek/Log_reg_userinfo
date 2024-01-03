function addData() {
    //Get input values from user
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let contact = document.getElementById("contact-input").value;
    let address = document.getElementById("address-input").value;


    // Get the table and insert a new row at the end 
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);


    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = contact;
    newRow.insertCell(3).innerHTML = address;
    newRow.insertCell(4).innerHTML =
        '<button onclick="editData(this)">Edit</button>' +
        '<button onclick="deleteData(this)">Delete</button>';

    // Clear input fields
    clearInputs();
}

function editData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Get the cells within the row
    let nameCell = row.cells[0];
    let emailCell = row.cells[1];
    let contactCell = row.cells[2];
    let addressCell = row.cells[3];

    // Prompt the user to enter updated values
    let nameInput = prompt("Enter the updated name:", nameCell.innerHTML);
    let emailInput = prompt("Enter the updated email:", emailCell.innerHTML);
    let contactInput = prompt("Enter the updated email:", contactCell.innerHTML);
    let addressInput = prompt("Enter the updated email:", addressCell.innerHTML);

    // Update the cell contents with the new values
    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
    contactCell.innerHTML = contactInput;
    addressCell.innerHTML = addressInput;
}
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}
function clearInputs() {

    // Clear input fields
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("contact-input").value = "";
    document.getElementById("address-input").value = "";
}

