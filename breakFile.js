const Excel = require('exceljs');
const workbook = new Excel.Workbook()


const mapSheets = async (file) => {
    const fileNames = []

    await file.eachSheet(async (sheet, index) => {

        if(index > 2) return
        
        if (sheet.name.includes('20')) {
            const newWorkbook = new Excel.Workbook();
            const workSheet = newWorkbook.addWorksheet(sheet.name)
            const rows = await mapRows(sheet)
            workSheet.addRows(rows)
            const fileName = `files/${sheet.name}.xlsx`;
            await fileNames.push(fileName)
            await newWorkbook.xlsx.writeFile(fileName)
        }
    });

    return fileNames

}

const mapRows = async (sheet) => {
    const rowsValues = []
    const headerRows = []
    await sheet.eachRow(async (row, indexRow) => {
        const cells = await mapCells(row, indexRow, headerRows)
        await rowsValues.push(cells)
    })

    return rowsValues;

}

const mapCells = async (row) => {
    const valueRows = []

    await row.eachCell((cell, cellNumber) => {
        if (cell.formulaType === undefined) {
            const cellCopy = row.getCell(cellNumber)
            valueRows.push(cellCopy.value)
        }

    })

    return valueRows
}



const run = async () => {
    let filenames = []
    const file = await workbook.xlsx.readFile('planilha.xlsx')

    console.time('mapSheets')
    filenames = await mapSheets(file)
    console.timeEnd('mapSheets')
    return filenames

}



module.exports = { run } 