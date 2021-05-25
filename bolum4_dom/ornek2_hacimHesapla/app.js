function hesapla() {
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");

  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".hacim").textContent = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "white";
buton.style.backgroundColor = "blue";
