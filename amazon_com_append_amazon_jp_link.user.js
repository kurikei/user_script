// ==UserScript==
// @name         Amazon.com - Amazon.co.jp の同一商品へのリンクを追加
// @namespace    https://github.com/kurikei/user_script
// @version      1.3.0
// @description  Amazon.com - Amazon.co.jp の同一商品へのリンクを追加
// @author       kurikei
// @include      /https:\/\/www.amazon.com\/([^\/]+\/)?[dg]p\/(.+)
// ==/UserScript==

const reg = /ASIN: ([0-9A-Z]+)/;

const detailLists = document.querySelectorAll('table#productDetailsTable li');
for (let list of detailLists) {
  const text = list.innerText;
  if (text.match(reg)) {
    const asin = text.match(reg)[1];

    // リンク作成
    const link = document.createElement('a');
    link.href = 'https://www.amazon.co.jp/dp/' + asin;
    const image = document.createElement('img');
    image.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Amazon.co.jp_logo.svg/300px-Amazon.co.jp_logo.svg.png';
    image.style = 'height:2em';

    link.appendChild(image);
    list.append(link, list.nextSibling);
  }
}
