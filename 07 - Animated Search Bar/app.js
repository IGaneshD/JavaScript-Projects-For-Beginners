const Btn = document.querySelector('.search-icon')
const searchBar = document.querySelector('.search-bar')

Btn.addEventListener("click", ()=>{
    searchBar.classList.toggle('inactive')
})