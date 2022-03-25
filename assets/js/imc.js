const botaoFormulario = document.querySelector('.botao-formulario');

botaoFormulario.addEventListener('click', (event) => {
    event.preventDefault();
    
    const formulario = document.querySelector('.formulario-imc');
    
    var pessoa = adicionaPessoa(formulario);

    var erros = validarPessoa(formulario);
    console.log(erros);
    if(erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    var pessoaTr = montaTr(pessoa);

    var tabela = document.querySelector('.tabela-pacientes');

    tabela.appendChild(pessoaTr);

    formulario.reset();

    var mensagemErro = document.querySelector('.mensagem-erro');
    mensagemErro.innerHTML = '';
});

function exibeMensagemErro(erros){
    var ul = document.querySelector('.mensagem-erro');
    ul.innerHTML = '';

    erros.forEach((erro) => {
        var li = document.createElement('li');
        li.textContent = erro;

        ul.appendChild(li);
    });
}

function validarPessoa(formulario){
    
    var erros = [];
    
    if (formulario.nome.value == 0)
        erros.push('Nome não pode ser em branco');
    if (formulario.peso.value == 0)
        erros.push('Peso não pode ser em branco');
    if(formulario.altura.value == 0)
        erros.push('Altura não pode ser em branco');
    if(formulario.gordura.value == 0)
        erros.push('Gordura não pode ser em branco');

    return erros;
}

function calculaImc(peso, altura){

    var imc = (peso / (altura * altura)).toFixed(2);

    return imc;
}


function adicionaPessoa(formulario){

    var pessoa = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value),
    }
    return pessoa;
}

function montaTr(pessoa) {
    var pessoaTr = document.createElement('tr');

    pessoaTr.appendChild(montaTd(pessoa.nome));
    pessoaTr.appendChild(montaTd(pessoa.peso));
    pessoaTr.appendChild(montaTd(pessoa.altura));
    pessoaTr.appendChild(montaTd(pessoa.gordura));
    pessoaTr.appendChild(montaTd(pessoa.imc));

    return pessoaTr;
}

function montaTd(dado) {
    var td = document.createElement('td');
    td.textContent = dado;

    return td;
}