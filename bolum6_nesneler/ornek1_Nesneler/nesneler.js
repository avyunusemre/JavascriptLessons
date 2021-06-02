// ======================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

// Object literal
const insan = {
  ad: "Can",
  soyad: "Yılmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};

//.dot notasyonu ile verilere erişilebilir.
console.log(insan);
console.log(insan.ad);

//Köşeli parantez erişimi (köşeli parantez içerisine bir expression yazmak mümkündür.)
console.log(insan["yas"]);

const yazi = `Adım ${insan.ad} ve yaşım ${insan["yas"]}`;
console.log(yazi);

insan.konum = "Türkiye";
insan.email = "insan@gmail.com";

insan["dogumTarihi"] = 1994;

console.log(insan);

// ======================================================
//                  Nesne Metotları
// ======================================================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    //! arrow function'lar klasik objeler değillerdir. Arrow function yazarsanız this, new gibi klasik obje keywork'leri ile kullanılamaz.
    console.log(this);
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `Ad : ${this.ad} ${
      this.soyad
    }, Yas : ${this.yasHesapla()}, Meslek : ${this.meslek}`;
  },
};

const tarih = new Date();
console.log(tarih);
console.log(tarih.getFullYear());
console.log(tarih.getMonth());

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// ======================================================
//                  Nesne Iterasyon Ornekleri
// ======================================================
const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },

  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];

console.log(kisiler);

//ÖRNEK : kisiler dizisindeki kisilerin mesleklerini konsola yazdıralım

kisiler.forEach((x) => console.log(x.meslek));

//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni bir diziye saklayiniz.

const artiYas = kisiler.map((x) => (x.yas += 1));
console.log(artiYas);

// ÖRNEK3: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.

const buyukHarf = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
    soyad: x.soyad,
  };
});

console.log(buyukHarf);

// ÖRNEK4: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.

kisiler.filter((x) => x.yas <= 25).forEach((a) => console.log(a.ad));

// ÖRNEK5: Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.

const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });

console.log(developer);

//ÖRNEK6: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(ortalamaYas);
