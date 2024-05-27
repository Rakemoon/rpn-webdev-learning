// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini

const shoutOut = (): string => "Halo Function";

console.log(shoutOut());


// ------------------------------------
console.log('')
// ------------------------------------


// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

const calculateMultiply = (x: number, y: number): number => x * y;

let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// -----------------------------------

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

function processSentence(
    name: string,
    age: number,
    address: string,
    hobby: string
): string {
    return [
        `Nama saya ${name}`,
        `umur saya ${age}`,
        `alamat saya di ${address}`,
        `dan saya punya hobby yaitu ${hobby}`,
    ].join(", ");
}

let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"