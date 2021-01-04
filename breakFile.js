const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const { mapCell } = require("./Mappers/index.js");

const mapSheets = async (file) => {
  const fileNames = [];

  await file.eachSheet(async (sheet, index) => {
    if (sheet.name.includes("20")) {
      const newWorkbook = new Excel.Workbook();
      const workSheet = newWorkbook.addWorksheet(sheet.name);
      const rows = await mapRows(sheet);
      workSheet.addRows(rows);
      const fileName = `files/${sheet.name}.xlsx`;
      await fileNames.push(fileName);
      await newWorkbook.xlsx.writeFile(fileName);
    }
  });

  return fileNames;
};

const mapRows = async (sheet) => {
  const rowsValues = [];
  const headerRows = [];
  await sheet.eachRow(async (row, indexRow) => {
    const cells = await mapCells(row, indexRow, sheet);
    await rowsValues.push(cells);
  });

  return rowsValues;
};

const mapCells = async (row, indexRow, sheet) => {
  const valueRows = [];

  //se index row igual a 1 olha o valor da primeira celula dela e se for formula nao deve inserir o valor

  await row.eachCell((cell, cellNumber) => {
    if (isValidCell(row, indexRow, cellNumber, sheet)) {
      const cellCopy = row.getCell(cellNumber);
      valueRows.push(mapCell(cellCopy));
    }
  });

  return valueRows;
};

const isValidCell = (row, indexRow, cellNumber, sheet) => {
  const currentCell = row.getCell(cellNumber);

  if (indexRow == 1) {
    const nextIndex = indexRow + 1;
    const nextCell = sheet.getRow(nextIndex).getCell(cellNumber);
    return (
      currentCell.formulaType === undefined &&
      nextCell.formulaType === undefined
    );
  } else {
    return currentCell.formulaType === undefined;
  }
};

const run = async () => {
  let filenames = [];
  const file = await workbook.xlsx.readFile("planilha.xlsx");

  console.time("mapSheets");
  filenames = await mapSheets(file);
  console.timeEnd("mapSheets");
  return filenames;
};

module.exports = { run };
