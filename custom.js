// slide_nav
const header = document.querySelector("header");
const gnb = document.querySelector(".gnb");
const lnb = document.querySelector(".lnb");

header.addEventListener("mouseover", () => {
  lnb.style.maxHeight = lnb.scrollHeight+"px";
})
header.addEventListener("mouseout", () => {
  lnb.style.maxHeight = "0px";
})