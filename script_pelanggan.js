// script.js
// Get the elements from the document
const kode_pelanggan = document.getElementById("kode_pelanggan");
const nama_pelanggan = document.getElementById("nama_pelanggan");
const telp = document.getElementById("telp");
const proses = document.getElementById("proses");
const reset  = document.getElementById("reset");
const output = document.getElementById("output");

// Create an array to store the data pelanggan
const data_pelanggan = [];

// Add an event listener to the proses button
proses.addEventListener("click", function() {
    // Validate the input fields
    if (kode_pelanggan.value === "" || nama_pelanggan.value === "" || telp.value === "") {
        alert("Harap isi semua data pelanggan");
        return;
    }

    // Create a new row for the output table
    const row = document.createElement("tr");

    // Create three cells for the row
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");

    // Set the text content of the cells to the input values
    cell1.textContent = kode_pelanggan.value;
    cell2.textContent = nama_pelanggan.value;
    cell3.textContent = telp.value;

    // Append the cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // Append the row to the output table
    output.appendChild(row);

    // Create an object to store the data pelanggan
    const pelanggan = {
        kode: kode_pelanggan.value,
        nama: nama_pelanggan.value,
        telp: telp.value
    };

    // Push the object to the data pelanggan array
    data_pelanggan.push(pelanggan);

    // Clear the input fields
    kode_pelanggan.value = "";
    nama_pelanggan.value = "";
    telp.value = "";
});

reset.addEventListener("click", function() {
    // Confirm the user's intention
    if (confirm("Apakah Anda yakin ingin menghapus semua data yang telah diinput?")) {
        // Remove all rows except the first one from the output table
        while (output.rows.length > 1) {
            output.deleteRow(1);
        }
    }
});