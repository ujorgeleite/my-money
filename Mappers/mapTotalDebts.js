const mapTotalDebts = ({ rows }) => {
  return rows
    .filter((item) => !!item.valor)
    .map((item) => item.valor)
    .reduce((total, current) => total + current, 0);
};

module.exports = mapTotalDebts;
