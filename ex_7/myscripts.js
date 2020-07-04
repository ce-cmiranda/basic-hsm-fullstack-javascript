class Aluno{
    constructor(cpf,nome, data_nascimento, sexo, nome_mae, nome_pai = null, email = null, telefone = null){
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.sexo = sexo;
        this.nome_mae = nome_mae;
        this.nome_pai = nome_pai;
        this.email = email;
        this.telefone = telefone
    }
   
}

class Turma{
    constructor(codigo, nome, descricao, turno, alunos_matriculados = []){
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.turno = turno;
        this.alunos_matriculados = alunos_matriculados
    }

    matricular_aluno(Aluno) {
        this.alunos_matriculados.push(Aluno);
    }
}

aluno1 = new Aluno("099.099.099-99","Carlos", "10/10/2000", "Masculino","Maria")
aluno2 = new Aluno("088.088.088-88", "Eduarda", "11/11/2010", "Feminino","Daiane", "Joao")

turma1 = new Turma("1", "Turma 1", "Esta é uma turma de teste", "Matutino", [aluno1])

console.log(turma1.alunos_matriculados)

turma1.matricular_aluno(aluno2)

let lista_matriculados = "";

for (i in turma1.alunos_matriculados){
    lista_matriculados = lista_matriculados + ("<li>CPF: "+turma1.alunos_matriculados[i].cpf+
        " Nome:" +turma1.alunos_matriculados[i].nome+"</li>")
}

document.write("<div>Alunos matriculados na "+turma1.nome+":<ul>"+lista_matriculados+"</ul></div>")