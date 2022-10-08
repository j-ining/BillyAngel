// gnb_hover
const nav = document.querySelector('.gnb_container');
const gnb = document.querySelector('.gnb_container > .gnb');
const gnb_menu = document.querySelectorAll('.gnb_container > .gnb > li');
const sub_menu = document.querySelectorAll('.gnb_container .sub_menu');
const bg_lnb = document.querySelector('.gnb_container .bg_lnb');

const nav_height = nav.scrollHeight;
const bg_lnb_height = gnb.scrollHeight - nav_height;

gnb_menu.forEach(menu => menu.addEventListener('mouseover', () => {
  menu.style.color = '#f0616e';
  bg_lnb.style.maxHeight = bg_lnb_height + 'px';
  gnb.style.maxHeight = gnb.scrollHeight + 'px';
}))
gnb_menu.forEach(menu => menu.addEventListener('mouseout', () => {
  menu.style.color = '#303030';
}))
nav.addEventListener('mouseout', () => {
  bg_lnb.style.maxHeight = '0';
  gnb.style.maxHeight = nav_height + 'px';
})

// sidebar
const btn_snb = document.querySelector('.snb > i');
const snb = document.querySelector('.snb > aside');
const btn_snb_close = document.querySelector('.snb > aside > .btn_close');

btn_snb.addEventListener('click', () => {
  snb.style.right = '0';
})
btn_snb_close.addEventListener('click', () => {
  snb.style.right = '-' + snb.scrollWidth +'px';
})

// slide_banner
const banner_container = document.querySelector('#slide_banner');
const banner = document.querySelector('#slide_banner > .banner_img');
const banner_imgs = document.querySelectorAll('#slide_banner > .banner_img > li');
const btn_prev = document.querySelector('#slide_banner > .btn_prev');
const btn_next = document.querySelector('#slide_banner > .btn_next');

let banner_current_index = 0;
let banner_timer = setInterval(index_count, 3000);

banner_container.addEventListener('mouseover', () => {
  clearInterval(banner_timer);
})
banner_container.addEventListener('mouseout', () => {
  banner_timer = setInterval(index_count, 3000);
})

btn_prev.addEventListener('click', () => {
  banner_current_index--;
  if (banner_current_index == -1) {
    banner_current_index = banner_imgs.length-1;
  }
  slide_banner(banner_current_index);
})
btn_next.addEventListener('click', () => {
  index_count();
  slide_banner(banner_current_index);
})

function slide_banner (i) {
  let banner_left = -100 * i;
  banner.style.left = banner_left + '%';
}
function index_count () {
  banner_current_index++;
  if (banner_current_index == banner_imgs.length) {
    banner_current_index = 0;
  }
  slide_banner(banner_current_index);
}



