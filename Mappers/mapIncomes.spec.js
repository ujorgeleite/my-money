const { it } = require("mocha");

const file = require("./file.stub")


const {
    deepEqual
} = require('assert')

const mapIncomes = require('./mapIncomes')

describe('Map Incomes Spec', () => {
    it('MapIncomes by rows correctly', () => {
       

        const expected = [
            { income: 5288, source: 'Nando (Salário)' },
            { income: 400, source: 'Ramona' },
            { income: 788, source: 'Ramona(Seguro 02/04)' },
            { income: 800, source: 'PPR' }
        ];
        const incomes = mapIncomes(file);

        deepEqual(incomes, expected)

    });
});


