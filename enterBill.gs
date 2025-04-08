function AddBillForm()
{ 
  var form = HtmlService.createHtmlOutputFromFile('Bill').setTitle('Enter Bill');
  SpreadsheetApp.getUi().showSidebar(form);
}

function AddRecord(PurchaseDate, Item, Shop, Price, Quantity, Cost) 
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("Expense Tracker");
  if (PurchaseDate && Item && Shop && Price && Quantity && Cost) 
  {
    dataSheet.appendRow([PurchaseDate, Item, Shop, Price, Quantity, Cost]);
    console.log("✅ Record added successfully");
    return "✅ Record Saved!";
  } else 
  {
    console.log("❌ Data missing");
    return "❌ Not All Data Entered!";
  }
}

function enterBill()
{
  AddBillForm()
}
