// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

const hasilFirstLoop1: number[] = [];
const hasilSecondLoop1: number[] = [];
let iSecond1 = 0, iFirst1 = 0;

while(iFirst1 < 10) hasilFirstLoop1.push(iFirst1++);
while(iSecond1 > -10) hasilSecondLoop1.push(iSecond1--);

console.log("Looping Pertama : ", ...hasilFirstLoop1);
console.log("Looping Kedua   : ", ...hasilSecondLoop1);