const kode_pelanggan = document.getElementById("kode_pelanggan");
const nama_pelanggan = document.getElementById("nama_pelanggan");
const telp = document.getElementById("telp");
const proses = document.getElementById("proses");
const reset  = document.getElementById("reset");
const output = document.getElementById("output");
const data_pelanggan = [];

proses.addEventListener("click", function() {
    if (kode_pelanggan.value === "" || nama_pelanggan.value === "" || telp.value === "") {
        alert("Harap isi semua data pelanggan");
        return;
    }

    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");

    cell1.textContent = kode_pelanggan.value;
    cell2.textContent = nama_pelanggan.value;
    cell3.textContent = telp.value;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    output.appendChild(row);

    const pelanggan = {
        kode: kode_pelanggan.value,
        nama: nama_pelanggan.value,
        telp: telp.value
    };

    data_pelanggan.push(pelanggan);
    kode_pelanggan.value = "";
    nama_pelanggan.value = "";
    telp.value = "";
});

reset.addEventListener("click", function() {
    if (confirm("Apakah kamu yakin ingin menghapus semua data yang telah diinput?")) {
        while (output.rows.length > 1) {
            output.deleteRow(1);
        }
    }
});