const breakFile = require("./breakFile");
const file = require("./file");
const drawChartMoney = require("./chart");
const { mapChartItem, mapDataChart, mapTitleChart } = require("./Mappers");
const { breakInMultipleFiles } = breakFile;

const rodar = async () => {
  // Quebra o arquivo em vários arquivos de acordo com o nome da worksheet
  const fileNames = await breakInMultipleFiles();

  const multipolicadorTempoExecucao = fileNames.length / 9;
  const tempoDeExecucao = multipolicadorTempoExecucao * 1000;

  //Dá um status para o usuário do tempo percorrido até o inicio da execução
  console.log(
    `A execução do arquivos vai começar em ${multipolicadorTempoExecucao} segundos, aguarde....`
  );

  let tempo = 1;
  setInterval((index) => {
    console.log(`Passou: ${tempo} segundos`);
    tempo += 1;
  }, 1000);

  //Começa a leitura dos arquivos e mapeamento do gráfico após passado o tempo para a execução
  setTimeout(async () => {
    const dataChart = [];

    console.time("GetFile and Draw");
    //itera sobre cada arquivo obtendo um por um
    await fileNames.map(async (name, index) => {
      const arquivo = await file.getFile(name);

      if (!!arquivo.errors && arquivo.errors.length > 0) {
        console.log(`Erro ao tentar ler o arquivo ${arquivo.errors}`);
        console.log(`Erros ${name}`);
      } else {
        //console.log("leu o arquivo => ", name);
        //console.log('arquivo => ', arquivo)

        //se obteve arquivo com sucesso entao faz o map de dados
        //e envia para o chart imprimir o relatório

        dataChart.push(mapChartItem(name, arquivo.rows));

        if (index === fileNames.length - 1) {
          const dataMapped = mapDataChart(dataChart)
          await drawChartMoney(mapTitleChart(fileNames), dataMapped);
        }
      }
    });
    console.timeEnd("GetFile and Draw");
  }, tempoDeExecucao);
};

rodar();
