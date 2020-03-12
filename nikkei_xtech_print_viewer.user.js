// ==UserScript==
// @name         日経xtechを印刷表示にする
// @namespace    http://github.com/kurikei
// @version      1.2.0
// @author       kurikei
// @match       https://xtech.nikkei.com/atcl/nxt/column/*
// ==/UserScript==

const url = new URL(location.href);

if (url.searchParams.has('ST')) {
  // do nothing
} else {
  url.searchParams.set('ST', 'print');
  location.href = url.href;
}
