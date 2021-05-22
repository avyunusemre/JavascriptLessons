// const s1 = +prompt("Birinci sayı : ");
// const islem = prompt("İşlemi giiniz : ");
// const s2 = Number(prompt("İkinci sayı : "));

// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s2 / s2;
// } else {
//   alert("Yanlış bir işlem yaptınız!");
// }

// 30

// const age = prompt("Yaşınızı giriniz : ");
// const healt = prompt("Sağlıklı mısınız e/h");

// const result =
//   healt == "e" && age > 18 ? "Askere gidilebilir" : "Askere gidilmemeli!";

// console.log(result);

// const gunNo = +prompt("Gun numarasını giriniz.");

// switch (gunNo) {
//   case 1:
//     gun = "Pazartesi";
//     break;
//   case 2:
//     gun = "Salı";
//     break;
//   case 3:
//     gun = "Çarşamba";
//     break;
//   case 4:
//     gun = "Perşembe";
//     break;
//   case 5:
//     gun = "Cuma";
//     break;
//   case 6:
//     gun = "Cumartesi";
//     break;
//   case 7:
//     gun = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır!");
//     break;
// }

// console.log(`Bugün günlerden ${gun}`);

const hız = 70;
const mesaj = hız >= 120 ? "Hızlı" : hız >= 90 ? "Normal" : "Yavaş";
console.log(mesaj);

// const maas = +prompt("Maaşınızı giriniz : ");
// const calismaYili = +prompt("Çalışma yılınızı giriniz : ");

// const zamlıMaas =
//   calismaYili > 10 ? maas * 1.5 : calismaYili > 5 ? maas * 1.2 : maas * 1.1;

// console.log(zamlıMaas);

//!======== DÖNGÜLER ==========

for (let i = 0; i < 10; i++) {
  console.log(`${i}-Mehmet`);
}

//? Asal sayı tespiti

const number = 7; //+prompt("Kontrol edeceğiniz sayıyı giriniz : ");

let asal = false;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }

  asal = true;
}

const karar = asal
  ? `${number} asal bir sayıdır.`
  : `${number} asal bir sayı değildir!`;

console.log(karar);
