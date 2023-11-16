"use strict";
class SpreadSheetController {
    constructor(sheetId, sheetName) {
        this.spreadsheet = SpreadsheetApp.openById(sheetId);
        this.activeSheet = this.spreadsheet.getSheetByName(sheetName);
        this.sheetExistCheck();
    }
    sheetExistCheck() {
        if (this.spreadsheet === null || this.activeSheet === null) {
            console.error("存在しないシート");
            throw new Error("存在しないシートです");
        }
    }
    changeSpreadSheetById(sheetId) {
        this.spreadsheet = SpreadsheetApp.openById(sheetId);
    }
    changeSheetByName(sheetName) {
        this.activeSheet = this.spreadsheet.getSheetByName(sheetName);
    }
    getAllValues() {
        var _a;
        return (_a = this.activeSheet) === null || _a === void 0 ? void 0 : _a.getDataRange().getValues();
    }
    getValues(row, column, numRows = 1, numColumns = 1) {
        var _a;
        return (_a = this.activeSheet) === null || _a === void 0 ? void 0 : _a.getRange(row, column, numRows, numColumns).getValues();
    }
}
function getAllValuesBySheet(sheetId, sheetName) {
    const ss = new SpreadSheetController(sheetId, sheetName);
    return convertDatesToStrings(ss.getAllValues());
}
function getValuesBySheet(sheetId, sheetName, row, column, numRows = 1, numColumns = 1) {
    const ss = new SpreadSheetController(sheetId, sheetName);
    return convertDatesToStrings(ss.getValues(row, column, numRows, numColumns));
}
// GAS特有の日時表記を文字列表記に直す
function convertDatesToStrings(array) {
    if (array == null) {
        return [[]];
    }
    return array.map((subArray) => {
        return subArray.map((element) => {
            if (element instanceof Date) {
                return Utilities.formatDate(element, "JST", "yyyy-MM-dd HH:mm:ss");
            }
            return element;
        });
    });
}
function test() {
    console.log(getAllValuesBySheet("1Ak4WKTiBghdClIAyWsofq3JEhRimsuWtwyDrKXxFUhQ", "日記"));
}
