// examples/release-gate.js — contoh gerbang kualitas sebelum rilis (generik, Node.js).
//
// Pemakaian: node release-gate.js <folder-proyek>
// Memeriksa: sintaks file .gs/.html dan pola berisiko sederhana (fungsi admin tanpa pengecekan akses).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(process.argv[2] || ".");
const problems = [];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!/^(node_modules|\.git)$/.test(entry.name)) walk(p, out);
    } else if (/\.(gs|js)$/.test(entry.name)) {
      out.push(p);
    }
  }
  return out;
}

for (const file of walk(ROOT)) {
  const src = fs.readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file);

  // 1) Sintaks: kompilasi tanpa menjalankan
  try {
    new vm.Script(src, { filename: rel });
  } catch (e) {
    problems.push(`[sintaks] ${rel}: ${e.message}`);
    continue;
  }

  // 2) Fungsi "admin" (nama berawalan admin/reset/delete/clear) harus memanggil pengecekan akses
  const fnRe = /function\s+((?:admin|reset|delete|clear|purge)[A-Za-z0-9_]*)\s*\(([^)]*)\)\s*\{/g;
  let m;
  while ((m = fnRe.exec(src))) {
    const bodyStart = m.index + m[0].length;
    // Isi fungsi = sampai "function" berikutnya (atau 400 karakter), supaya pengecekan fungsi lain tidak ikut terhitung
    const nextFn = src.indexOf("function", bodyStart);
    const end = Math.min(bodyStart + 400, nextFn === -1 ? src.length : nextFn);
    const body = src.slice(bodyStart, end);
    if (!/requireOwner_?\(|requireAdmin_?\(|checkAccess_?\(/.test(body)) {
      problems.push(`[akses] ${rel}: fungsi ${m[1]} belum memanggil pengecekan akses`);
    }
  }
}

if (problems.length) {
  console.log(problems.join("\n"));
  console.log(`\nGAGAL: ${problems.length} masalah. Perbaiki sebelum rilis.`);
  process.exit(1);
}
console.log("LULUS: semua file lolos pemeriksaan.");
