"use strict";

const formPopUp = document.querySelector("#formPopUpBook");
const bookUrl = "http://localhost:8080/book/";


async function showItem(id) {
  // Indhold i bog
  const isbnBook = document.querySelector('#ISBNInputBook');
  const authorBook = document.querySelector('#authorList');
  const seriesBook = document.querySelector('#seriesDropDownBook');
  const numberBook = document.querySelector('#numberInputBook');
  const titleBook = document.querySelector('#titleInputBook');
  const publisherBook = document.querySelector('#publisherDropDownBook');
  const usPriceBook = document.querySelector('#usPriceInputBook');
  const danishBook = document.querySelector('#danishPriceInput');
  const discountPrice = document.querySelector('#discountPriceInput');
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

  cancelBook.addEventListener('click', cancelpopup);

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

  const authorMap = new Map();

  //Empty the div element authorBook
  while (authorBook.firstChild) {
    authorBook.removeChild(authorBook.firstChild);
  }

  //authorBook
  book.authors.forEach(author => {

    //const ptag = document.createElement('p');
    //ptag.innerText = author.authorName;

    authorBook.appendChild(createSpan("", author.authorName));

    authorMap.set(author.id, author);
  });

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
  const types = await fetchList(bookUrl + "types");
  typeBook.appendChild(createOption('nullType', 'Vis alle'));
  types.forEach(type => typeBook.appendChild(createOption(type, type)));
  if (book.type != null) {
    const element = document.getElementById(book.type);
    element.selected = true;
  }

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

  dateBook.innerText = format(new Date(book.date.split("T")[0]));
  saveBook.addEventListener('click', save);

  //Skal lige tjekkes når backend virker
  async function save() {

    const authorList = Array.from(authorMap.values());
    let category = "";

    if (categoryBook.options[categoryBook.selectedIndex].value === 'nullCat') {
      category = null;
    } else {
      category = {bookCategoryId: categoryBook.options[categoryBook.selectedIndex].value};
    }

    let bookseries = "";
    if (seriesBook.options[seriesBook.selectedIndex].value === 'nullSeries') {
      bookseries = null;
    } else {
      bookseries = {bookSeriesId: seriesBook.options[seriesBook.selectedIndex].value};
    }

    let pub = "";
    if (publisherBook.options[publisherBook.selectedIndex].value === 'nullPub') {
      pub = null;
    } else {
      pub = {publisherId: publisherBook.options[publisherBook.selectedIndex].value};
    }

    let genre = "";
    if (genreBook.options[genreBook.selectedIndex].value === 'nullGen') {
      genre = null;
    } else {
      genre = {bookGenreId: genreBook.options[genreBook.selectedIndex].value};
    }

    let typ = "";
    if (typeBook.options[typeBook.selectedIndex].value === 'nullType') {
      typ = null;
    } else {
      typ = typeBook.options[typeBook.selectedIndex].value;
    }

    const body = {
      bookId: id,
      isbn: isbnBook.value,
      bookSeries: bookseries,
      authors: authorList,//tjek hvordan man henter flere
      publisher: pub,
      bookCategory: category,
      bookGenre: genre,
      number: numberBook.value,
      title: titleBook.value,
      originalPrice: usPriceBook.value,
      danishPrice: danishBook.value,
      salePrice: discountPrice.value,
      type: typ,
      description: memoBook.value,
      date: formatDateForString(dateBook.textContent),
      unavailable: unavailableBook.checked,
      coming: comingBook.checked,
      subscription: subscriptionBook.checked,
      backorder: backorderBook.checked,
      outOfStock: outOfStockBook.checked,
      hide: hideBook.checked,
      onSale: onSaleBook.checked
    }

    await fetchItems("http://localhost:8080/book/" + id, body);
    closepopup();
  }
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


//showItem(getId()).catch(error => alert(error));

function getId() {
  const string = window.location.search;
  const urlParam = new URLSearchParams(string);
  return urlParam.get('id');
}

//Logik ligger i popup.js
//cancel
/*function cancel() {
  if (confirm("Er du sikker på du vil lukke uden at gemme?")) {
    window.close();
  }
}*/

//cancelBook.addEventListener('click', cancel);


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

function formatDateForString(string) {
  const dateArray = string.split('-');

  const dateFormat = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
  return dateFormat;
}
