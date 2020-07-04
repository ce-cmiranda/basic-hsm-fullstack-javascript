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

