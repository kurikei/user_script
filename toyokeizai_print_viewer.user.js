// ==UserScript==
// @name         東洋経済ONLINEの記事を印刷表示にする
// @namespace    http://github.com/kurikei
// @version      1.1.0
// @author       kurikei
// @match        https://toyokeizai.net/articles/-/*
// ==/UserScript==

location.href = location.href.replace('/-/', '/print/');
