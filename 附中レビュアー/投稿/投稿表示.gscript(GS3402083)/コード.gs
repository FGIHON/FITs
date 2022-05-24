//はじめの呪文
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSS(){
 //投稿を取得
 var ss = SpreadsheetApp.openById("SS4340615").getSheetByName("Main");
 //日時
 var dates = ss.getRange(1,1,ss.getLastRow()).getValues();
 //投稿者
 var names = ss.getRange(1,2,ss.getLastRow()).getValues();
 //内容
 var bodys = ss.getRange(1,3,ss.getLastRow()).getValues();
 //ソースコードを作成
 var source = "";
 for (i=1; i<ss.getLastRow(); i++){
  source = source + '<p class="vote">'+names[i][0]+'</p><p>'+bodys[i][0]+'</p><p class="name">'+dates[i][0]+'</p><hr>';
 }
 //ソースコードを返す
 return source;
};
