// Como deixar um valor default ou opcional.

 function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void {
    let data = { email, senha, nome,idade};

    console.log(data);
 }

 cadastro("teste@.com", "1234555", "Luiz", 25);