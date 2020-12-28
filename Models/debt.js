class Debt{
    constructor({ finalidade, valor, pago, valorPago  }){
        this.description = finalidade;
        this.amount = valor;
        this.isPaidOut = pago === "Sim";
        this.amountPaid = valorPago;
    }
}


module.exports =  Debt