var menu = document.querySelector('.menu-icon')
var ul = document.querySelector('.ul')

menu.addEventListener('click', ()=>{
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo')
        document.querySelector('.menu-icon img').src ='imgs/menu.png';
    }else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon img').src ='imgs/close.png'
    }
})