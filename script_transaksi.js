const no_faktur = document.getElementById("no_faktur");
const kode_barang = document.getElementById("kode_barang");
const harga_jual = document.getElementById("harga_jual");
const jumlah_jual = document.getElementById("jumlah_jual");
const proses = document.getElementById("proses");
const reset  = document.getElementById("reset");
const output = document.getElementById("output");

proses.addEventListener("click", function() {
    if (no_faktur.value === "" || kode_barang.value === "" || harga_jual.value === "" || jumlah_jual.value === "") {
        alert("Harap isi semua data transaksi");
        return;
    }

    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");

    cell1.textContent = no_faktur.value;
    cell2.textContent = kode_barang.value;
    cell3.textContent = harga_jual.value;
    cell4.textContent = jumlah_jual.value;

    let total = harga_jual.value * jumlah_jual.value;
    let diskon = 0;
    if (jumlah_jual.value > 10) {
        diskon = 0.05 * total;
    }
    if (kode_barang.value === "BR01") {
        diskon = 0.1 * total;
    }

    cell5.textContent = total;
    cell6.textContent = diskon;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    output.appendChild(row);

    no_faktur.value = "";
    kode_barang.value = "";
    harga_jual.value = "";
    jumlah_jual.value = "";
});

reset.addEventListener("click", function() {
    if (confirm("Apakah Anda yakin ingin menghapus semua data yang telah diinput?")) {
        while (output.rows.length > 1) {
            output.deleteRow(1);
        }
    }
});
