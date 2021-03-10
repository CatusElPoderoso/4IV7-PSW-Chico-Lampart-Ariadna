const imagenes = document.querySelectorAll('.img-hobbies')
const imgLight = document.querySelector('.agregar-img')
const conLight = document.querySelector('.img-light')

const abrir1 = document.querySelector('.open')

//console.log(imagenes)
//console.log(imgLight)
//console.log(conLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        apaImagen(imagen.getAttribute('src'))
    })
})

conLight.addEventListener('click', (e)=>{
    if(e.target != imgLight){
        conLight.classList.toggle('show')
        imgLight.classList.toggle('showImage')
        abrir1.style.opacity = '1'
    }
})

const apaImagen = (imagen)=>{
    imgLight.src = imagen
    conLight.classList.toggle('show')
    imgLight.classList.toggle('showImage')
    abrir1.style.opacity = '0'
}