// ==UserScript==
// @name         Amazon.co.jp - Kindle Unlimited 本をハイライトする
// @namespace    https://github.com/kurikei/user_script<
// @version      1.0.0
// @description  KindleUnlimited本をハイライト
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match        https://www.amazon.co.jp/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: false */
/* jshint esversion: 6 */

setInterval(function() {
  const elements = document.querySelectorAll('div[data-p13n-asin-metadata]');
  for (let element of elements) {
    const img = element.querySelector('img');
    // 画像URLにku-stickerのパラメータを付与することで、動的にサムネイル画像にKindle Unlimitedのラベルを付与していそうなので
    // URLにその文字列が含まれているものをハイライトする
    if (img && img.src.match(/ku-sticker/)) {
        element.setAttribute('style', 'background:yellow');
    }
  }
}, 1000);

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
