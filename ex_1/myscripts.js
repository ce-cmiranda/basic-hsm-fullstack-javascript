const preco = {"1": 3.16, "2": 4.19};

let combustivelValido = false
let tipoCombustivel;

while (!combustivelValido){
    tipoCombustivel = prompt("Qual o tipo de combustível você gostaria?");
    if (tipoCombustivel =="1" || tipoCombustivel =="2"){
        combustivelValido = true
    }
    else{
        alert("Código inválido. As opções são 1 ou 2")
    }
}

let qtd_litros = prompt("Quantos litros do combustível "+tipoCombustivel+" você gostaria de adicionar?");

let valor_pago = preco[tipoCombustivel]*qtd_litros

alert("O valor a ser pago é R$"+valor_pago.toFixed(2))





