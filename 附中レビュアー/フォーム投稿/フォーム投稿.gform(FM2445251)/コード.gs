function onFormSubmit(e) {
 //フォーム取得
 var res = e.response.getItemResponses();
 //メールアドレス
 var email = e.response.getRespondentEmail();
 //組織名
 var name = res[0].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" );
 //タイトル
 var title = res[1].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" );
 //URL
 var url = res[2].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" );
 //有効期限
 var date = res[3].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" ).replace(/-/g, "/" );
 //データ取得
 var ss = SpreadsheetApp.openById("SS2861837").getSheetByName("Forms");
 //ソース作成
 var source = '<a href="'+url+'" target="_parent"><h2>'+title+'</h2></a><p class="name">'+name+'　'+date+'まで</p><hr>';
 //スプレッドシートに設定
 ss.insertRowBefore(2);
 ss.getRange("A2:B2").setValues([[source,date]]);
};
