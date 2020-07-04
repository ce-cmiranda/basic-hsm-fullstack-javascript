let nome, altura, peso;

let alunos = {};

let aluno_maior_imc, maior_imc = 0, aluno_menor_imc, menor_imc = 100, altura_acc = 0, imc, classificacao, obesidade;

let qtd_alunos = prompt("Quantos alunos têm na turma?");

let i = 1;
try {

    while (i <= qtd_alunos) {
        nome = prompt("Qual é seu nome?");

        altura = parseFloat(prompt("Qual é a sua altura em metros?").replace(",", "."));
        peso = parseFloat(prompt("Qual é o seu peso em Kg?").replace(",", "."));


        if (altura == 0) {
            throw "IMC Inifinto"
        }

        imc = peso / (altura ** 2);


        if (imc < 18.5) {
            classificacao = "Magreza";
            obesidade = "Grau 0";
            alert("Tome cuidado com a sua saúde!")
        } else if (imc < 24.9) {
            classificacao = "Normal";
            obesidade = "Grau 0";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
            obesidade = "Grau I";
            alert("Tome cuidado com a sua saúde!")
        } else if (imc < 39.9) {
            classificacao = "Obesidade";
            obesidade = "Grau II";
            alert("Tome cuidado com a sua saúde!")
        } else {
            classificacao = "Obesidade Grave";
            obesidade = "Grau III";
            alert("Tome cuidado com a sua saúde!")
        }

        if (imc > maior_imc) {
            maior_imc = imc;
            aluno_maior_imc = i;
        }
        if (imc < menor_imc) {
            menor_imc = imc;
            aluno_menor_imc = i;
        }

        altura_acc += altura;

        alunos[i] = { "imc": imc, "classificacao": classificacao, "obesidade": obesidade }

        document.write("<p>O imc do aluno " + i + " é de " + imc.toFixed(2) + "</p>")



        i++;


    }

    let altura_media = altura_acc / qtd_alunos;


    document.write("<p>O aluno com o maior imc foi o aluno " + aluno_maior_imc + " com um imc de :" + maior_imc.toFixed(2) + "</p>")
    document.write("<p>O aluno com o menor imc foi o aluno " + aluno_menor_imc + " com um imc de :" + menor_imc.toFixed(2) + "</p>")

    document.write("<p>A altura média dos estudantes é de " + altura_media.toFixed(2) + "</p>")

}
catch (err) {
    alert("A altura não pode ser igual a 0")
}