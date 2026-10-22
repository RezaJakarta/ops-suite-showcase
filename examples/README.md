# Contoh kode

Kode di folder ini **generik dan ditulis ulang untuk contoh**. Tidak menyalin kode asli dari sistem apa pun.

| File | Isi |
|---|---|
| `safe-write.gs` | Penulisan data yang aman dengan kunci skrip dan ID berurutan per hari |
| `release-gate.js` | Gerbang kualitas sederhana: cek sintaks dan fungsi admin tanpa pengecekan akses |

Jalankan gerbang kualitas:

```bash
node examples/release-gate.js <folder-proyek>
```
