searchBar = document.querySelector('#search');
searchWall = document.querySelector('.searchWall');
main = document.querySelector('main');



searchBar.addEventListener('click', () => {
     searchWall.classList.toggle("active")
});

main.addEventListener('click', () => {
     searchWall.classList.remove("active")
});
