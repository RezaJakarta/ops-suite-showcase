# Studi kasus 2 — Inventory multi-gudang dan jejak audit

## Masalah
Saat stok di sistem tidak cocok dengan stok fisik, tim harus membongkar dokumen fisik satu per satu untuk tahu
kapan dan oleh siapa barang keluar atau masuk. Proses ini lambat dan sering berakhir tanpa jawaban pasti.

## Solusi
- **Mutasi tercatat per gudang**: setiap barang masuk, keluar, dan pindah gudang menjadi satu baris dengan
  tanggal, pelaku, dan dokumen acuan.
- **Kartu stok** per produk: saldo berjalan dari waktu ke waktu, bisa dibuka dari tabel produk.
- **Brankas audit**: catatan perubahan penting disimpan di sheet terpisah yang hanya bisa **ditambah**.
  Tidak ada tombol ubah atau hapus untuk catatan tersebut.
- **Pemeriksaan integritas** otomatis: menandai saldo yang tidak cocok dengan jumlah mutasinya.

## Keputusan desain
- **Brankas terpisah dari data kerja.** Staf yang mengedit stok tidak otomatis bisa mengubah jejak audit.
- **Pembacaan dan penulisan dikunci**, sehingga dua orang yang mencatat mutasi bersamaan tidak saling menimpa.
- **Setiap perubahan membawa alasan**, supaya selisih bisa dijelaskan tanpa membuka dokumen fisik.

## Hasil yang diharapkan (ilustrasi)
- Selisih stok bisa ditelusuri dari data dalam hitungan menit.
- Dokumen fisik tetap disimpan, tetapi tidak lagi menjadi satu-satunya bukti.
- Ada cadangan otomatis berkala, dengan tombol pulihkan per tab.

## Yang bisa dikembangkan
Stock opname dengan pemindai barcode/QR dari HP, notifikasi stok minimum, dan persetujuan mutasi berjenjang.
