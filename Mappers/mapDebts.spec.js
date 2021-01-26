const { it } = require("mocha");
const {
    deepEqual
} = require('assert')


const file = require("./file.stub")
const mapDebts = require('./mapDebts')
const  { Debt } = require("../Models")

describe('MapDebts spec', () => {

    it('Map debts correctly by rows ', () => {

        const expected = [
            new Debt({
                finalidade: 'Itaucard',
                valor: 857.29,
                pago: 'Sim',
                valorPago: 857.29,
            }),
            new Debt({
                finalidade: 'Pedralli',
                valor: 818.4,
                pago: 'Sim',
                valorPago: 818.4,
            }),
            new Debt({
                finalidade: 'Pensão',
                valor: 300,
                pago: 'Sim',
                valorPago: 300,
            }),
            new Debt({
                finalidade: 'Luz',
                valor: 162.69,
                pago: 'Sim',
                valorPago: 162.69,
            }),
            new Debt({
                finalidade: 'Vivo',
                valor: 125,
                pago: 'Sim',
                valorPago: 125,
            }),
            new Debt({
                finalidade: 'Caixa (Cartão)',
                valor: 399.59,
                pago: 'Sim',
                valorPago: 399.59,
            }),
            new Debt({
                finalidade: 'Senac (02/05)',
                valor: 347.14,
                pago: 'Sim',
                valorPago: 347.14,
            }),
            new Debt({
                finalidade: 'Casa (25/36)',
                valor: 470,
                pago: 'Não',
            }),
            new Debt({
                finalidade: 'C&A',
                valor: 258.07,
                pago: 'Sim',
                valorPago: 258.07,
            }),
            new Debt({
                finalidade: 'Tng',
                valor: 339.13,
                pago: 'Sim',
                valorPago: 339.13,
            }),
            new Debt({
                finalidade: 'Vó',
                valor: 160,
                pago: 'Não',
            }),
            new Debt({
                finalidade: 'Gaston',
                valor: 56,
                pago: 'Sim',
                valorPago: 56
            })            
        ]

        const result = mapDebts(file)
        deepEqual(result, expected)

    });

});