// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = 'wow JavaScript is so cool';
let exampleFirstWord = word2[0] + word2[1] + word2[2];

console.log('First Word: ' + exampleFirstWord);


// ---------------------------------------
const secondWord2 = word2.charAt(4) +
    word2.charAt(5) +
    word2.charAt(6) +
    word2.charAt(7) +
    word2.charAt(8) +
    word2.charAt(9) +
    word2.charAt(10) +
    word2.charAt(11) +
    word2.charAt(12) +
    word2.charAt(13);
    
const thirdWord2 = word2.charAt(15) +
    word2.charAt(16);

const fourthWord2 = word2.charAt(18) +
    word2.charAt(19);

const fifthWord2 = word2.charAt(20) +
    word2.charAt(21) +
    word2.charAt(22) +
    word2.charAt(23) +
    word2.charAt(24);

console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);
// ---------------------------------------