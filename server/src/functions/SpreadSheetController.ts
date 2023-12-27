class SpreadSheetController {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  private activeSheet: GoogleAppsScript.Spreadsheet.Sheet | null;

  constructor(sheetId: string, sheetName: string) {
    this.spreadsheet = SpreadsheetApp.openById(sheetId);
    this.activeSheet = this.spreadsheet.getSheetByName(sheetName);
    this.sheetExistCheck();
  }

  private sheetExistCheck() {
    if (this.spreadsheet === null || this.activeSheet === null) {
      console.error("存在しないシート");
      throw new Error("存在しないシートです");
    }
  }

  public changeSpreadSheetById(sheetId: string) {
    this.spreadsheet = SpreadsheetApp.openById(sheetId);
  }

  public changeSheetByName(sheetName: string) {
    this.activeSheet = this.spreadsheet.getSheetByName(sheetName);
  }

  public getAllValues() {
    return this.activeSheet?.getDataRange().getValues();
  }

  public getValues(
    row: number,
    column: number,
    numRows: number = 1,
    numColumns: number = 1
  ) {
    return this.activeSheet
      ?.getRange(row, column, numRows, numColumns)
      .getValues();
  }

  public getLastRow(){
    return this.spreadsheet.getLastRow()
  }

  public getLastColumn(){
    return this.spreadsheet.getLastColumn()
  }

}

function getAllValuesBySheet(sheetId: string, sheetName: string) {
  const ss = new SpreadSheetController(sheetId, sheetName);
  return convertDatesToStrings(ss.getAllValues());
}

function getValuesBySheet(
  sheetId: string,
  sheetName: string,
  row: number,
  column: number,
  numRows: number = 1,
  numColumns: number = 1
) {
  const ss = new SpreadSheetController(sheetId, sheetName);
  return convertDatesToStrings(ss.getValues(row, column, numRows, numColumns));
}

// GAS特有の日時表記を文字列表記に直す
function convertDatesToStrings(array: Array<Array<any>> | undefined) {
  if (array == null) {
    return [[]];
  }
  return array.map((subArray) => {
    return subArray.map((element: any) => {
      if (element instanceof Date) {
        return Utilities.formatDate(element, "JST", "yyyy-MM-dd HH:mm:ss");
      }
      return element;
    });
  });
}
