# Program Interaktif Lampu ON/OFF Berbasis Web (HTML, CSS, JavaScript)
# Deskripsi Program

Aplikasi ini merupakan program sederhana berbasis web yang dikembangkan menggunakan HTML, CSS, dan JavaScript. Fungsinya adalah untuk menampilkan simulasi interaktif lampu yang dapat dinyalakan dan dimatikan melalui klik pada gambar.

Pengguna cukup menekan (klik) gambar lampu yang tersedia pada halaman web. Program kemudian akan memproses interaksi tersebut dan mengganti tampilan gambar sesuai kondisi (menyala atau mati).

Seluruh proses berjalan di sisi client (browser) tanpa menggunakan database maupun backend server.

# Struktur Folder Proyek

Berikut adalah susunan direktori proyek:

Tugas4-pweb/
│
├── index.html          
├── style.css           
├── script.js         
├── pic_bulboff.gif     
├── pic_bulbon.gif      
└── README.md           

# Penjelasan Kode

Program diawali dengan pembuatan struktur halaman menggunakan file index.html. File ini berisi elemen gambar (<img>) yang digunakan sebagai objek utama interaksi. Gambar tersebut memiliki atribut id agar dapat diakses melalui JavaScript.

Atribut onclick atau event listener digunakan untuk memanggil fungsi ketika gambar diklik oleh pengguna.

Selanjutnya, file style.css digunakan untuk mengatur tampilan halaman. CSS berfungsi untuk mengatur posisi elemen, ukuran gambar, dan tata letak agar tampilan lebih rapi dan terpusat.

Bagian utama logika program berada pada file script.js. Pada file ini didefinisikan sebuah fungsi, misalnya ubahLampu(), yang bertugas untuk mengganti gambar berdasarkan kondisi saat ini.

Program menggunakan metode:

document.getElementById() untuk mengambil elemen gambar berdasarkan ID

Struktur percabangan if dan else untuk mengecek kondisi gambar

Manipulasi atribut src untuk mengganti gambar secara dinamis

Logika utama bekerja dengan cara:

Mengambil elemen gambar

Mengecek apakah sumber gambar saat ini adalah lampu mati

Jika lampu mati, maka diganti menjadi lampu menyala

Jika lampu menyala, maka dikembalikan menjadi lampu mati

Operator logika digunakan untuk memastikan kondisi yang sesuai sebelum mengganti gambar.

# Alur Kerja Program

Halaman web dimuat di browser

Lampu dalam kondisi awal (mati)

Pengguna mengklik button

JavaScript dijalankan

Gambar berubah sesuai kondisi

Proses dapat diulang untuk efek toggle

# Kesimpulan

Program ini menunjukkan penerapan dasar pengembangan web menggunakan HTML, CSS, dan JavaScript. Konsep yang diterapkan meliputi struktur halaman, pemisahan styling, manipulasi DOM, event handling, serta penggunaan percabangan logika.

Walaupun sederhana, project ini mencerminkan pemahaman fundamental mengenai interaksi dinamis pada halaman web dan prinsip pemisahan struktur, tampilan, dan logika dalam pengembangan aplikasi berbasis web.

