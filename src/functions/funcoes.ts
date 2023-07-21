

// function login(userName: string): boolean | string{
//    let message = 'Bem-vindo' + userName
   
//     console.log(message);

//     return userName
// }
// const usernmeLogin = login("Luiz");

// console.log(usernmeLogin)

let n1: number = 10;
let n2: number = 25;

function soma(valor1: number, valor2: number): string {
    let soma = valor1 + valor2;

    if(soma > 40) {
        return "SOMA MAIOR QUE 20"
    }else {
        return "MENOR QUE 20"
    }
}

console.log(soma(n1,n2))