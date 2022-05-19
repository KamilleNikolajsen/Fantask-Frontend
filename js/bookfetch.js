"use strict";

const formPopUp = document.querySelector("#formPopUpBook");
const url = "http://localhost:8080/book/";

async function fetchItemById(id) {
  return await fetch(url + id).then(response => response.json()).catch(reason => alert(reason));
}

async function showItem(id, event) {
  event.preventDefault();
  const book = await fetchItemById(id);
  console.log(book);

 // formPopUp.setAttribute("forfatter", book.authors.authorName);
 // formPopUp.setAttribute("serie", book.bookSeries.bookSeriesName);
  // formPopUp.setAttribute("forlag", book.publisher.publisherName);
}

