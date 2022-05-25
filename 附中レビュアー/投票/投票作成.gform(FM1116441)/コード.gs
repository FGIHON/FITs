function submitForm(e){
 //回答を取得
 var itemResponses = e.response.getItemResponses();
 //メールアドレスの@以前のみ取得
 var qid = e.response.getRespondentEmail().replace(/@fuchu.example.com/g, "" );
 //内容
 qcont = itemResponses[0].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" ).replace(/＠/g, "@" ).replace(/＃/g, "#" );
 
 //投票一覧シート
 var ss = SpreadsheetApp.openById("SS9174831");
 var ssh = ss.getSheetByName("Sheet");
 //質問番号を取得
 var qnum = ss.getSheetByName("Data").getRange("B1");
 //投票一覧の一番上に行追加
 ssh.insertRowBefore(2);
 //回答を設定
 ssh.getRange("A2:E2").setValues([[qnum.getValue(),qid,qcont,0,0]]); 
 //質問番号を更新
 qnum.setValue(qnum.getValue()+1);
}
