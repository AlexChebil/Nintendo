const carousselButton1 = document.getElementById('button1')
const carousselButton2 = document.getElementById('button2')
const caroussel = document.querySelector('.cont');



carousselButton2.addEventListener('click',()=>{
     caroussel.classList.add("active")
});
carousselButton1.addEventListener('click',()=>{
     caroussel.classList.remove("active")
});
