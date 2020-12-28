const { Debt } = require("../Models")

const mapDebts = ({ rows }) => {
    return rows.filter(item => item.valor)
        .map(item => {
            return new Debt(item)
        })
}

module.exports = mapDebts