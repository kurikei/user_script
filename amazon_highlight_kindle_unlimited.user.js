// ==UserScript==
// @name         Amazon.co.jp - Kindle Unlimited 本をハイライトする
// @namespace    https://github.com/kurikei/user_script<
// @version      1.0.0
// @description  KindleUnlimited本をハイライト
// @author       kurikei
// @match        https://www.amazon.co.jp/*
// ==/UserScript==

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
