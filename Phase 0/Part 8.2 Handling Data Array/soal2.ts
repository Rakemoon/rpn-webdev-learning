let input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(inputs: string[]): void {
    console.log(inputs);
    const [date, month, year] = inputs[3].split("/").map(x => parseInt(x));
    const monthString = (new Date(year, month-1, date)).toLocaleString("id", { month: "long"});
    console.log(monthString);
    console.log([year, date, month]);
    console.log(`${date}-${month}-${year}`);
    console.log(inputs[1].slice(0, 15));
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */