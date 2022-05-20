"use strict";

const formPopUp = document.querySelector("#formPopUpBook");
const bookUrl = "http://localhost:8080/book/";


// Indhold i bog
const isbnBook = document.querySelector('#ISBNInputBook');
const authorBook = document.querySelector('#authorList');
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
const saveBook = document.querySelector('#saveBook');
const cancelBook = document.querySelector('#cancelBook');


async function showItem(id) {
  const book = await fetchItemById(id);
  console.log(book);

  // input get value
  isbnBook.value = book.isbn;
  numberBook.value = book.number;
  titleBook.value = book.title;
  usPriceBook.value = book.originalPrice;
  danishBook.value = book.danishPrice;
  memoBook.value = book.description;


  // Dropdowns

  //authorBook
  //const listAut = await fetchList(bookUrl + "authors/" + book.bookId);
  //listAut.forEach(author => authorBook.appendChild(document.createElement('p').innerText = author.authorName));

  //seriesBook
  const listSer = await fetchList(bookUrl + "series");
  seriesBook.appendChild(createOption('nullSeries', "Vis alle"));
  listSer.forEach(element => seriesBook.appendChild(createOption(element.bookSeriesId, element.bookSeriesName)));
  if (book.bookSeries != null) {
    const element = document.getElementById(book.bookSeries.bookSeriesName);
    element.selected = true;
  }

  //publisherBook
  const listPub = await fetchList(bookUrl + "publisher");
  publisherBook.appendChild(createOption('nullPub', "Vis alle"));
  listPub.forEach(element => publisherBook.appendChild(createOption(element.publisherId, element.publisherName)));
  if (book.publisher != null) {
    const element = document.getElementById(book.publisher.publisherName);
    element.selected = true;
  }

  //typeBook
  //categoryBook
  const listCat = await fetchList(bookUrl + "categories");
  categoryBook.appendChild(createOption('nullCat', "Vis alle"));
  listCat.forEach(element => categoryBook.appendChild(createOption(element.bookCategoryId, element.categoryName)));
  if (book.bookCategory != null) {
    const element = document.getElementById(book.bookCategory.categoryName);
    element.selected = true;
  }

  //genreBook
  const listGenre = await fetchList(bookUrl + "genre");
  genreBook.appendChild(createOption('nullGen', "Vis alle"));
  listGenre.forEach(element => genreBook.appendChild(createOption(element.bookGenreId, element.bookGenreName)));
  if (book.bookGenre != null) {
    const element = document.getElementById(book.bookGenre.bookGenreName);
    element.selected = true;
  }


// checkboxes
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

  //Date

  // formater til dato
  function format(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date
      .toString()
      .padStart(2, '0');

    month = month
      .toString()
      .padStart(2, '0');

    return `${date}-${month}-${year}`;
  }

  dateBook.innerText = format(new Date(book.date.split("T")[0]));

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


showItem(getId()).catch(error => alert(error));

function getId() {
  const string = window.location.search;
  const urlParam = new URLSearchParams(string);
  return urlParam.get('id');
}

//cancel
function cancel() {
  if (confirm("Er du sikker på du vil lukke uden at gemme?")) {
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
