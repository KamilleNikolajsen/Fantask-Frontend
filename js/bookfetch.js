"use strict";

//Lav rigtig url
const urlBookFetch = "http://localhost:8080/book/{id}";
const formPopUp = document.querySelector("#formPopUpBook");

const ISBNInput = document.querySelector('#ISBNInput');
const authorInput = document.querySelector('#authorInput');
const seriesInput = document.querySelector('#seriesInput');
const numberInput = document.querySelector('#numberInput');
const titleInput = document.querySelector('#titleInput');
const publisherInput = document.querySelector('#publisherInput');
const originalPriceInput = document.querySelector('#originalPriceInput');
const usPriceInput = document.querySelector('#usPriceInput');
const danishPriceInput = document.querySelector('#danishPriceInput');
const memoInput = document.querySelector('#memoInput');
const typeInput = document.querySelector('#typeInput');
const categoryInput = document.querySelector('#categoryInput');
const genreInput = document.querySelector('#genreInput');
const searchAllBackorderInput = document.querySelector('#searchAllBackorder');
const searchAllComingInput = document.querySelector('#searchAllComing');
const searchAllOutOfStockInput = document.querySelector('#searchAllOutOfStock');

formCross.addEventListener("submit", (event) => showSearched(event, urlBookFetch, {
  ISBN: ISBNInput.value,
  author: authorInput.value,
  series: seriesInput.value,
  number: numberInput.value,
  title: titleInput.value,
  publisher: publisherInput.value,
  originalPrice: originalPriceInput.value,
  usPrice: usPriceInput.value,
  danishPrice: danishPriceInput.value,
  memo: memoInput.value,
  type: typeInput.value,
  category: categoryInput.value,
  genre: genreInput.value,
  searchAllBackorder: searchAllBackorderInput.checked,
  searchAllComing: searchAllComingInput.checked,
  searchAllOutOfStock: searchAllOutOfStockInput.checked
}));

