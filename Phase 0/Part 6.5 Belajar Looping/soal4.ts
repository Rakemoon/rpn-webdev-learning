//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

const counters = [2, 5, 9];
const kelipatan = [3, 6, 10];
for (let ii = 0; ii < counters.length; ii++)
    for (let i = 1; i <= 100; i += counters[ii])
        console.log(i%kelipatan[ii] === 0 ? `${i} kelipatan ${kelipatan[ii]}` : i);