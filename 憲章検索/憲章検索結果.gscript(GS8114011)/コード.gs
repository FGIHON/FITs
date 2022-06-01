function doGet(e) {
	nkey = e.parameter.kywd;
	key = ".*" + e.parameter.kywd + ".*";
	return HtmlService.createTemplateFromFile("index").evaluate().setSandboxMode(
		HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode
		.ALLOWALL);
}

function getSS() {
  //変数定義
	var source = "";
	var array = [];
	var rownum;
	var sheet = SpreadsheetApp.openById("SS9738384").getSheetByName("DB");
  //検索
	var textFinder = sheet.createTextFinder(key).useRegularExpression(true);
	var ranges = textFinder.findAll();
  //ソース作成
	if (ranges.length == 0 && nkey !== undefined) {
		source = "<h2>「" + nkey + "」は見つかりませんでした</h2>"
	} else {
		for (var i = 0; i < ranges.length; i++) {
			if (array.indexOf(ranges[i].getRow()) === -1) {
				var vals = sheet.getRange(ranges[i].getRow(), 1, 1, 3).getValues()[0];
				source = source + '<div class="box">' + vals[0] + '</div><p>' + vals[2].replace(
					/\n/g, '<br>') + '</p><p class="num">' + vals[1] + '</p><hr>';
				array.push(ranges[i].getRow());
			}
		}
	}
	return source
}

