//はじめの呪文
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSS(){
 //投票一覧シート
 var ss = SpreadsheetApp.openById("SS9174831").getSheetByName("Sheet");
 //投票番号
 var nums = ss.getRange(1,1,ss.getLastRow()).getValues();
 //投稿者のID
 var ids = ss.getRange(1,2,ss.getLastRow()).getValues();
 //内容
 var titles = ss.getRange(1,3,ss.getLastRow()).getValues();
 //「YES」/「NO」の数
 var yess = ss.getRange(1,4,ss.getLastRow()).getValues();
 var nos = ss.getRange(1,5,ss.getLastRow()).getValues();
 //ソースコード作成
 var source = "";
 for (i=1; i<ss.getLastRow(); i++){
  source = source + '<p class="name">No.'+nums[i][0]+'　ID:'+ids[i][0]+'</p><p>'+titles[i][0]+'</p><p class="vote">YES:'+yess[i][0]+'　NO:'+nos[i][0]+'</p><hr>';
 }
 //ソースコードを返す
 return source;
};
