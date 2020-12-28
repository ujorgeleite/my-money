const mapTotalIncomes = ({ rows }) => {
    return rows.filter(item => !!item.rendimento)
    .map(item => item.rendimento)
    .reduce((total, current) => total + current, 0)
}

module.exports = mapTotalIncomes

