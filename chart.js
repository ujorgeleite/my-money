var XLSXChart = require("xlsx-chart");

const drawChartMoney = (titles, dataChart) => {
  var xlsxChart = new XLSXChart();
  var opts = {
    file: "chart.xlsx",
    chart: "column",
    titles: titles,
    fields: ["Salario","Dividas"],
    data: dataChart,
  };

  xlsxChart.writeFile(opts, function (err) {
    console.log("File: ", opts.file);
  });
};

module.exports = drawChartMoney;
