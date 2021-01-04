const breakFile = require('./breakFile')
const file = require('./file')
const { run, testRun } = breakFile




const rodar = async () => {

    const fileNames = await run()
    let tempo = 1;
    setInterval((index) => {
        console.log(`Passou: ${tempo} segundos`)
        tempo += 1
    }, 1000)
    const multipolicadorTempoExecucao = (fileNames.length / 4)
    const tempoDeExecucao = multipolicadorTempoExecucao * 1000
    console.log(`A execução do arquivos vai começar em ${multipolicadorTempoExecucao} segundos, aguarde....`)

    setTimeout(async () => {
        fileNames.map(async (name, index) => {

            const arquivo = await file.getFile(name)

            if (!!arquivo.errors && arquivo.errors.length > 0) {
                console.log(`Erro ao tentar ler o arquivo ${arquivo.errors}`)
                console.log(`Erros ${name}`)
            } else {

                console.log('leu o arquivo => ', name)
                //console.log('arquivo => ', arquivo)
            }



        })

    }, tempoDeExecucao)

}


rodar()

