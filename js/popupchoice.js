//https://www.youtube.com/watch?v=7Iadn0Rm2T8

let menu = null;

document.addEventListener('DOMContentLoaded', function () {
  menu = document.querySelector('.menu');
  menu.classList.add('off');

  // Få menu til at forsvinde ved at gå ud over dets rammer
  menu.addEventListener('mouseleave', hideMenu);
});

// Manipuler menuens visibilitet
function showMenu(item, tablerow) {
  menu.style.top = event.clientY - 20 + 'px';
  menu.style.left = event.clientX - 20 + 'px';

// Lyt på valgmulighederne
  addMenuListeners(item, tablerow);
}

function hideMenu() {
  menu.classList.add('off');
  menu.style.top = '-200%';
  menu.style.left = '-200%';
}


// Lyt efter klik på valgene
function addMenuListeners(item, tablerow) {

  // Opret eventlisteners på valg af opret og slet men sørg for at udskifte disse med nye hver gang
  const oldCreate = document.querySelector('#menuCreate');
  const newCreate = oldCreate.cloneNode(true);
  oldCreate.parentNode.replaceChild(newCreate, oldCreate);
  newCreate.addEventListener('click', () => createItemLikeThis(item));

  const oldDelete = document.querySelector('#menuDelete');
  const newDelete = oldDelete.cloneNode(true);
  oldDelete.parentNode.replaceChild(newDelete, oldDelete);
  newDelete.addEventListener('click', () => deleteThisItem(item, tablerow));

}


// Her er funktioner som skal affyres ved valg
async function createItemLikeThis(item) {
  insertPopupDiv.innerHTML = "";
  popupHeader.innerText = "Opret bog:";

  await insertPopupData();
  e.style.display = "block";

  insertPopUpBook(item);
}

async function deleteThisItem(item, tablerow) {
  if (confirm("Er du sikker på du vil slette " + item.title + "?")) {
    try {
      await fetch("http://localhost:8080/book/" + item.id, {
        method: "DELETE"
      })
      tablerow.remove();

    } catch (reason) {
      alert(reason);
    }

  }

}

async function insertPopUpBook(item) {
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
  let dateBook = document.querySelector('#dateBook');
  const coverBook = document.querySelector('#dateBook');
  const saveBook = document.querySelector('#saveBook');
  const cancelBook = document.querySelector('#cancelBook');

  const book = await fetchItemById(item.id);

  cancelBook.addEventListener('click', cancelpopup);

  //authorBook
  const authorMap = new Map();

  console.log(book)

  book.authors.forEach(author => {
    const span = document.createElement('span');
    span.innerText = author.authorName;
    authorBook.appendChild(span);
    authorMap.set(author.authorName, author);
  });

  //bogserie
  const listSer = await fetchList(bookUrl + "series");
  seriesBook.appendChild(createOption('nullSeries', "Vis alle"));
  listSer.forEach(element => seriesBook.appendChild(createOption(element.bookSeriesId, element.bookSeriesName)));
  if (book.bookSeries != null) {
    const element = document.getElementById(book.bookSeries.bookSeriesName);
    element.selected = true;
  }

  //forlag
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

  subscriptionBook.checked = true;
  dateBook.innerText = format(new Date());

  //herefter skal der være en lytning på gem og luk knap - giver mening at arbejde sammen med update da fetch bliver ens
  //skal muligvis lige overveje at gøre nogle af felterne ovenfor required - de som ikke må være null i db
  //skal gøres i den som opretter elementerne
  saveBook.addEventListener('click', () => {
    save()
  });
  saveBook.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      save();
    }
  })

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

    await fetchItems("http://localhost:8080/book/", body);
    closepopup();
  }
}
