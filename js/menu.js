const abrir = document.querySelector('.open')
const menu = document.querySelector('.menu-navegacion')

console.log(abrir)
console.log(menu)

abrir.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != abrir ){
        menu.classList.toggle("spread")
    }
})