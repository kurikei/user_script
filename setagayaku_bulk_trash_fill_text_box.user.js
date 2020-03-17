// ==UserScript==
// @name         世田谷区の粗大ごみ回収ページのテキストボックスを自動で埋める
// @namespace    https://github.com/kurikei/user_script
// @version      0.1.0
// @description  世田谷区の粗大ごみ回収ページのテキストボックスを自動で埋める
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/ja.js
// @match       https://www.sodai-city.jp/setagaya/www/cgi-bin/kihon.cgi
// ==/UserScript==

/* eslint no-undef: 0 */
moment.locale('ja');

fillValue('NAME_L', 'XXX');
fillValue('NAME_F', 'XXX');
fillValue('NAME_K_L', 'XXX');
fillValue('NAME_K_F', 'XXX');
fillValue('ZIPCODE', 'XXX');
fillValue('ADDRESS_B', 'XXX');
fillValue('ADDRESS_G', 'XXX');
fillValue('ADDRESS_A_NO', 'XXX');
fillValue('ADDRESS_A_NAME', 'XXX');
fillValue('TEL1', 'XXX');

function fillValue(id, set_value) {
  document.getElementById(id).value = set_value;
}
