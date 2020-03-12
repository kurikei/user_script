// ==UserScript==
// @name         Amazon - 漫画リーダー/クラウドリーダーへのリンクを追加する
// @namespace    https://bitbucket.org/kurikei/user_script
// @version      0.1.0
// @description  ブラウザ上のKindleのリーダーのリンクを付与する
// @author       kurikei
// @match        https://www.amazon.co.jp/*/dp/*
// @match        https://www.amazon.co.jp*/dp/*
// @match        https://www.amazon.co.jp*/gp/*
// ==/UserScript==

// 購入履歴がある
let element = document.getElementById('ebooksInstantOrderUpdate');

if (element) {
  let asin = getAsin();
  let mangaReaderLink = document.createElement('a');
  mangaReaderLink.href = 'https://read.amazon.co.jp/manga/' + asin;
  mangaReaderLink.textContent =
    '漫画リーダー：https://read.amazon.co.jp/manga/' + asin;
  element.parentNode.insertBefore(mangaReaderLink, element.nextSibling);

  let cloudReaderLink = document.createElement('a');
  cloudReaderLink.href = 'https://read.amazon.co.jp/?asin=' + asin;
  cloudReaderLink.textContent = 'Cloud Reader';
  element.parentNode.insertBefore(cloudReaderLink, element.nextSibling);
}

function getAsin() {
  return location.href.match(
    'https://www.amazon.co.jp/(.+/)?[dg]p/(product/)?(.*?)[/?].+'
  )[3];
}
