// ==UserScript==
// @name         Amazon - Amazon.com の同一商品へのリンクを追加
// @namespace    https://github.cm/kurikei/user_script
// @version      1.4.0
// @description  Amazon.com - Amazon.co.jp の同一商品へのリンクを追加
// @author       kurikei
// @include      /https:\/\/www.amazon.co.jp\/([^\/]+\/)?[dg]p\/(.+)
// ==/UserScript==

const reg = /ASIN: ([0-9A-Z]+)/;

const detailLists = document.querySelectorAll('div#detail_bullets_id li');
for (let list of detailLists) {
  const text = list.innerText;
  if (text.match(reg)) {
    const asin = text.match(reg)[1];

    // リンク作成
    const link = document.createElement('a');
    link.href = 'https://www.amazon.com/dp/' + asin;
    const image = document.createElement('img');
    image.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/799px-Amazon.com-Logo.svg.png';
    image.style = 'height:2em';

    link.appendChild(image);
    list.append(link, list.nextSibling);
  }
}
