function submitForm(e) {
  //フォームの回答を配列として取得
  var itemResponses=e.response.getItemResponses();
  //収集したEmailを取得
  var email=e.response.getRespondentEmail();
  //回答を取得①（投稿内容）
  var body=itemResponses[0].getResponse().replace(/=/g, "＝").replace(/</g, "＜").replace(/>/g, "＞").replace(/＠/g, "@").replace(/＃/g, "#");
  //回答を取得②（投稿オプション）
  var option=itemResponses[1].getResponse().replace(/=/g, "＝").replace(/</g, "＜").replace(/>/g, "＞").replace(/＠/g, "@").replace(/＃/g, "#");
  //datass（メールアドレス一覧シート）
  var datass=SpreadsheetApp.openById("SS5429737").getSheetByName("result");
  //mainss（投稿一覧シート）
  var mainss=SpreadsheetApp.openById("SS4340615").getSheetByName("Main");
  //日時を取得
  var date=Utilities.formatDate( new Date(), 'Asia/Tokyo', 'yyyy/MM/dd');
  //Query関数（検索を行う関数）の設定
  var wherequery="WHERE A= '"+email.toLowerCase()+"'";
  datass.getRange(1, 1).setValue('=IFERROR(QUERY(ID!A:E,"'+ wherequery + '",0),\"")');
  //検索結果の取得
  var name=datass.getRange(1, 2).getValues()[0][0];
  //メールアドレスから投稿者名を取得
  if ( name != "") {
    if ( option !="登録済みの名前を使用") {
      //自由な名前を使いたい場合
      name=option;
    }
    //mainssにセット
    mainss.insertRowBefore(2);
    mainss.getRange("A2:C2").setValues([[date, name, body]]);
  }
}
