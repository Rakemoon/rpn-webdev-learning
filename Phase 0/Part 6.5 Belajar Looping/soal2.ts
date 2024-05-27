// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

const hasilFirstLoop2: number[] = [];
const hasilSecondLoop2: number[] = [];

for (let iFirst2 = 0; iFirst2 < 10; iFirst2++) hasilFirstLoop2.push(iFirst2);
for (let iSecond2 = 0; iSecond2 > -10; iSecond2--) hasilSecondLoop2.push(iSecond2);

console.log("Looping Pertama : ", ...hasilFirstLoop2);
console.log("Looping Kedua   : ", ...hasilSecondLoop2);