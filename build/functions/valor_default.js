"use strict";
// Como deixar um valor default ou opcional.
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@.com", "1234555", "Luiz", 25);
