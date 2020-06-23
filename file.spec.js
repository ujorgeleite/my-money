
const {
    deepEqual, 
    ok
} = require('assert')

const file =  require('./file')


describe('File Spec', () => {
    it('Should be get a file in a correct format', async () => {    
        const expected = { rows:
          [ { finalidade: 'Itaucard',
              valor: 857.29,
              vencimento: 6,
              pago: 'Sim',
              valorPago: 857.29,
              origem: 'Nando (Salário)',
              rendimento: 5288 },
            { finalidade: 'Pedralli',
              valor: 818.4,
              vencimento: 7,
              pago: 'Sim',
              valorPago: 818.4,
              origem: 'Ramona',
              rendimento: 400 },
            { finalidade: 'Pensão',
              valor: 300,
              vencimento: 10,
              pago: 'Sim',
              valorPago: 300,
              origem: 'Ramona(Seguro 02/04)',
              rendimento: 788 },
            { finalidade: 'Luz',
              valor: 162.69,
              vencimento: 10,
              pago: 'Sim',
              valorPago: 162.69,
              origem: 'PPR',
              rendimento: 800 },
            { finalidade: 'Vivo',
              valor: 125,
              vencimento: 10,
              pago: 'Sim',
              valorPago: 125 },
            { finalidade: 'Caixa (Cartão)',
              valor: 399.59,
              vencimento: 11,
              pago: 'Sim',
              valorPago: 399.59 },
            { finalidade: 'Senac (02/05)',
              valor: 347.14,
              vencimento: 15,
              pago: 'Sim',
              valorPago: 347.14 },
            { finalidade: 'Casa (25/36)',
              valor: 470,
              vencimento: 15,
              pago: 'Não' },
            { finalidade: 'C&A',
              valor: 258.07,
              vencimento: 16,
              pago: 'Sim',
              valorPago: 258.07 },
            { finalidade: 'Tng',
              valor: 339.13,
              vencimento: 17,
              pago: 'Sim',
              valorPago: 339.13 },
            { finalidade: 'Vó', valor: 160, vencimento: 17, pago: 'Não' },
            { finalidade: 'Gaston',
              valor: 56,
              vencimento: 11,
              pago: 'Sim',
              valorPago: 56 } ],
         errors: [] }

        const result = await file.getFile();
        
        deepEqual(result, expected)
    });
    
});



