//* ================================================
//?                 FONKSİYONLAR
//* ================================================

//! 1. Yöntem : Function Declaration
//fonksiyonun tanımlanması
function yazdir() {
  console.log("Ahmet");
}

yazdir(); //Fonks. çağrılması

//Örnek : Parametreli Fonksiyon
function yazdirAd(ad = "Yunus", yaş = 27) {
  console.log(`Adınız ${ad} Yaşınız ${yaş}`);
}

yazdirAd("Yunus Emre", 29);
yazdirAd();

function yasHesapla(dTarih) {
  return 2021 - dTarih;
}

console.log("Yaşınız : " + yasHesapla(1992));

//Klavyeden girilen sayının tek mi cift mi oldugunu donduren bir fonksiyon yazınız

// let sayi = +prompt("Sayıyı giriniz : ");

// tekMiCiftMi(sayi);
// //? Function declaration yöntemi ile fonksiyonu önce çağırıp sonra
// //? tanımlayabiliriz.
// function tekMiCiftMi(sayi) {
//   const sonuc = sayi % 2 ? `${sayi} tektir.` : `${sayi} çifttir.`;
//   return console.log(sonuc);
// }

//! 2. YÖNTEM : FUNCTION EXPRESSION

// const tekCift = function (sayi) {
//   return sayi % 2 ? "TEK" : "ÇİFT";
// };

// console.log(tekCift(sayi));

// //ORNEK : Buyuk sayiyi bul

// const buyukBul = function (num1, num2, num3) {
//   let buyuk;

//   if (num1 > num2) {
//     buyuk = num1;
//   } else {
//     buyuk = num2;
//   }

//   if (buyuk < num3) {
//     buyuk = num3;
//   }

//   return buyuk;
// };

// console.log("En büyük : " + buyukBul(5, 3, 8));

// console.log(Math.max(5, 3, 8));

//! 3. YÖNTEM : ARROW FONKSİYONLARI

let toplamTekCift = (x, y, z) => {
  const a = x + y + z;

  return a % 2 ? "TEK" : "CİFT";
};

console.log(toplamTekCift(6, 2, 7));

const topla = (a, b) => a + b;

console.log("Toplam = " + topla(9, 23));

const ciftMi = (s) => (s % 2 ? "TEK" : "CIFT");
console.log(ciftMi(62));

const usAl = (x, y) => x ** y;

console.log(usAl(2, 7));

//ORNEK : Menü

const menu = () => {
  console.log("===================================");
  console.log("         JAVASCRIPT DERSI          ");
  console.log("===================================");
};

menu();

//Ornek

// const bilgiVer = (ad, soyad, dogumT) => {
//   const bilgi = `Adım ${ad}, Soyadım ${soyad}, yaşım ${2021 - dogumT}`;
//   return bilgi;
// };

const bilgiVer = (ad, soyad, dogumT) =>
  `Adım ${ad}, Soyadım ${soyad}, yaşım ${2021 - dogumT}`;

console.log(bilgiVer("Yunus Emre", "Kaya", 1992));

const hacimHesapla = (r, h) => Math.PI * r * r * h;

//En yakın sayıya yuvarlardık
console.log("Silindirin hacmi : " + Math.round(hacimHesapla(2, 5)));

//* Virgülden sonraki 2 basamağı aldık
console.log("Silindirin hacmi : " + hacimHesapla(2, 5).toFixed(2));
