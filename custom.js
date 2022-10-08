const nav = document.querySelector(".gnb_container");
const gnb = document.querySelectorAll(".gnb > li");
const lnb = document.querySelector(".lnb");

// gnb_hover
nav.addEventListener("mouseover", () => {
  gnb.forEach(menu => menu.addEventListener("mouseout", () => {
    menu.style.color = '#303030';
  }))
  gnb.forEach(menu => menu.addEventListener("mouseover", () => {
    menu.style.color = '#f0616e';
  }))
})

// lnb_slide
nav.addEventListener("mouseover", () => {
  lnb.style.maxHeight = lnb.scrollHeight+"px";
})
nav.addEventListener("mouseout", () => {
  lnb.style.maxHeight = "0px";
})
