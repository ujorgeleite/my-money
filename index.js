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
    const multipolicadorTempoExecucao = (fileNames.length / 3)
    const tempoDeExecucao = multipolicadorTempoExecucao * 1000
    console.log(`A execução do arquivos vai começar em ${multipolicadorTempoExecucao} segundos, aguarde....`)

    setTimeout(async () => {
        fileNames.map(async(name) => {
            const arquivo = await file.getFile(name)
            console.log('name => ', name)
            console.log('arquivo => ', arquivo)
        })
        
    }, tempoDeExecucao)

}


rodar()

