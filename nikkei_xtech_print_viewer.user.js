// ==UserScript==
// @name         日経xtechを印刷表示にする
// @namespace    http://github.com/kurikei
// @version      1.0.0
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match       https://xtech.nikkei.com/atcl/nxt/column/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: false */
/* jshint esversion: 6 */

  const url = new URL(location.href);

  if (url.searchParams.has("ST")) {
    // do nothing
  } else {
    url.searchParams.set('ST', 'print');
    location.href = url.href;
  }

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
