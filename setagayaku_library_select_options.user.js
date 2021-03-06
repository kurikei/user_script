// ==UserScript==
// @name         世田谷区立図書館の予約システムのオプションを自動で記入する
// @namespace    https://github.com/kurikei
// @version      1.1.0
// @description  世田谷区立図書館の予約システムのオプションを自動で記入する
// @author       kurikei
// @match       https://libweb.city.setagaya.tokyo.jp/*/rbcnf
// ==/UserScript==

const contactKey = 'setagayakuLibraryReserveContact';
const placeKey = 'setagayakuLibraryReservePlace';
const contactSelector = document.querySelector('select[name=CONTACT]');
const placeSelector = document.querySelector('select[name=LCOD]');

if (hasSetting(contactKey)) {
  const contactValue = getSetting(contactKey);
  selectOptions(contactSelector, contactValue);
  console.log('Has contact setting. Set value:', contactValue);
}

if (hasSetting(placeKey)) {
  const placeValue = getSetting(placeKey);
  selectOptions(placeSelector, placeValue);
  console.log('Has place setting. Set value:', placeValue);
}

contactSelector.onchange = function() {
  // 選択されているoption要素を取得する
  const selectedValue = this.options[this.selectedIndex].value;
  setSetting(contactKey, selectedValue);
  console.log('Selected (' + selectedValue + ') for contact. Store Value.');
};

placeSelector.onchange = function() {
  // 選択されているoption要素を取得する
  const selectedValue = this.options[this.selectedIndex].value;
  setSetting(placeKey, selectedValue);
  console.log('Selected (' + selectedValue + ') for place. Store Value.');
};

function selectOptions(selector, value) {
  const options = selector.getElementsByTagName('option');
  for (let option of options) {
    if (option.value == value) {
      option.selected = true;
      break;
    }
  }
}

function hasSetting(key) {
  if (localStorage.getItem(key) === null) {
    return false;
  }
  return true;
}

function getSetting(key) {
  return localStorage.getItem(key);
}

function setSetting(key, value) {
  return localStorage.setItem(key, value);
}
