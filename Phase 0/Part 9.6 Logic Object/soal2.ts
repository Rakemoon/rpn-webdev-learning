/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

interface Barang {
    name: string,
    price: number,
}

interface StrukPembelian {
    memberId: string,
    money: number,
    changeMoney: number,
    listPurchased: Barang["name"][],
}

const warehouse: Barang[] = [
    {
        name: "Baju Brand Zoro",
        price: 500000,
    },
    {
        name: "Sepatu brand Stacattu",
        price: 1500000,
    },
    {
        name: "Baju brand H&N",
        price: 250000,
    },
    {
        name: "Sweater brand Uniklooh",
        price: 175000,
    },
    {
        name: "Casing Handphone",
        price: 50000,
    },
].sort((a, b) => b.price - a.price);

function shoppingTime(
    memberId?: StrukPembelian["memberId"],
    money: StrukPembelian["money"] = 0
): StrukPembelian | string {
    if (!memberId || memberId.length === 0) return "Mohon maaf, toko X hanya berlaku untuk member saja";
    if (money < warehouse[warehouse.length - 1].price) return "Mohon maaf, uang anda tidak cukup";
    const pembelian: StrukPembelian = {
        memberId,
        money,
        changeMoney: money,
        listPurchased: [],
    };

    for (const barang of warehouse) {
        if (barang.price > pembelian.changeMoney) continue;
        pembelian.listPurchased.push(barang.name);
        pembelian.changeMoney -= barang.price;
    }
    return pembelian;
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja