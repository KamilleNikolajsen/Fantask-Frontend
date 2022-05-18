"use strict";

const urlCrossSearch = "http://localhost:8080/category/all";
const formCross = document.querySelector('#formSearchCrossCategories');

const inputCrossFTS = document.querySelector('#searchAllFTSInput');
const categorydropdrown = document.querySelector('#categoryDropDown');
const timedropdown = document.querySelector('#timeDropDown');
const unavailableCross = document.querySelector('#searchAllUnavailable');
const outOfStockCross = document.querySelector('#searchAllOutOfStock');
const coming = document.querySelector('#searchAllComing');
const excludeComing = document.querySelector('#searchAllExcludeComing');
const onSaleCross = document.querySelector('#searchAllOnSale');
const boxCross = document.querySelector('#searchAllbox');

formCross.addEventListener("submit", (event) => showSearched(event, urlCrossSearch, {
  ftsInput: inputCrossFTS.value,
  showComing: coming.checked,
  excludeComing: excludeComing.checked,
  unavailable: unavailableCross.checked,
  outOfStock: outOfStockCross.checked,
  onSale: onSaleCross.checked,
  box: boxCross.checked,
  date: timedropdown.options[timedropdown.selectedIndex].value
}));

/*
input: inputCrossFTS.value,
  category: categorydropdrown.options[categorydropdrown.selectedIndex].value,
  time: timedropdown.options[timedropdown.selectedIndex].value,
  unavailable: unavailableCross.value,
  outOfStock: outOfStockCross.value,
  coming: coming.value,
  hide: hideCross.value,
  onSale: onSaleCross.value,
  box: boxCross.value
 */
