const botaoFormulario = document.querySelector('.botao-formulario');

botaoFormulario.addEventListener('click', function (event) {
    event.preventDefault();
    
    const formulario = document.querySelector('.formulario-imc');

    var pessoa = adicionaPessoa(formulario);

    var pessoaTr = montaTr(pessoa);

    var tabela = document.querySelector('.tabela-pacientes');

    tabela.appendChild(pessoaTr);

    formulario.reset();
})

function calculaImc(peso, altura){

    var imc = (peso / (altura * altura)).toFixed(2);

    return imc;
}

function resultadoImc(imc){

    var resultado = '';

    if (imc < 18.5){
        resultado = 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9){
        resultado = 'Normal';
    } else if (imc >= 25 && imc <= 29.9){
        resultado = 'Sobrepeso';
    } else if (imc <= 30 && imc <= 39.9){
        resultado = 'Obesidade';
    } else if (imc > 40){
        resultado = 'Obesidade Grave';
    } else{
        resultado = 'Pesou ou altura inválido';
    }
    
    return resultado;
}

function adicionaPessoa(formulario){
    var pessoa = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value),
        resultado: resultadoImc()
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
    pessoaTr.appendChild(montaTd(pessoa.resultado));

    return pessoaTr;
}

function montaTd(dado) {
    var td = document.createElement('td');
    td.textContent = dado;

    return td;
}