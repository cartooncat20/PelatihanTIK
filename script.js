// Memilih elemen tombol dari HTML berdasarkan ID 'sapabutton'
// Perbaikan: Menggunakan tanda '=' untuk variabel dan fungsi 'getElementById'
const tombolsapa = document.getElementById('sapabutton');

// Menambahkan perintah/kejadian saat tombol diklik
tombolsapa.addEventListener('click', function() {
  // Menampilkan pesan pop-up di layar
  alert('Halo! Terima kasih telah mengunjungi kami!');
});
