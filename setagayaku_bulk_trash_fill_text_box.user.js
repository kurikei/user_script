// ==UserScript==
// @name         世田谷区の粗大ごみ回収ページのテキストボックスを自動で埋める
// @namespace    https://github.com/kurikei/user_script
// @version      0.0.2
// @description  世田谷区の粗大ごみ回収ページのテキストボックスを自動で埋める
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/ja.js
// @match       https://www.sodai-city.jp/setagaya/www/cgi-bin/kihon.cgi
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: false */
/* jshint esversion: 6 */
  moment.locale("ja");

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
/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */

