// examples/safe-write.gs — contoh penulisan data yang aman (generik, bukan kode asli)
//
// Masalah yang dicegah: dua orang menyimpan bersamaan → baris saling timpa atau ID kembar.
// Caranya: kunci skrip (LockService) membungkus setiap penulisan, dan ID dibuat di dalam kunci.

const EXAMPLE_SHEET = "Requests";

/** Jalankan fungsi `work` sambil memegang kunci; jika kunci tidak didapat dalam 15 detik, lapor ramah. */
function withScriptLock_(work) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) {
    throw new Error("Sistem sedang sibuk menyimpan data lain. Coba lagi beberapa detik lagi.");
  }
  try {
    return work();
  } finally {
    lock.releaseLock();
  }
}

/** ID berurutan per hari, aman dipanggil dari dalam kunci. */
function nextRequestId_(sheet, now) {
  const day = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyMMdd");
  const prefix = "RQ-" + day + "-";
  const last = sheet.getLastRow();
  let max = 0;
  if (last > 1) {
    sheet.getRange(2, 1, last - 1, 1).getValues().forEach(function (r) {
      const id = String(r[0] || "");
      if (id.indexOf(prefix) === 0) max = Math.max(max, parseInt(id.slice(prefix.length), 10) || 0);
    });
  }
  return prefix + String(max + 1).padStart(3, "0");
}

/** Contoh pemakaian: buat satu permintaan dengan validasi dasar. */
function createRequest(input) {
  const qty = Number(input.qty);
  if (!input.product || !(qty > 0)) {
    throw new Error("Produk dan jumlah wajib diisi, dan jumlah harus lebih dari 0.");
  }
  return withScriptLock_(function () {
    const sheet = SpreadsheetApp.getActive().getSheetByName(EXAMPLE_SHEET);
    const now = new Date();
    const id = nextRequestId_(sheet, now);
    sheet.appendRow([id, now, input.requester || "", input.product, qty, "Menunggu"]);
    return { success: true, id: id, message: "Permintaan " + id + " tersimpan." };
  });
}
