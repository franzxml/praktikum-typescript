interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuBaru: Buku = {
    judul: "Belajar TypeScript untuk Pemula",
    pengarang: "Ahmad",
    tahunTerbit: 2024,
    tersedia: true
};

console.log(`Judul: ${bukuBaru.judul}`);
console.log(`Pengarang: ${bukuBaru.pengarang}`);
console.log(`Tahun Terbit: ${bukuBaru.tahunTerbit}`);
console.log(`Tersedia: ${bukuBaru.tersedia ? "Ya" : "Tidak"}`);