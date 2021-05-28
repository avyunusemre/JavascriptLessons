const dogum = 1990;

const yaslar = [30, 25, 44, 77];

const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayse",
  20,
  40,
  true,
  23.4,
  2021 - dogum,
  yaslar,
];
console.log(isimler);

console.log(isimler[0]);
console.log((isimler[3] = "canan"));

isimler[isimler.length - 2] = false;

console.log(isimler[10]);
console.log(isimler[10][2]);

isimler[11] = "ipek";

console.log(isimler);

// =================DİZİYİ DEĞİŞTİREN METOTLAR =================

const h1 = document.querySelector("#meyveler");
deneme = "Kiraz";
let meyveler = ["Elma", "Armut", "Ananas", "Muz", "Kivi", false, deneme];
console.log(meyveler);

//En sondaki array elemanını siler. Sildiği elemanı döndürür.
meyveler.pop();

//Sona bir eleman ekler, dizinin son eleman sayısını döndürür
meyveler.push("Çilek");

//Bastaki elemanı siler ve onu döndürür
meyveler.shift();

//En basa eleman ekler ve dizinin yeni eleman sayısını döndürür
meyveler.unshift("Ayva");

meyveler.reverse();

//Natural order
meyveler.sort();

//her index'e istediğiniz eleman yerleştirilir.
//önceki elemanı silip silmemek de 2. parametreye verilen değerle belirlenir.
meyveler.splice(1, 0, "Ceviz");

meyveler.splice(6, 1, "Mango");

h1.innerHTML = meyveler;
console.log(meyveler);

//=============== DİZİ ERİŞİM METOTLARI ====================
const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];

console.log(sayilar.includes("5")); //false

console.log(sayilar.includes(5)); //true

//dizinin elemanlarını birleştirip String hale cevirir.
const sayilar2 = sayilar.join("-");
console.log(sayilar2);

const sayilar3 = sayilar.toString();
console.log(sayilar3);

//ilk eslesen indexi dondurur. sayı bulunamazsa -1 döndürür
console.log("2'nin indexi : " + sayilar.indexOf(2));

//son eslesen index'i dondurur
console.log("2'nin son indexi : " + sayilar.lastIndexOf(2));

const arabalar = ["Bmw", "Mercedes", "Audi", "Ferrari", "Anadol"];

const arabalar1 = arabalar.slice(2);
arabalar1.push("Fiat");
console.log(arabalar1);

const arabalar2 = arabalar.slice(1, 3); //!start dahil, end dahil değil
console.log(arabalar2);

//=========================CONCAT================================
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamlar);
console.log(birlesik);

console.log(typeof birlesik[7]);
