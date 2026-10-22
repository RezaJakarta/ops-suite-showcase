# Studi kasus 1 — Tracking indent

## Masalah
Barang indent (pesanan yang dipesan dari vendor dan baru datang beberapa minggu kemudian) dilacak lewat chat,
spreadsheet terpisah, dan telepon. Sales sering bertanya "barang saya sudah sampai?" ke tim purchasing, dan
purchasing harus membuka banyak file untuk menjawab.

## Solusi
Satu alur dengan tiga tahap yang saling terhubung:

1. **Request** — sales membuat permintaan barang (ID produk, qty, proyek, tanggal dibutuhkan).
2. **Purchase Order** — tim purchasing mengunggah daftar OA dari vendor; nomor PO dan status tiba tercatat per baris.
3. **Tracking** — status tiap barang: *menunggu*, *telah tiba*, atau *terlambat*, dengan sisa hari.

Sistem mengirim **email otomatis** ringkas ke pemilik permintaan saat ada barang yang melewati tanggal estimasi.

## Keputusan desain
- **Kunci baris** menggabungkan nomor referensi + ID produk + qty, bukan urutan baris. Dengan begitu, mengurutkan
  atau menyisipkan baris di sheet tidak merusak data.
- **Notifikasi per kejadian**, bukan per pengecekan: satu barang hanya memicu satu email, jadi tidak ada banjir pesan.
- **Hak akses per peran**: sales hanya mengubah permintaannya sendiri; admin purchasing bisa melihat semua.

## Hasil yang diharapkan (ilustrasi)
- Pertanyaan status tidak lagi perlu membuka banyak file.
- Keterlambatan terlihat sejak hari pertama, bukan saat sudah menumpuk.
- Satu sumber kebenaran untuk sales, purchasing, dan gudang.

## Yang bisa dikembangkan
Persetujuan PO berjenjang, lampiran dokumen per barang, dan pembacaan otomatis dokumen vendor (OCR).
