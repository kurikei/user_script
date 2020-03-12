// ==UserScript==
// @name         ITS施設予約システム - 日付に曜日を付与する
// @namespace    https://github.com/kurikei
// @version      1.1.0
// @description  ITS施設予約システムの日付に曜日を付与する
// @author       kurikei
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/ja.js
// @match        https://as.its-kenpo.or.jp/apply/new?*
// @match        https://as.its-kenpo.or.jp/apply/empty_new?*
// ==/UserScript==

moment.locale('ja');

const options = document
  .getElementById('apply_join_time')
  .getElementsByTagName('option');

for (const option of options) {
  if (option.innerText === '') {
    continue;
  }
  option.innerText = append_day_of_week(option.innerText);
}

function append_day_of_week(dateString) {
  const date = moment(dateString, 'YYYY年MM月DD日');
  return `${dateString}(${date.format('ddd')})`;
}
