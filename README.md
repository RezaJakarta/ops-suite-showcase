<div align="center">

<img src="docs/images/banner.svg" alt="ARUS — AI Operations Autopilot" width="100%">

<br>

**Sistem operasional bisnis yang berjalan nyaris autopilot.**
Tim AI bekerja mengikuti SOP dan KPI, memantau data, dan menyiapkan keputusan,
sementara manusia tetap memegang setiap keputusan penting.

<br>

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-3366ff?style=for-the-badge&logo=google&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini%20AI-0b1b3f?style=for-the-badge&logo=googlegemini&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-3c873a?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-111111?style=for-the-badge&logo=threedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-5cdcff?style=for-the-badge)

<br>

[**Kenapa ARUS**](#kenapa-arus) · [**Cara kerja**](#cara-kerja-autopilot) · [**Fitur**](#fitur) · [**Keamanan**](#keamanan-dan-kontrol) · [**Demo**](#demo) · [**Kerja sama**](#kerja-sama)

</div>

<br>

## Kenapa ARUS

Banyak bisnis kecil dan menengah masih dijalankan dari chat, spreadsheet, dan ingatan beberapa orang kunci.
Pertanyaan yang sama terus berulang, pekerjaan rutin memakan waktu, dan bisnis tersendat saat orang yang tahu sedang tidak ada.

**ARUS** adalah kerangka sistem operasional yang membuat pekerjaan rutin itu berjalan sendiri:

- **Tim AI dengan peran jelas.** Tiap "karyawan AI" punya tugas rutin, SOP, dan KPI tertulis, bukan sekadar chatbot.
- **Autopilot dengan rem.** AI menyiapkan dan menjalankan yang aman; hal sensitif selalu menunggu persetujuan manusia.
- **Bisa diajak bicara.** Tanya data dengan bahasa sehari-hari, lewat ketikan maupun suara.
- **Menjaga dirinya sendiri.** Bagian yang mati atau macet dipulihkan otomatis, dan semua tindakan tercatat.
- **Dibuat sesuai bisnis Anda.** Modul, peran, SOP, dan aturan disesuaikan dengan cara kerja bisnis masing-masing.

## Cara kerja autopilot

<img src="docs/images/autopilot-loop.svg" alt="Alur autopilot: pantau, analisis, rekomendasi, gerbang aturan, persetujuan manusia, eksekusi, umpan balik" width="100%">

1. **Pantau.** Karyawan AI membaca data bisnis secara berkala (hanya-baca).
2. **Analisis dan rekomendasi.** Temuan disusun menjadi usulan yang jelas, lengkap dengan alasan.
3. **Gerbang aturan.** Aturan bisnis (misalnya batas margin atau batas anggaran) memeriksa usulan sebelum diteruskan.
4. **Persetujuan manusia.** Tindakan berisiko berhenti di sini sampai pemilik menyetujui.
5. **Eksekusi dan umpan balik.** Hasilnya dicatat dan kembali menjadi bahan analisis berikutnya.

Antar-peran, pekerjaan diserahkan lewat **kartu serah terima** yang boleh ditolak bila kurang lengkap,
sehingga departemen bekerja berantai dan bukan sendiri-sendiri.

## Fitur

| | |
|---|---|
| **Kantor virtual AI** | Denah kantor 3D yang bisa diputar, di-zoom, dan digeser. Tiap departemen punya ruang, tiap karyawan AI punya nama, tugas, dan keadaan nyata (ditugaskan, menunggu jadwal, siaga, atau belum direkrut). |
| **Karyawan AI dengan SOP dan KPI** | Peran, tugas rutin berfrekuensi, langkah SOP, dan KPI bersasaran. Hasil KPI hanya ditampilkan bila benar-benar terukur; selain itu tertulis jujur "belum diukur". |
| **Asisten suara yang natural** | Percakapan dua arah dengan bahasa Indonesia sehari-hari, bisa disela, dan bisa memakai alat (membaca data, membuka aplikasi dan berkas, mencatat tugas). |
| **Izin tiga tingkat** | Hijau jalan langsung, kuning disebut dulu, merah wajib persetujuan pemilik. Alat yang tidak dikenal otomatis dianggap merah. |
| **Alur kerja berantai** | Rantai tahap dengan kartu serah terima dan gerbang aturan, termasuk rumus penentu harga minimum agar penjualan tidak rugi. |
| **Penjaga otomatis** | Memantau server dan mikrofon, memulihkan yang mati atau macet, dengan batas supaya tidak berputar-putar dan lampu kesehatan yang jujur. |
| **Jejak audit** | Setiap pemakaian alat tercatat dengan tingkat izinnya, tanpa menyimpan isi percakapan sensitif. |
| **Tampilan jujur** | Hasil alat hanya menyatakan "sudah terbuka" atau "sudah ditutup" bila keadaan layar benar-benar terkonfirmasi. |

<sub>Sebagian fitur masih dalam pengembangan aktif (misalnya kunci suara pemilik dan penghubung ke akun toko online). Status tiap fitur dibahas terbuka di [docs/status.md](docs/status.md).</sub>

## Keamanan dan kontrol

- **Data bisnis tetap di akun Anda.** Data disimpan di Google Sheets dan Drive milik Anda, dan alat berjalan di laptop Anda. Perlu diketahui terbuka: pertanyaan yang Anda ajukan ke asisten AI diproses oleh layanan Gemini milik Google, jadi ikuti kebijakan privasi Google untuk data yang Anda kirim lewat percakapan.
- **Rahasia tidak pernah ikut ke repositori.** Kunci API, sidik suara, dan data bisnis disimpan terpisah dari kode.
- **AI tidak membuka kata sandi.** Halaman kata sandi dan akun ditolak. Akses ke sistem pihak ketiga (misalnya akun toko online) dirancang lewat jalur resmi dengan izin baca saja, bukan dengan menyimpan kata sandi.
- **Tindakan berisiko selalu ada gerbangnya.** Menghapus, mengubah data, mengirim, dan mengeluarkan uang menunggu persetujuan.
- **Gagal aman.** Bila sesuatu tidak bisa dipastikan, sistem menolak atau meminta konfirmasi, bukan menebak.

Rincian: [docs/keamanan-dan-kontrol.md](docs/keamanan-dan-kontrol.md).

## Demo

<img src="docs/images/kantor-virtual-ai.png" alt="Kantor virtual AI: ruang departemen berpenyekat kaca, karyawan AI bernama, dan Midun sebagai manajer" width="100%">

<sub>Tangkapan layar kantor virtual dengan **data contoh** (karyawan dan tugas fiktif). Putar, zoom, dan geser dengan mouse.</sub>

<img src="docs/images/kartu-karyawan-ai.svg" alt="Kartu karyawan AI: peran, tugas rutin, SOP, dan KPI" width="100%">

<sub>Ilustrasi kartu karyawan AI dengan isi contoh.</sub>

Skenario penggunaan (fiktif, untuk gambaran): [docs/skenario-penggunaan.md](docs/skenario-penggunaan.md).

## Teknologi

Google Apps Script · Google Sheets dan Drive · Gemini API (function calling dan Live API) · Node.js · Python ·
Three.js · Vosk (pengenalan kata panggil offline)

## Contoh kode

Folder [`examples/`](examples/) berisi potongan kode generik: penulisan data aman dengan kunci,
dan gerbang kualitas sebelum rilis. Tidak menyalin kode dari sistem mana pun.

## Kerja sama

Tertarik dibuatkan sistem autopilot seperti ini untuk bisnis Anda, atau ingin berdiskusi?
Buka [Issue](https://github.com/RezaJakarta/ops-suite-showcase/issues) atau hubungi lewat
[profil GitHub](https://github.com/RezaJakarta).

---

Dibuat oleh **Reza Ananda Putra** · [@RezaJakarta](https://github.com/RezaJakarta)

Dibangun dengan bantuan AI; perancangan sistem, pemilihan fitur, dan pengujian dilakukan oleh pembuatnya.
Seluruh nama, angka, dan tangkapan layar di repositori ini adalah contoh, bukan data nyata siapa pun.

## Lisensi

MIT. Lihat [LICENSE](LICENSE). Contoh kode boleh dipakai ulang dengan mencantumkan sumbernya.

<details>
<summary>English summary</summary>

**ARUS** is a framework for building near-autopilot business operations: AI "employees" with written SOPs and KPIs
monitor your data, prepare decisions, and execute safe actions, while a three-tier permission model (green, yellow, red)
keeps humans in charge of anything sensitive. It includes a 3D virtual office, a natural Indonesian voice assistant,
chained workflows with approval gates, self-healing supervision, and a full audit trail. Built on Google Workspace,
Gemini, and Node.js. Open an issue to discuss a custom build for your business.

</details>
