const mapTotalIncomes = require("./mapTotalIncomes");
const mapTotalDebts = require("./mapTotalDebts");

const mapChartItem = (name, rows) => {
  const amountIncomes = mapTotalIncomes({ rows });
  const amountDebts = mapTotalDebts({ rows });

  name = name.replace("files/", "");
  name = name.replace(".xlsx", "");

  return `"${name}": {"Salario": ${amountIncomes},"Dividas": ${amountDebts}}`;
};

module.exports = mapChartItem;
