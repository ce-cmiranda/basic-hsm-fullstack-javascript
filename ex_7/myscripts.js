class Aluno{
    constructor(cpf, data_nascimento, sexo, nome_mae, nome_pai = null, email = null, telefone = null){
        this.cpf = cpf;
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

aluno1 = new Aluno("099.099.099-99", "10/10/2000", "Masculino","Maria")
aluno2 = new Aluno("088.088.088-88", "11/11/2010", "Feminino","Daiane", "Joao")

turma1 = new Turma("1", "Turma 1", "Esta é uma turma de teste", "Matutino", [aluno1])

console.log(turma1.alunos_matriculados)