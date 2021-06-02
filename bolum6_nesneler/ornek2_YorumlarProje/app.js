"use strict";
import yorumlar from "./data.js";

// Bilgilere erişelim
const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const aciklama = document.getElementById("aciklama");
const unvan = document.getElementById("meslek");

//Butonlara erişelim
const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rasgeleBtn = document.querySelector(".rasgele-btn");

let index = 0;

function kisiyiGoster(index) {
  const kisi = yorumlar[index];
  const { ad, resim, meslek, yorum } = kisi;
  foto.src = resim;
  yazar.textContent = ad;
  unvan.textContent = meslek;
  aciklama.textContent = yorum;

  //klasik yontem
  /*
  foto.src = kisi.resim;
  yazar.textContent = kisi.ad;
  unvan.textContent = kisi.meslek;
  aciklama.textContent = kisi.yorum;

  */
}

kisiyiGoster(index);

ileriBtn.addEventListener("click", () => {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }

  kisiyiGoster(index);
});

geriBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }

  kisiyiGoster(index);
});

rasgeleBtn.addEventListener("click", () => {
  index = Math.floor(Math.random() * yorumlar.length);
  kisiyiGoster(index);
});
