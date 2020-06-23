const readXlsxFile = require('read-excel-file/node');
const schema = require('./fileSchema')

class File {

    constructor() {
        this.fileName = "planilha.xlsx"
    }

    async getFile() {
        const file = await readXlsxFile(this.fileName, { schema })
        return file
    }

}

module.exports = new File()