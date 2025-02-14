const giftCap = document.querySelector(".gift-cap");
const btn = document.querySelector(".btn");
const teddy = document.querySelector(".teddy");
const bracelet = document.querySelector(".bracelet");
const jhumka = document.querySelector(".jhumka");
const chololates = document.querySelector(".chololates");
const pandaLight = document.querySelector(".pandaLight");
const nextBtn = document.querySelector(".next-btn");
const textBox = document.querySelector(".text-box");
const gifts = document.querySelector(".gift-img");
const jhumkaText = document.querySelector(".jhumka-text");
const jhumkaImg = document.querySelector(".jhumka-img");
const braceletText = document.querySelector(".bracelet-text");
const braceletImg = document.querySelector(".bracelet-img");
const teddyText = document.querySelector(".teddy-text");
const teddyImg = document.querySelector(".teddy-img");
const pandaText = document.querySelector(".panda-text");
const pandaImg = document.querySelector(".panda-img");
const chololatesText = document.querySelector(".chololates-text");
const chololatesImg = document.querySelector(".chololates-img");

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
    giftCap.style.zIndex = "1";
  }, 2000);
  setTimeout(() => {
    nextBtn.style.display = "block";
  }, 7000);
  setTimeout(() => {
    nextBtn.classList.toggle("appear");
  }, 7000);
});

// gifts.addEventListener("mouseover", () => {
//   textBox.classList.toggle("text-ani");
// });

teddyImg.addEventListener("mouseover", () => {
  teddyText.classList.add("text-ani");
});
teddyImg.addEventListener("mouseout", () => {
  teddyText.classList.remove("text-ani");
});

braceletImg.addEventListener("mouseover", () => {
  braceletText.classList.add("text-ani");
});
braceletImg.addEventListener("mouseout", () => {
  braceletText.classList.remove("text-ani");
});

jhumkaImg.addEventListener("mouseover", () => {
  jhumkaText.classList.add("text-ani");
});
jhumkaImg.addEventListener("mouseout", () => {
  jhumkaText.classList.remove("text-ani");
});

pandaImg.addEventListener("mouseover", () => {
  pandaText.classList.add("text-ani");
});
pandaImg.addEventListener("mouseout", () => {
  pandaText.classList.remove("text-ani");
});

chololatesImg.addEventListener("mouseover", () => {
  chololatesText.classList.add("text-ani");
});
chololatesImg.addEventListener("mouseout", () => {
  chololatesText.classList.remove("text-ani");
});
