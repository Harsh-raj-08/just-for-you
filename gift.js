const giftCap = document.querySelector(".gift-cap");
const btn = document.querySelector(".btn");
const teddy = document.querySelector(".teddy");
const bracelet = document.querySelector(".bracelet");
const jhumka = document.querySelector(".jhumka");
const chololates = document.querySelector(".chololates");
const pandaLight = document.querySelector(".pandaLight");

btn.addEventListener("click", () => {
  giftCap.classList.toggle("open-box");
  btn.classList.toggle("hide");
  teddy.classList.toggle("teddy-animation");
  bracelet.classList.toggle("bracelet-animation");
  jhumka.classList.toggle("jhumka-animation");
  chololates.classList.toggle("chololates-animation");
  pandaLight.classList.toggle("pandaLight-animation");
});
