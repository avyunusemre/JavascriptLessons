// ====================================================
//                GETELEMENTBYID()
// ====================================================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const button = document.getElementById("btn");
button.style.width = "100px";
button.style.height = "30px";
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.fontSize = "18px";
button.innerHTML = "ARA";

// ====================================================
//                GETELEMENTBYTAGNAME()
// ====================================================

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";

// ====================================================
//                GETELEMENTBYCLASSNAME()
// ====================================================

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// ====================================================
//                QUERYSELECTOR()
// ====================================================

const title = document.querySelector(".title");
title.innerHTML = "DOM Selector😴";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(purple, green)";

// ====================================================
//                     EVENTS
// ====================================================

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "transparent";
};

//addEventListener()

document.querySelector("#btn").addEventListener("mouseover", () => {
  const button = document.querySelector("#btn");
  button.style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  const button = document.querySelector("#btn");
  button.style.width = "100px";
});
