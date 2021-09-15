const searchBar = document.querySelector('#search');
const searchWall = document.querySelector('.searchWall');
const searchIcon = document.querySelector('#searchIcon');
const backspaceIcon = document.querySelector('#backspaceIcon');
const searchButtonMediaQ = document.querySelector('.searchButtonMediaQ');
const burgerMenu = document.querySelector('.burgerMenu');
const nav = document.querySelector('#nav');

const main = document.querySelector('main');




searchBar.addEventListener('click', () => {
     searchWall.classList.toggle("active");
     searchIcon.classList.toggle("active");
     backspaceIcon.classList.toggle("active");
});

main.addEventListener('click', () => {
     searchWall.classList.remove("active");
     searchIcon.classList.remove('active');
     backspaceIcon.classList.remove("active");
     nav.classList.remove("active");

});


searchButtonMediaQ.addEventListener('click',()=>{
     searchWall.classList.toggle("active");
})

searchButtonMediaQ.addEventListener('mouseover', ()=>{
     searchIcon.classList.add("active");
})

searchButtonMediaQ.addEventListener('mouseout', ()=>{
     searchIcon.classList.remove("active");
})

burgerMenu.addEventListener('click',()=>{
     nav.classList.toggle("active");
     searchWall.classList.remove("active");


})

// hiding nav bar on scrolling
//base code by w3schools modified by me to suit my needs
let prevScrollpos = window.pageYOffset;
window.onscroll =()=> {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
} 




