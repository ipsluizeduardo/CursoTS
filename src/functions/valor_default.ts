// Como deixar um valor default ou opcional.

 function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void {
    let data = { email, senha, nome,idade};

    console.log(data);
 }

 cadastro("teste@.com", "1234555", "Luiz", 25);

 function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log("Status atual da loja", status);

    return status;
 }

 cadastroLoja("Burger K", "BkBk@bk.com", true);