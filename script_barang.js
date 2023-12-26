// script.js
// Get the elements from the document
const kode = document.getElementById("kode");
const nama = document.getElementById("nama");
const harga = document.getElementById("harga");
const satuan = document.getElementById("satuan");
const proses = document.getElementById("proses");
const reset = document.getElementById("reset");
const output = document.getElementById("output");

// Add an event listener to the proses button
proses.addEventListener("click", function() {
    // Validate the input fields
    if (kode.value === "" || nama.value === "" || harga.value === "" || satuan.value === "") {
        alert("Harap isi semua data barang");
        return;
    }

    // Create a new row for the output table
    const row = document.createElement("tr");

    // Create four cells for the row
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");

    // Set the text content of the cells to the input values
    cell1.textContent = kode.value;
    cell2.textContent = nama.value;
    cell3.textContent = harga.value;
    cell4.textContent = satuan.value;

    // Append the cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    // Append the row to the output table
    output.appendChild(row);

    // Clear the input fields
    kode.value = "";
    nama.value = "";
    harga.value = "";
    satuan.value = "";
});

// Add an event listener to the reset button
reset.addEventListener("click", function() {
    // Confirm the user's intention
    if (confirm("Apakah Anda yakin ingin menghapus semua data yang telah diinput?")) {
        // Remove all rows except the first one from the output table
        while (output.rows.length > 1) {
            output.deleteRow(1);
        }
    }
});