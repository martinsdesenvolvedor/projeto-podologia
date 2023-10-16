const menuHamburguerImg = document.querySelector('.menu-hamburguer-img')
const botaoFechar = document.querySelector('#botao-fechar')
const mobile = document.querySelector('#mobile')


menuHamburguerImg.addEventListener('click', function() {
        mobile.style.right = '0'
       
})

botaoFechar.addEventListener('click', function() {
        mobile.style.right = '-360px'
        
})