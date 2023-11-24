export class Sheets {
  private sheetId: string;
  private sheetName: string;

  constructor(sheetId: string, sheetName: string) {
    this.sheetId = sheetId;
    this.sheetName = sheetName;
  }

  public getAllValuesBySheet() {
    return new Promise<string[][]>((resolve, reject) => {
      google.script.run
        .withSuccessHandler((result) => {
          resolve(result);
          console.log(result);
        })
        .withFailureHandler((error) => {
          reject(error);
        })
        .getAllValuesBySheet(this.sheetId, this.sheetName);
    });
  }

  public getValuesBySheet(
    row: number,
    column: number,
    numRows: number = 1,
    numColumns: number = 1
  ) {
    return new Promise<string>((resolve, reject) => {
      google.script.run
        .withSuccessHandler((result) => {
          resolve(result);
        })
        .withFailureHandler((error) => {
          reject(error);
        })
        .getValuesBySheet(
          this.sheetId,
          this.sheetName,
          row,
          column,
          numRows,
          numColumns
        );
    });
  }
}
