// ==UserScript==
// @name         Amazon - 漫画リーダー/クラウドリーダーへのリンクを追加する
// @namespace    https://bitbucket.org/kurikei/user_script
// @version      0.0.1
// @description  ブラウザ上のKindleのリーダーのリンクを付与する
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match        https://www.amazon.co.jp/*/dp/*
// @match        https://www.amazon.co.jp*/dp/*
// @match        https://www.amazon.co.jp*/gp/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
  /* jshint ignore:end */
  /* jshint esnext: false */
  /* jshint esversion: 6 */

  // 購入履歴がある
  let element = document.getElementById('ebooksInstantOrderUpdate');

  if (element) {
    let asin = getAsin();
    let mangaReaderLink = document.createElement('a');
    mangaReaderLink.href = "https://read.amazon.co.jp/manga/" + asin;
    mangaReaderLink.textContent = "漫画リーダー：https://read.amazon.co.jp/manga/" + asin;
    element.parentNode.insertBefore(mangaReaderLink, element.nextSibling);

    let cloudReaderLink = document.createElement('a');
    cloudReaderLink.href = "https://read.amazon.co.jp/?asin=" + asin
    cloudReaderLink.textContent = "Cloud Reader";
    element.parentNode.insertBefore(cloudReaderLink, element.nextSibling);
  }

  function getAsin() {
    return location.href.match("https://www.amazon.co.jp/(.+/)?[dg]p/(product/)?(.*?)[/\?].+")[3];
  }

  /* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
