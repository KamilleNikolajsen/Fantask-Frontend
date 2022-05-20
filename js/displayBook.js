"use strict";

const formPopUp = document.querySelector("#formPopUpBook");
const url = "http://localhost:8080/book/";


// Indhold i bog
const isbnBook = document.querySelector('#ISBNInputBook');
const authorBook = document.querySelector('#authorDropDownBook');
const seriesBook = document.querySelector('#seriesDropDownBook');
const numberBook = document.querySelector('#numberInputBook');
const titleBook = document.querySelector('#titleInputBook');
const publisherBook = document.querySelector('#publisherDropDownBook');
const usPriceBook = document.querySelector('#usPriceInputBook');
const danishBook = document.querySelector('#danishPriceInput');
const memoBook = document.querySelector('#memoInputBook');
const typeBook = document.querySelector('#typeDropDownBook');
const categoryBook = document.querySelector('#categoryDropDownBook');
const genreBook = document.querySelector('#genreDropDownBook');
const outOfStockBook = document.querySelector('#outOfStockBook');
const unavailableBook = document.querySelector('#unavailableBook');
const subscriptionBook = document.querySelector('#subscriptionBook');
const backorderBook = document.querySelector('#backorderBook');
const comingBook = document.querySelector('#comingBook');
const onSaleBook = document.querySelector('#onSaleBook');
const hideBook = document.querySelector('#hideBook');
const dateBook = document.querySelector('#dateBook');
const coverBook = document.querySelector('#dateBook');
const saveBook = document.querySelector('#dateBook');
const cancelBook = document.querySelector('#dateBook');


async function showItem(id) {
  const book = await fetchItemById(id);
  console.log(book);

  isbnBook.value = book.isbn;
  //await fetchList(url+"author");
  //authorBook
  //seriesBook
  numberBook.value = book.number;
  titleBook.value = book.title;

  //publisherBook
  const listPub = await fetchList(url + "publisher");
  publisherBook.appendChild(createOption('null', "Vis alle"));
  listPub.forEach(element => publisherBook.appendChild(createOption(element.publisherId, element.publisherName)));
  /*if (book.publisher != null) {
    const element = document.getElementById(book.publisherName);
    element.selected = true;
  } else {
    const noneSelected = document.getElementById('null');
    noneSelected.selected = true;
  }

   */

  usPriceBook.value = book.originalPrice;
  danishBook.value = book.danishPrice;
  memoBook.value = book.description;
  //typeBook
  //categoryBook

  //genreBook
  const listGenre = await fetchList(url + "genre");
  listPub.forEach(element => genreBook.appendChild(createOption(element.bookGenreId, element.bookGenreName)));

  if (book.outOfStock === true) {
    outOfStockBook.checked = true;
  }
  if (book.unavailable === true) {
    unavailableBook.checked = true;
  }
  if (book.subscription === true) {
    subscriptionBook.checked = true;
  }
  if (book.backorder === true) {
    backorderBook.checked = true;
  }
  if (book.coming === true) {
    comingBook.checked = true;
  }
  if (book.onSale === true) {
    onSaleBook.checked = true;
  }
  if (book.hide === true) {
    hideBook.checked = true;
  }
  // formater til dnask dato og kun dato
  dateBook.innerText = book.date;
}

function createOption(id, name) {
  const option = document.createElement('option');
  option.value = id;
  option.id = name;
  option.textContent = name;
  return option;
}

async function fetchList(dropDownUrl) {
  return await fetch(dropDownUrl).then(response => response.json()).catch(reason => alert(reason));
}

showItem(function () {
  const string = window.location.search;
  const urlParam = new URLSearchParams(string);
  return urlParam.get('id');
}()).catch(error => alert(error));


//cancel
