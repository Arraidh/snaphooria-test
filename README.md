# Snaphooria Pre-test
### 1. **Soal Database :**

Buatlah struktur database **mysql** untuk mengelola data buku yang mencakup atribut berikut:

- `id`: Integer, Primary Key, Auto Increment
- `judul`: String, tidak boleh null
- `penulis`: String, tidak boleh null
- `tahun_terbit`: Integer, tidak boleh null

#### Answer
sql query terdapat pada file `no_1.sql`

### 2. **Laravel API Endpoint :**

Implementasikan endpoint berikut untuk API: 

**POST /buku**

- Deskripsi: Menambahkan buku baru.
- Body Request:

```json
{
    "judul": "Contoh Judul",
    "penulis": "Contoh Penulis",
    "tahun_terbit": 2023
}
```

**GET /buku**

- Deskripsi: Mengambil semua buku.
- Respon:

```json
[
    {
        "id": 1,
        "judul": "Contoh Judul",
        "penulis": "Contoh Penulis",
        "tahun_terbit": 2023
    }
]
```

#### answer
1. Instalasi package composer dan setup env
   ```
   composer install
   ```

   setup file `.env` dengan variable db sebagai berikut untuk konfigurasi mysql
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE="library_snaphooria"
    DB_USERNAME="root"
    DB_PASSWORD=""
    ```
    nama databse bisa disesuaikan dengan nama `library_snaphooria`
    
3. Jalankan server mysql menggunakan xampp
  ![image](https://github.com/user-attachments/assets/63b6ca7d-5b40-41f7-ab88-4a6a4df5c846)

4. Jalankan program laravel
   ```
   php artisan serve
   ```
5. Akses API
   - Dapat memasukan url dengan menggunakan postman
     ![image](https://github.com/user-attachments/assets/813e989a-9e35-4813-82c3-c1db56440f36)
   - Menggunakan command line
     ```
     curl http://127.0.0.1:8000/buku
     ```


### 3. **Validasi Data** Next.js:

- Buatlah form input untuk pendaftaran pengguna. Implementasikan validasi untuk memastikan semua field `(nama, email, password)` terisi dan email memiliki format yang benar.


#### Answer
1. Jalankan perintah instalasi dependencies dengan perintah berikut pada terminal
   ```
   yarn install
   ```
2. Jalankan aplikasi dengan perintah
   ```
   yarn run dev
   ```
3. Kunjungi url development pada `http://localhost:3000/`
   ```
   http://localhost:3000/
   ```
   [Link](http://localhost:3000/)
   

### 4. Query SQl Mencari Ponsel Dalam Database:

Sebuah tabel menyimpan data-data ponsel yang terdiri dari beberapa kolom: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/820ad8d7-0391-4954-89e7-6a158706b373/ae14d994-820e-4c2a-b29c-0916e016597c/image.png)

Tim anda ingin mendapatkan data-data semua Merek dan jumlah dari model yang diterbitkan merek tersebut yang merupakan tipe DualSim, Apakah Kueri SQL yang ada di bawahini benar? Jika salah, apa kueri yang benar?

```sql
SELECT Ponsel.Merek, COUNT(Ponsel.Model)FROM PonselWHERE Ponsel.DualSim = TRUE
```

#### Answer
sql query terdapat pada file `no_4.sql`

### 5. Soal Next.js: Mengambil dan Menampilkan Data

**Deskripsi:**
Buatlah aplikasi Next.js sederhana yang mengambil data buku dari API eksternal dan menampilkannya dalam daftar. Setiap buku harus memiliki judul, penulis, dan tahun terbit.

**Ambil Data dari API**:

- Gunakan `getStaticProps` atau `getServerSideProps` untuk mengambil data buku dari API eksternal (misalnya, API publik atau dummy seperti JSONPlaceholder atau API buku lainnya).

#### Answer
1. Jalankan perintah instalasi dependencies dengan perintah berikut pada terminal
   ```
   yarn install
   ```
2. Jalankan aplikasi dengan perintah
   ```
   yarn run dev
   ```
3. Kunjungi url development pada `http://localhost:3000/`
   ```
   http://localhost:3000/
   ```
   [Link](http://localhost:3000/)

### 6. Logika **Algoritma Pemrograman**

1. Buatlah sebuah fungsi yang dapat menemukan angka terbesar dari sebuah array. Contoh: Jika array yang diberikan adalah `[1, 5, 3, 7, 2],` maka hasilnya adalah `7` ***dalam bahasa PHP atau Next.js.***
2. Buatlah sebuah fungsi untuk mengurutkan angka dalam sebuah array dari yang terkecil ke yang terbesar. Contoh: Jika array yang diberikan adalah `[3, 1, 5, 2, 4],` maka hasilnya adalah  `[1, 2, 3, 4, 5]` ***dalam bahasa PHP atau Next.js***.

#### Answer
fungsi terdapat pada file `no_6.js`
