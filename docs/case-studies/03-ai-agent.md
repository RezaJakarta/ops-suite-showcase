# Studi kasus 3 — AI agent untuk operasional

## Masalah
Pertanyaan yang sama terus berulang: "stok produk ini ada di mana?", "harga terbaru berapa?", "indent mana yang
hampir terlambat?". Setiap pertanyaan membutuhkan orang yang tahu cara membukanya di sistem.

## Solusi
Asisten AI yang bisa dipakai lewat chat di desktop maupun HP, dengan **47 tool** yang membaca data internal:

| Kelompok | Contoh pertanyaan |
|---|---|
| Stok & harga | "stok produk ini di semua gudang?" |
| Indent & PO | "indent mana yang telat minggu ini?" |
| Analisa penjualan | "top 10 produk bulan ini vs bulan lalu" |
| Marketplace | "omzet dua toko dibanding bulan lalu" |
| Sumber eksternal | pencarian web dan pembacaan foto dokumen (OCR) |

Asisten juga memberi **rangkuman harian** tentang error sistem kepada pemilik, supaya masalah ketahuan sebelum pengguna mengeluh.

## Keputusan desain
- **Tool, bukan tebakan.** AI hanya menjawab dari hasil tool yang membaca data sungguhan. Jika data tidak ditemukan,
  jawabannya jujur: "tidak ada data".
- **Hak akses ikut berlaku.** Tool yang membuka data hanya bisa dipakai pengguna yang berhak atas menu tersebut.
- **Satu server untuk desktop dan HP.** Jawaban selalu sama dengan yang dilihat di layar kerja.
- **Memori per pengguna** dibatasi dan bisa dihapus; tidak dipakai untuk menyimpan data sensitif.

## Hasil yang diharapkan (ilustrasi)
- Pertanyaan rutin terjawab tanpa menunggu orang lain.
- Tim lebih banyak memegang keputusan, bukan mencari data.

## Yang bisa dikembangkan
Mode suara, ringkasan mingguan otomatis untuk manajer, dan evaluasi jawaban dengan pertanyaan uji berkala.
