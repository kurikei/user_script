// ==UserScript==
// @name         東洋経済ONLINE/wedgeの記事を印刷表示にする
// @namespace    http://github.com/kurikei
// @version      1.3.0
// @author       kurikei
// @match        https://toyokeizai.net/articles/-/*
// @match        https://wedge.ismedia.jp/articles/-/*
// ==/UserScript==

location.href = location.href.replace('/-/', '/print/');
