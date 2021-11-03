const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome === '' || altura === '' || peso === ''){
        resultado.textContent = "Preencha todos os campos";
    }else{
        const valorIMC = (peso/ (altura * altura)).toFixed(2);

        let classificacao = " ";

        if(valorIMC < 16.9){
            classificacao = "muito abaixo do peso";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está ${classificacao}.`;
        }else if(valorIMC < 18.4){
            classificacao = "abaixo do peso";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está ${classificacao}.`;
        }else if(valorIMC < 24.9){
            classificacao = "peso normal";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está com ${classificacao}.`;
        }else if(valorIMC < 29.9){
            classificacao = "acima do peso";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está ${classificacao}.`;
        }else if(valorIMC < 34.9){
            classificacao = "obesidade grau I";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está com ${classificacao}.`;
        }else if(valorIMC <= 40){
            classificacao = "obesidade grau II";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está com ${classificacao}.`;
        }else{
            classificacao = "obesidade grau III";
            resultado.textContent = `${nome}, seu valor IMC é ${valorIMC} e você está com ${classificacao}.`;
        }
    }

}

calcular.addEventListener("click", imc);
