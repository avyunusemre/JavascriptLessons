const maaslar = [4000, 5000, 3500, 4200, 2850];
const ekleBtn = document.querySelector(".ekle");
const silBtn = document.querySelector(".sil");
const araBtn = document.querySelector(".ara");

const liste = document.createElement("ul");
liste.style.className = "liste";
document.querySelector(".liste-div").appendChild(liste);

const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};

const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};

const aciklamaGuncelle = function (dizi) {
  const aciklama = document.querySelector(".aciklama");
  const yeniMaaslar = dizi.join(" ");
  aciklama.innerHTML = `Maaşlar : ${yeniMaaslar}<br>
  Toplam maas : ${dizi.reduce((x, y) => x + y, 0)}`;
};

diziyiListeyeEkle();
aciklamaGuncelle(maaslar);

ekleBtn.addEventListener("click", () => {
  const satir = document.querySelector(".input-liste");
  if (satir.value) {
    maaslar.push(Number(satir.value));
    listeyeEkle(satir.value);
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
});

silBtn.onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek öğe kalmadı!");
  } else {
    maaslar.pop();
    liste.removeChild(liste.lastElementChild);
  }

  aciklamaGuncelle(maaslar);
};

araBtn.onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (satir.value) {
    const filtrele = maaslar.filter((m) => m <= satir.value);
    if (filtrele.length == 0) {
      alert("Aradığınız kriterlerde maas bulunamadı!");
    } else {
      aciklamaGuncelle(filtrele);
    }
  }
  satir.value = "";
};

document.querySelector(".input-liste").onkeydown = function (e) {
  if (e.keyCode === 13) {
    ekleBtn.click();
  }
  if (e.keyCode === 46) {
    silBtn.onclick();
  }
};
