const searchBar = document.querySelector('#search');
const searchWall = document.querySelector('.searchWall');
const searchIcon = document.querySelector('#searchIcon');
const backspaceIcon = document.querySelector('#backspaceIcon');
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

});
