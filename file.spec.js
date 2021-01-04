
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
              pago: 'Sim',
              valorPago: 857.29,
              origem: 'Nando (Salário)',
              rendimento: 3300 },
            { finalidade: 'Pedralli',
              valor: 818.4,
              pago: 'Sim',
              valorPago: 818.4,
              origem: 'Ramona',
              rendimento: 400 },
            { finalidade: 'Pensão',
              valor: 300,
              pago: 'Sim',
              valorPago: 300,
              origem: 'Ramona(Seguro 02/04)',
              rendimento: 788 },
            { finalidade: 'Luz',
              valor: 162.69,
              pago: 'Sim',
              valorPago: 162.69,
              origem: 'PPR',
              rendimento: 800 },
            { finalidade: 'Vivo',
              valor: 125,
              pago: 'Sim',
              valorPago: 125 },
            { finalidade: 'Caixa (Cartão)',
              valor: 399.59,
              pago: 'Sim',
              valorPago: 399.59 },
            { finalidade: 'Senac (02/05)',
              valor: 347.14,
              pago: 'Sim',
              valorPago: 347.14 },
            { finalidade: 'Casa (25/36)',
              valor: 470,
              pago: 'Não' },
            { finalidade: 'C&A',
              valor: 258.07,
              pago: 'Sim',
              valorPago: 258.07 },
            { finalidade: 'Tng',
              valor: 339.13,
              pago: 'Sim',
              valorPago: 339.13 },
            { finalidade: 'Vó', valor: 160, pago: 'Não' },
            { finalidade: 'Gaston',
              valor: 56,
              pago: 'Sim',
              valorPago: 56 } ],
         errors: [] }

        const result = await file.getFile('planilha_light.xlsx');
        
        deepEqual(result, expected)
    });
    
});



