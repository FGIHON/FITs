function submitForm(e){
 //回答を取得
 var itemResponses = e.response.getItemResponses();
 //質問番号
 var qnum = Number(itemResponses[0].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" ).replace(/＠/g, "@" ).replace(/＃/g, "#" ));
 //YES or NO
 var option = itemResponses[1].getResponse().replace(/=/g, "＝" ).replace(/</g, "＜" ).replace(/>/g, "＞" ).replace(/＠/g, "@" ).replace(/＃/g, "#" );

 //投票一覧シート
 var ss = SpreadsheetApp.openById("SS9174831");
 var ssh = ss.getSheetByName("Sheet");
 //番号列
 var ssnums = ssh.getRange(1,1,ss.getLastRow()).getValues();
 //1次元配列にする
 var sslist = Array.prototype.concat.apply([], ssnums);
 console.log(sslist);
 //配列からqnumにあたるもののインデックス=行を取得
 var ssrow = sslist.indexOf(qnum)+1;
 console.log(ssrow)
 //もし配列から見つかったら実行
 if(ssrow != 0){
  if(option == "YES"){
   //DはYES列
   var sscel = ssh.getRange("D"+ssrow);
   console.log(sscel.getValue());
   sscel.setValue(sscel.getValue()+1);
  };
  if(option == "NO"){
   //EはNO列
   var sscel = ssh.getRange("E"+ssrow);
   sscel.setValue(sscel.getValue()+1);
  };
 };
};

