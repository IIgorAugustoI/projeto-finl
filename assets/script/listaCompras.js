const botaoAdicionar = document.querySelector('.botao-adicionar');
const botaoDeletar = document.querySelector('.botao-adicionar');

botaoAdicionar.addEventListener('click', () => {

    const formulario = document.querySelector('.formulario-compras');

    var produto = formulario.item.value;
    var quantidade = formulario.qtd.value;
    var valor = formulario.valor.value;

    console.log(produto,quantidade,valor)
})