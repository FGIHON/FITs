//はじめの呪文
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSS(){
 //スプレッドシート取得
 var ss = SpreadsheetApp.openById("SS2861837").getSheetByName("Forms");
 //データを取得
 var sources = ss.getRange(1,1,ss.getLastRow()).getValues();
 //ソース作成
 var source = "";
 for (i=1; i<ss.getLastRow(); i++){
  source = source + sources[i][0];
 }
 console.log(source)
 return source;
};
