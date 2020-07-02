function calculaSalario(){
    let salario = parseFloat(document.getElementById("salario-atual").value).toFixed(2);
    let plano = document.getElementById("plano").value;
    let novo_salario

    switch (plano) {
        case "planoA":
            novo_salario = salario *1.1
            break;
        case "planoB":
            novo_salario = salario *1.15
            break;
        case "planoC":
                novo_salario = salario *1.2
                break;
    }
    document.getElementById("output").innerHTML = "O novo salário será R$"+novo_salario.toFixed(2);
}


