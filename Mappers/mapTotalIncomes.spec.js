const { it } = require("mocha");

const file = require("./file.stub")


const {
    deepEqual
} = require('assert')

const mapTotalIncomes= require('./mapTotalIncomes')

describe('Map Total Incomes Spec', () => {


    it('MapTotalIncome by rows correctly', () => {       

        const expected = 7276;
        const totalIncomes = mapTotalIncomes(file);

        deepEqual(totalIncomes, expected)

    });
});


