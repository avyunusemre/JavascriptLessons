const btnOn = document.querySelector(".on");
const btnOff = document.querySelector(".off");
const img = document.querySelector(".img");

btnOn.addEventListener("click", () => {
  img.src = "./img/lamba_on.gif";
});

btnOff.addEventListener("click", () => {
  img.src = "./img/lamba_off.gif";
});
