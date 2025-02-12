const giftCap = document.querySelector(".gift-cap");
const btn = document.querySelector(".btn");
const teddy = document.querySelector(".teddy");
const bracelet = document.querySelector(".bracelet");
const jhumka = document.querySelector(".jhumka");
const chololates = document.querySelector(".chololates");
const pandaLight = document.querySelector(".pandaLight");
const nextBtn = document.querySelector(".next-btn");

btn.addEventListener("click", () => {
  giftCap.classList.toggle("open-box");
  btn.classList.toggle("hide");
  teddy.classList.toggle("teddy-animation");
  bracelet.classList.toggle("bracelet-animation");
  jhumka.classList.toggle("jhumka-animation");
  chololates.classList.toggle("chololates-animation");
  pandaLight.classList.toggle("pandaLight-animation");
  setTimeout(() => {
    btn.style.display = "none";
  }, 2000);
  setTimeout(() => {
    nextBtn.style.display = "block";
  }, 7000);
  setTimeout(() => {
    nextBtn.classList.toggle("appear");
  }, 7000);
});
