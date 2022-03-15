const botaoFormulario = document.querySelector('.botao-formulario');

botaoFormulario.addEventListener('click', function (event) {
    event.preventDefault();
    
    const formulario = document.querySelector('.formulario-imc');
    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;

    var imc = (peso / (altura * altura)).toFixed(2);
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

    pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');
    var resultadoTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;
    resultadoTd.textContent = resultado;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(resultadoTd);

    var tabela = document.querySelector('.tabela-pacientes');
    tabela.appendChild(pacienteTr);
})

