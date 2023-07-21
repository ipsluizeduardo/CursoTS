//Tipo desconhecido //quando nao se sabe o tipo que ira receber 

let total: unknown




let idPedido: any = 123;
let totalPedido: unknown = 15;
let entregador: number = idPedido;

//valor unknonw só podem ser atribuifos ao tipo unknown ou any
// let totalEntrega: number = totalPedido;

let totalEntrega: unknown = totalPedido;

console.log(totalEntrega)