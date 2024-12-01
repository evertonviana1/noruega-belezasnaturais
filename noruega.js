
const modal1 = document.querySelector('.modal1')
const modal2 = document.querySelector('.modal2')
const mask = document.querySelector('.mask')
const mask2 = document.querySelector('.mask2')
const modal3 = document.querySelector('.modal3')
const mask3 = document.querySelector('.mask3')
const modal4 = document.querySelector('.modal4')
const mask4 = document.querySelector('.mask4')
const modalgaleria = document.querySelector('.modalgaleria')
const maskgaleria = document.querySelector('.maskgaleria')
const modalreceita = document.querySelector('.modalreceita')
const maskreceita = document.querySelector('.maskreceita')


function mostrarModal1 () {
    modal1.style.left = '50%'
    mask.style.visibility = 'visible' 
}

function mostrarModal2 () {
    modal2.style.left = '50%'
    mask2.style.visibility = 'visible' 
}

function mostrarModal3 () {
    modal3.style.left = '50%'
    mask3.style.visibility = 'visible' 
}

function mostrarModal4 () {
    modal4.style.left = '50%'
    mask4.style.visibility = 'visible' 
}

function mostrarGaleria (){
    modalgaleria.style.left = '50%'
    maskgaleria.style.visibility = 'visible'
}

function mostrarReceitas (){
    modalreceita.style.left = '50%'
    maskreceita.style.visibility = 'visible'
}

function esconderModal (){
    modal1.style.left = '-30%'
    mask.style.visibility = 'hidden'
}

function esconderModal2 (){
    modal2.style.left = '-30%'
    mask2.style.visibility = 'hidden'
}

function esconderModal3 (){
    modal3.style.left = '-30%'
    mask3.style.visibility = 'hidden'
}

function esconderModal4 (){
    modal4.style.left = '-30%'
    mask4.style.visibility = 'hidden'
}

function esconderGaleria (){
    modalgaleria.style.left = '-40%'
    maskgaleria.style.visibility = 'hidden'
}

function esconderReceitas (){
    modalreceita.style.left = '-40%'
    maskreceita.style.visibility = 'hidden'
}