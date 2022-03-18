const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
});

function limparCampos(){
    let inputs = document.getElementsByTagName("input");
    for(const i in inputs){
        const limpar = inputs[i];
        limpar.value = "";
    }
    document.getElementById("nome").focus();
}