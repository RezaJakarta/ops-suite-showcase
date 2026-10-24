# Keamanan dan kontrol

Autopilot hanya berguna bila pemiliknya tetap merasa memegang kendali. Prinsip ini yang dipakai di ARUS.

## 1. Izin tiga tingkat

| Tingkat | Artinya | Contoh |
|---|---|---|
| **Hijau** | Boleh langsung | Membaca data, membuka halaman, menampilkan ringkasan |
| **Kuning** | Disebutkan dulu, lalu dijalankan | Mencatat tugas atau catatan, menutup aplikasi atas permintaan |
| **Merah** | Wajib persetujuan pemilik, diperiksa oleh server | Menghapus, mengubah data, mengirim pesan, mengeluarkan uang |

Aturan penting: **alat yang tidak dikenal otomatis dianggap merah.** Lebih aman menolak daripada menjalankan yang tidak dikenal.

## 2. Persetujuan diperiksa server, bukan sekadar diucapkan model

Model AI bisa salah dengar atau salah paham. Karena itu syarat tindakan merah (misalnya jawaban "ya" yang jelas dan baru saja
diucapkan) diperiksa oleh server sendiri. Klaim model saja tidak cukup.

## 3. Pagar yang tidak bisa dilonggarkan lewat ucapan

- Terminal, shell, dan alat sistem tidak dibuka.
- File program dan skrip tidak pernah dibuka karena membukanya sama dengan menjalankannya.
- Folder rahasia, kunci, dan berkas bernama password ditolak.
- Lokasi di luar folder yang diizinkan ditolak.
- Menutup aplikasi hanya dilakukan dengan "tutup sopan", sehingga aplikasi tetap bertanya bila ada yang belum disimpan.

## 4. Jujur soal keadaan

Hasil alat hanya menyatakan sesuatu sudah terjadi bila benar-benar terkonfirmasi. Contoh: "sudah ditutup" hanya bila layar melaporkan
sendiri bahwa tampilannya tertutup. Bila tidak pasti, asisten diperintahkan mengaku belum bisa memastikan.

## 5. Gagal aman dan terpantau

- Tarif atau data acuan yang belum diverifikasi, atau sudah kedaluwarsa, tidak boleh dipakai untuk keputusan harga.
- Penjaga otomatis memulihkan bagian yang mati, dengan batas pemulihan agar tidak berputar-putar, lalu mencatat peristiwanya.
- Pemakaian alat dicatat (waktu, alat, tingkat izin), tanpa menyimpan isi percakapan sensitif.

## 6. Data

- Data bisnis disimpan di akun Google dan laptop pemilik.
- Kunci API dan sidik suara disimpan terpisah dari kode dan tidak masuk repositori.
- Asisten suara memakai layanan Gemini milik Google untuk memahami dan menjawab; data percakapan mengikuti kebijakan Google.
