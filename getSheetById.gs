function getSheetById(sheet_id) {

  // workbook

   var wb = SpreadsheetApp.getActiveSpreadsheet();

  // access

  var sheets = wb.getSheets();

  // loop 

  for ( i in sheets) {
    // if the sheet id matches the sheet argument
    if(sheets[i].getSheetId() == sheet_id) {
      // store sheet name
      var sheetName = sheets[i].getSheetName();

    }
  }

  // return 
  return wb.getSheetByName(sheetName);

}
