"use strict";

const formPopUp = document.querySelector("#formPopUpBook");
const url = "http://localhost:8080/book/";

// Indhold i bog
const isbn = document.querySelector('#ISBNInputBook');
const author = document.querySelector('#authorDropDownBook');
const series = document.querySelector('#seriesDropDownBook');
const number = document.querySelector('#numberInputBook');
const title = document.querySelector('#titleInputBook');
const publisher = document.querySelector('#publisherDropDownBook');
const originalPrice = document.querySelector('#originalPriceInputBook');
const usPrice = document.querySelector('#usPriceInputBook');
const danish = document.querySelector('#danishPriceInput');
const memo = document.querySelector('#memoInputBook');
const type = document.querySelector('#typeDropDownBook');
const category = document.querySelector('#categoryDropDownBook');
const genre = document.querySelector('#genreDropDownBook');
const outOfStock = document.querySelector('#outOfStockBook');
const unavailable = document.querySelector('#unavailableBook');
const subscription = document.querySelector('#subscriptionBook');
const backorder = document.querySelector('#backorderBook');
const coming = document.querySelector('#comingBook');
const hide = document.querySelector('#hideBook');
const date = document.querySelector('#dateBook');
const cover = document.querySelector('#dateBook');
const save = document.querySelector('#dateBook');
const cancel = document.querySelector('#dateBook');


async function showItem(id, event) {
  event.preventDefault();
  const book = await fetchItemById(id);
  console.log(book);

 // formPopUp.setAttribute("forfatter", book.authors.authorName);
 // formPopUp.setAttribute("serie", book.bookSeries.bookSeriesName);
  // formPopUp.setAttribute("forlag", book.publisher.publisherName);



}

