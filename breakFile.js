const Excel = require('exceljs');
const workbook = new Excel.Workbook()


const mapSheets = async (file) => {
    const worksheets = []
    const fileNames = []

    await file.eachSheet(async (sheet, index) => {
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

const mapCells = async (row, indexRow, headerRows) => {
    const valueRows = []
    let rowValue = {}

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

const testRun = async () => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");

    worksheet.columns = [
        { header: 'Total', key: 'Total', width: 10 },
        { header: 'À Pagar', key: 'aPagar', width: 32 },
        { header: 'Valor total', key: 'valorTotal', width: 15, },
        { header: 'Finalidade', key: 'Finalidade', width: 15, },
        { header: 'Valor', key: 'valor', width: 15, },
        { header: 'Pago', key: 'pago', width: 15, },
        { header: 'Valor Pago', key: 'valorPago', width: 15, },
        { header: 'Origem', key: 'origem', width: 15, },
        { header: 'Rendimento', key: 'rendimento', width: 15, },
        { header: 'Frequência', key: 'frequencia', width: 15, },
        { header: 'Total Rendimento', key: 'totalRendimento', width: 15, },
        { header: 'Sub Total', key: 'subTotal', width: 15, },
        { header: 'Lucro', key: 'lucro', width: 15, }
    ];

    worksheet.addRow({ id: 1, Finalidade: 'John Doe', dob: new Date(1970, 1, 1) });
    worksheet.addRow({ id: 2, Finalidade: 'Jane Doe', dob: new Date(1965, 1, 7) });

    // save under export.xlsx
    await workbook.xlsx.writeFile('files/export.xlsx');

    return ['export.xlsx']
}

module.exports = { run, testRun } 