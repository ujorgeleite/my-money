const mapIncomes = ({ rows }) => {
    return rows.filter(item => item.rendimento)
        .map(item => {
            return { income: item.rendimento, source: item.origem }
        })
        
    }

    module.exports = mapIncomes