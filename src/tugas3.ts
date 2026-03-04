class Lingkaran {
    jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }

    hitungLuas(): number {
        return Math.PI * Math.pow(this.jariJari, 2);
    }
}

const lingkaran1 = new Lingkaran(7);
console.log(`Jari-jari: ${lingkaran1.jariJari}`);
console.log(`Luas Lingkaran: ${lingkaran1.hitungLuas().toFixed(2)}`);