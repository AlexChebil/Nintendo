const carousselButton1 = document.getElementById('button1');
const carousselButton2 = document.getElementById('button2');
const caroussel = document.querySelector('.cont');

const lowcarousselButton1 = document.getElementById('lowCaroussel-button1');
const lowcarousselButton2 = document.getElementById('lowCaroussel-button2');
const lowcaroussel = document.querySelector('.lowCaroussel-flexCont');




carousselButton2.addEventListener('click',()=>{
     caroussel.classList.add("active")
});
carousselButton1.addEventListener('click',()=>{
     caroussel.classList.remove("active")
});

lowcarousselButton1.addEventListener('click',()=>{
     lowcaroussel.classList.add("active")
});

lowcarousselButton2.addEventListener('click',()=>{
     lowcaroussel.classList.remove("active")
});