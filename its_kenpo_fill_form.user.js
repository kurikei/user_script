// ==UserScript==
// @name         ITS施設予約システム - フォームを自動入力する
// @namespace    https://github.com/kurikei
// @version      1.1.0
// @description  ITS施設予約システムのフォームを自動入力する
// @author       kurikei
// @match        https://as.its-kenpo.or.jp/apply/new?*
// ==/UserScript==

fillValue('#apply_sign_no', 'XXX'); // 事業所記号
fillValue('#apply_insured_no', 'XXX'); // 被保険者番号
fillValue('#apply_office_name', 'XXX'); // 事業所名
fillValue('#apply_kana_name', 'XXX'); // 申込代表者名（カナ氏名）
selectOptions('#apply_year', '1990'); // 生まれた年
selectOptions('#apply_month', '1'); // 生まれた月
selectOptions('#apply_day', '1'); // 生まれた日
fillValue('#apply_contact_phone', 'XXX'); // 連絡先電話番号
fillValue('#apply_postal', 'XXX'); // 郵便番号
selectOptions('#apply_state', '13'); // 都道府県 e.g) 東京都の場合、'13'
fillValue('#apply_address', 'XXX'); // 都道府県以降の住所
fillValue('#apply_stay_persons', 'X'); // 宿泊人数

function fillValue(selector, value) {
  document.querySelector(selector).value = value;
}

function selectOptions(selector, value) {
  const options = document
    .querySelector(selector)
    .getElementsByTagName('option');
  for (const option of options) {
    if (option.value == value) {
      option.selected = true;
      break;
    }
  }
}
