const kode = document.getElementById("kode");
const nama = document.getElementById("nama");
const harga = document.getElementById("harga");
const satuan = document.getElementById("satuan");
const proses = document.getElementById("proses");
const reset = document.getElementById("reset");
const output = document.getElementById("output");

proses.addEventListener("click", function() {
    if (kode.value === "" || nama.value === "" || harga.value === "" || satuan.value === "") {
        alert("Harap isi semua data barang");
        return;
    }

    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");

    cell1.textContent = kode.value;
    cell2.textContent = nama.value;
    cell3.textContent = harga.value;
    cell4.textContent = satuan.value;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    output.appendChild(row);

    kode.value = "";
    nama.value = "";
    harga.value = "";
    satuan.value = "";
});

reset.addEventListener("click", function() {
    if (confirm("Apakah kamu yakin ingin menghapus semua data yang telah diinput?")) {
        while (output.rows.length > 1) {
            output.deleteRow(1);
        }
    }
});