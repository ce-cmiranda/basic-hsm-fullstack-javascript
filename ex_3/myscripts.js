let qtd_tentativas = 10;
let respostas = []


let i = 1;
while (i <= qtd_tentativas){
    let participacao = prompt("Deseja participar da pesquisa? (S para participar)");
    if (participacao.toLowerCase() == "s"){
        let qtd_utilizacao = prompt("Quantas vezes você utilizou o Restaurante Universitário neste mês?");
        respostas.push(parseInt(qtd_utilizacao))
        alert("Obrigado por participar :)")
    }
    i++
}

document.write("<p>A quantidade de alunos entrevistados foi de: "+respostas.length)

let menor_10 = 0, entre_10_15 = 0, maior_15 = 0; 

console.log(respostas)
for (k in respostas){

    if (respostas[k] < 10){
        menor_10++;
    }else if(respostas[k]<=15){
        entre_10_15++;
    }
    else{
        maior_15++;
    }
}

document.write("<p>O percentual de alunos que comeram menos de 10 vezes foi: "+
    ((menor_10/respostas.length)*100).toFixed(2)+"%</p>")

    document.write("<p>O percentual de alunos que comeram entre 10 e 15 vezes foi: "+
    ((entre_10_15/respostas.length)*100).toFixed(2)+"%</p>")

    document.write("<p>O percentual de alunos que comeram menos de 10 vezes foi: "+
    ((maior_15/respostas.length)*100).toFixed(2)+"%</p>")