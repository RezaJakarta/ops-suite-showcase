# ARUS — Operations Suite (showcase)

Contoh **platform operasional ringan** di atas Google Workspace: inventory, procurement & tracking indent,
sales & pricing, marketplace, dokumen logistik, dan AI agent yang membaca data semua modul.

Repo ini berisi **contoh yang sudah dibersihkan**: studi kasus, arsitektur, dan potongan kode generik.
Tidak ada data asli, nama perusahaan, atau kredensial.

![ARUS — Integrated Operations Platform](docs/images/banner.svg)

## Studi kasus

| Studi kasus | Masalah | Solusi | Hasil |
|---|---|---|---|
| [Tracking indent](docs/case-studies/01-tracking-indent.md) | Status barang indent tersebar di chat dan spreadsheet | Satu alur Request → PO → Tracking, notifikasi otomatis saat telat | Pertanyaan "barang saya sudah sampai?" tidak perlu lagi dicek manual |
| [Inventory multi-gudang](docs/case-studies/02-inventory-audit.md) | Selisih stok sulit ditelusuri, bukti hanya dokumen fisik | Mutasi tercatat per gudang + brankas audit yang hanya bisa ditambah | Selisih bisa dicek dari data, tidak perlu membongkar dokumen fisik |
| [AI agent untuk operasional](docs/case-studies/03-ai-agent.md) | Pertanyaan harga, stok, dan status harus bertanya ke banyak orang | Asisten AI dengan 47 tool yang membaca data internal + pencarian web | Jawaban cepat dari data yang sama dengan yang dipakai tim |

## Yang ada di repo ini

- `docs/images/` — arsitektur dan kemampuan (ilustrasi, bukan screenshot asli).
- `docs/case-studies/` — tiga studi kasus dengan masalah, keputusan desain, dan hasil.
- `examples/` — contoh kode generik: penulisan data aman dengan kunci, pemeriksaan akses per menu, dan gerbang kualitas sebelum rilis.

## Prinsip desain

1. **Data di tempat yang sudah dipakai tim.** Google Sheets sebagai basis data: tidak ada server baru yang harus dipelihara.
2. **Akses per menu.** Setiap menu punya daftar siapa yang boleh Lihat atau Edit, dikelola dari satu halaman.
3. **Tulis data selalu dikunci.** Dua orang yang menyimpan bersamaan tidak saling menimpa baris.
4. **Error teknis dikumpulkan, bukan disembunyikan.** Pesan ke pengguna jelas; detail teknis masuk ke catatan untuk pemilik sistem.
5. **Satu design system.** Semua menu memakai satu sumber gaya, sehingga tampil konsisten di laptop, tablet, dan HP.

## Teknologi

Google Apps Script · Google Sheets & Drive · Bootstrap 5 · Bootstrap Icons · Chart.js · Gemini API (function calling) ·
Cloudflare Pages (PWA) · Node.js (alat bantu rilis)

## Catatan

Ini **contoh portofolio**. Angka dan nama dalam studi kasus adalah ilustrasi, bukan data nyata.
Dibangun dengan bantuan AI; perancangan sistem, pemilihan fitur, dan pengujian dilakukan oleh pembuatnya.

---

Dibuat oleh **Reza Ananda Putra** · [GitHub](https://github.com/RezaJakarta)
