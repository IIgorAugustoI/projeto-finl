const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
});

var tabela = document.querySelector('.tabela-pacientes');

tabela.addEventListener('dblclick', (event) => {

    event.target.parentNode.classList.add('desaparecer');
    setTimeout( () => {
        event.target.parentNode.remove();
    },500);
});