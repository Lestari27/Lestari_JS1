// Contoh penggunaan if, else, dan nested if
let ipk = 3.48;
if (ipk >= 3.5) {
    console.log("Cumlaude.");
} else if (ipk >= 3.0) {
    console.log("Sangat baik.");
} else {
    console.log("Anda belum lulus.");
}

// Contoh penggunaan switch-case
let bulan = "november";
switch (bulan) {
    case "januari":
      console.log("Ini bulan pertama");
      break;
    case "febuary":
      console.log("Ini bulan kedua");
      break;
    case "maret":
        console.log("Ini bulan ketiga");
        break;
    case "april":
        console.log("Ini bulan keempat");
        break;
    case "mei":
        console.log("Ini bulan kelima");
        break;
    case "juni":
        console.log("Ini bulan keenam");
        break;
    case "juli":
        console.log("Ini bulan ketujuh");
        break;
    case "agustus":
        console.log("Ini bulan kedelapan");
        break;
    case "september":
        console.log("Ini bulan kesembilan");
        break;
    case "oktober":
        console.log("Ini bulan kesepuluh");
        break;
    case "november":
        console.log("Ini bulan kesebelas");
        break;
    case "desember":
        console.log("Ini bulan kedua belas");
        break;
    default:
      console.log("IPK Anda belum lulus.");
};

// Contoh penggunaan for statement
for (let i = 1; i <= 10; i++) {
    console.log("Urutan ke-" + i);
}

// Contoh penggunaan while
let Hasil = 11;
while (Hasil <= 20) {
  console.log("hasil ke-" + Hasil);
  Hasil++;
}

// Contoh penggunaan do-while
let tanggal = 21;
do {
  console.log("tanggal ke-: " + tanggal);
  tanggal++;
} while (tanggal <= 30);

// Contoh penggunaan function
function Perjumlahan(angka1, angka2) {
  return angka1 + angka2;
}

let pertambahan = Perjumlahan(17, 10);
console.log("Hasil perhitungan : " + pertambahan);