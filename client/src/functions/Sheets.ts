export class Sheets {
  private sheetId: string;
  private sheetName: string;

  constructor(sheetId: string, sheetName: string) {
    this.sheetId = sheetId;
    this.sheetName = sheetName;
  }

  public getSheetAllDataByList() {
    return new Promise<string>((resolve, reject) => {
      google.script.run
        .withSuccessHandler((result) => {
          resolve(result);
        })
        .withFailureHandler((error) => {
          reject(error);
        })
        .getSheetAllData(this.sheetId, this.sheetName);
    });
  }

  public testReturn() {
    return this.sheetId;
  }
}
