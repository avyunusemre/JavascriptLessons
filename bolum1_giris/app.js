// alert("Dikkat!");
// console.log("Hello javascript");
// console.log("Javascript javadan kolay bir dildir");
// console.error("Bu bir hatadır!");
// console.warn("Bu bir uyarıdır.");

//! Değişken Tanımlama

var pi = 3.14;
console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

isim = "Ahmet"; //*var diye tanımlamak zorunlu değildir. */
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

//?const ve let yeni değişken tanımlama keyword'leridir.
//? const tanımlanır tanımlanmaz başlatılmalıdır.
//? const final'dır. Değeri sonradan değiştirilemez.
//!non-primitive'ler haric

// const piSayisi = 3.14;
// console.log(piSayisi);

// piSayisi = 3;
// console.log(piSayisi); //!hata verir

//**----------LET-------------- */

//? Değişkenimizin değeri ilerde değişecekse const kullanamayız.
//? Bunun yerine LET kullanabiliriz.

//! LET, block scope bir değişkendir. VAR ise global scope bir
//! tanımlamadır.

//? Block-scope, sadece tanımlı olduğu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; //* çift tırnak
let isim2 = "Ahmet"; //* tek tırnak
let isim3 = `Alican`; //* Backthick

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakız = 2;
const kola = 5;
let toplamFiyat = sucuk + sakız + kola;

toplamFiyat++;
toplamFiyat += 50;

//? Birden fazla değişkenin değerini yazdırmak icin virgül kullanılır.
console.log(toplamFiyat, kola); //98 5
console.log("TOPLAM FİYAT : ", toplamFiyat); //*TOPLAM FİYAT :  98

//? + operatörü string birleştirme işlemi de gerceklestirir.
const ad = "Can";
const soyad = "Canan";
console.log(ad + " " + soyad);

const s1 = 7,
  s2 = "7";
console.log(s1 + s2);

const name = "Mesut";
const year = 55;
console.log(`Benim adım ${name}, yaşım ${year}`);

const yıl = 2021;
const dogumTarihi = 1992;
const yas = yıl - dogumTarihi;
console.log("YAŞ : " + yas);
console.log("YAŞ : " + yıl - dogumTarihi); //! NaN :not a number
//*parantez kullanılmalı

console.log(`YAŞ : ${yıl - dogumTarihi}`); //*Template literal

const taban = 2;
const us = 8;

const sonuc = taban ** us; //* us alma operatoru
console.log("sonuc : " + sonuc);

//? Mod alma
const sayı = 123;

const birler = sayı % 10;
console.log("Birler : " + birler);

const onlar = Math.floor(sayı / 10) % 10;
console.log("Onlar : " + onlar);

const yuzler = Math.floor(sayı / 100);
console.log("Yüzler : " + yuzler);

//? Karşılaştırma operatörleri

//! üçlü karşılaştırma operatörü kullanıldığında hem veri türü
//! hem de icerik kontrolü yapılır.

const sayı1 = 100;
const sayı2 = "100";

console.log(typeof sayı1, typeof sayı2);

console.log(sayı1 == sayı2); //* değerler eşit => true
console.log(sayı === sayı2); //* veri tipleri farklı => fals

console.log(sayı1 != sayı2); //* false
console.log(sayı1 !== sayı2); //* true

let b1 = true;
let b2 = null;
console.log(b1 && b2); //* null

const x = true;
const y = true;
const z = undefined;

console.log(x && y && z); //* undefined

//?=========== TERNARY ==========

//const age = +prompt("Yaşınızı giriniz : ");
const name2 = prompt("Adınızı giriniz : ");
const age = Number(prompt("Yaşınızı giriniz : "));
console.log("Yaşınız : " + age);
console.log(typeof age);

age >= 18
  ? console.log(`${name2} ehliyet alabilir.`)
  : console.log(`${name2} ehliyet alamaz.`);

const result =
  age >= 18 ? `${name2} ehliyet alabilir` : `${name2} ehliyet alamaz`;

console.log(result);

const sayi4 = 41;

console.log(String(sayi4), sayi4);
