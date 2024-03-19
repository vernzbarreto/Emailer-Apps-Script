function getSheetById(sheet_id){

  // access wb
   var wb = SpreadsheetApp.getActiveSpreadsheet();

  // access all sheet
   var sheets = wb.getSheets();

  // loop variables
    for(i in sheets) {
     // if sheet id matches the sheets argument
     if(sheets[i].getSheetId() == sheet_id) {
        // store sheet name
         var sheetName = sheets[i].getSheetName();
     }


  }

  // return the wb and sheet name
    return wb.getSheetByName(sheetName);


}
