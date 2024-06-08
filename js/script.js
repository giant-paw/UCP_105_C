function tampilkanWaktuSaatIni() {
    var waktuSekarang = new Date();
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();

    // Format waktu agar dua digit
    jam = padZero(jam);
    menit = padZero(menit);
    detik = padZero(detik);

    var waktuFormatted = jam + ":" + menit + ":" + detik;
    document.getElementById("waktu").textContent = "Anda mengakses di jam: " + waktuFormatted;
}

function padZero(angka) {
    return (angka < 10 ? "0" : "") + angka;
}

tampilkanWaktuSaatIni();

setInterval(tampilkanWaktuSaatIni, 1000);

function handleSubmission() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var program = document.getElementById("program").value;

    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${nama}" readonly />
            </div>
            <div class="form-group">
                <label for="email" style="width: 130px;">Email :</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="program" style="width: 130px;">Program : </label>
                <input type="text" value="${program}" readonly />
            </div>
            <div class="form-group">
                <label for="umur" style="width: 130px;">umur :</label>
                <input type="text" value="${umur}" readonly />
            </div>
        </div>
        `;

        
    Swal.fire({
        title: "Konfirmasi Pengisian Form",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Benar",
        cancelButtonText: "Kembali",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
        // ketika melakukan konfirmasi
    }).then((result) => {
        if (result.isConfirmed) {
            var formulir = {
                name: nama,
                email: email,
                program: program,
                umur: umur,
            };
            console.log(formulir);
            Swal.fire({
                title: "Terima Kasih",
                text: "Terima kasih , kamu akan segera mendapat email",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });

        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Dibatalkan",
                text: "Dibatalkan :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
        }
    });
}