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
const originalPriceBook = document.querySelector('#originalPriceInputBook');
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
const hideBook = document.querySelector('#hideBook');
const dateBook = document.querySelector('#dateBook');
const coverBook = document.querySelector('#dateBook');
const saveBook = document.querySelector('#saveBook');
const cancelBook = document.querySelector('#cancelBook');


async function showItem(id) {
  const book = await fetchItemById(id);
  console.log(book);

 // formPopUp.setAttribute("forfatter", book.authors.authorName);
 // formPopUp.setAttribute("serie", book.bookSeries.bookSeriesName);
  // formPopUp.setAttribute("forlag", book.publisher.publisherName);



}

showItem(getId()).catch(error => alert(error));

function getId() {
  const string = window.location.search;
  const urlParam = new URLSearchParams(string);
  return urlParam.get('id');
}





































































//cancel
function cancel(){
  if(confirm("Er du sikker på du vil lukke uden at gemme?")){
    window.close();
  }
}
cancelBook.addEventListener('click', cancel);


//Skal lige tjekkes når backend virker
async function save() {
  const book = await fetchItemById(getId());

  const body = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(book)
  }.then((resonse) => resonse.json()).catch((reason) => alert(reason));

  await fetchItems("/book/{id}", body);

}
saveBook.addEventListener('click', save);
