function makeURL() {
  var random = Math.random();
  var userTypeOrig = ["生徒", "保護者", "一般"],
    club1Orig = [
      "図書委員会",
      "生徒会",
      "ｴﾚｸﾄﾛﾆｸｽ部",
      "デザイン造形部",
      "ロボメック部",
      "化学工学部",
      "弓道部",
      "山岳部",
      "写真部",
      "鉄道研究部",
      "日本文化部",
      "美術部",
    ],
    club2Orig = [
      "アコースティックギター部",
      "ジャズバンド部",
      "ダンス部",
      "ラグビー部",
      "演劇部",
      "軽音楽部",
      "大道芸部",
    ],
    class1,
    class2,
    class3,
    sentence = "インターネットでお困りなら当職にお任せ下さいナリ";
  class1 = makeClassNumber(3, 8);
  class2 = makeClassNumber(1, 8);
  class3 = makeClassNumber(2, 8, true);
  var userType = makeRandomClub(userTypeOrig);
  var club1 = makeRandomClub(club1Orig);
  if (random > 0.9) {
    club1 = "鉄道研究部";
  }
  var club2 = makeRandomClub(club2Orig);
  if (random > 0.9) {
    club2 = "大道芸部";
  }

  console.log(userType, class1, class2, class3, club1, club2);
  var reqURL: string = `https://docs.google.com/forms/d/e/1FAIpQLSf-xE3t6zI7KFGZqLLiL_FxZnd9uoA1WmSj4NsC-PPYDTzADA/formResponse?entry.1000339570=${userType}&entry.350653609=${class1}&entry.297283329=${class2}&entry.814647229=${club1}&entry.1291703670=${class3}&entry.1314049338=${club2}`;
  //&entry.728838333=${sentence}
  //

  var checked = <HTMLInputElement>document.getElementById("c");
  var sentenceElement = <HTMLInputElement>document.getElementById("sentence");
  if (checked.checked == true) {
    if (sentenceElement.value != "") {
      sentence = sentenceElement.value;
    }
    reqURL = reqURL + `&entry.728838333=${sentence}`;
  }
  //
  var output = encodeURI(reqURL);
  //console.log(reqURL);
  //console.log(output);
  var req = new XMLHttpRequest();
  req.open("GET", output);
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      //console.log(req.responseText);
    } else {
      //console.log(req.status);
    }
  };
  reloadElement(reqURL);
  return output;
}
function makeClassNumber(x: number, y: number, z?: boolean) {
  //1からxもしくはyまでの欄整数を生成
  var grade: number = Math.floor(Math.random() * x + 1);
  var classNum: number = Math.floor(Math.random() * y + 1);
  //学年を２から始める
  if (z == true) {
    grade++;
  }
  var output: string = grade + "-" + classNum;
  return output;
}
function makeRandomClub(clubs: string[]) {
  //配列は0番目からなので問題ナッシング
  var index: number = Math.floor(Math.random() * clubs.length);
  var output: string = clubs[index];
  return output;
}

function testReq() {
  var div1 = <HTMLElement>document.getElementById("b");
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://docs.google.com/forms/d/e/1FAIpQLSc4DpdVes76yXvM-xuYTNdOPORr2j0nUKd_sZsv52ZgRDlg5A/formResponse?entry.460698824=A"
  );
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log(req.status);
    }
  };
  var div1 = <HTMLElement>document.getElementById("b");
}

function reloadElement(a: string) {
  var area = <HTMLInputElement>document.getElementById("a");
  area.value = a;
}
