//https://www.youtube.com/watch?v=7Iadn0Rm2T8

let menu = null;

document.addEventListener('DOMContentLoaded', function () {
  menu = document.querySelector('.menu');
  menu.classList.add('off');

  // Få menu til at forsvinde ved at gå ud over dets rammer
  menu.addEventListener('mouseleave', hideMenu);
});

// Manipuler menuens visibilitet
function showMenu(item) {
  menu.style.top = event.clientY - 20 + 'px';
  menu.style.left = event.clientX - 20 + 'px';

// Lyt på valgmulighederne
  addMenuListeners(item);
}

function hideMenu() {
  menu.classList.add('off');
  menu.style.top = '-200%';
  menu.style.left = '-200%';
}


// Lyt efter klik på valgene
function addMenuListeners(item) {
  document.querySelector('#menuCreate').addEventListener('click', createItemLikeThis(item));

  document.querySelector('#menuDelete').addEventListener('click', deleteThisItem(item));
}


// Her er funktioner som skal affyres ved valg
async function createItemLikeThis(item) {
  insertPopupDiv.innerHTML = "";
  popupHeader.innerText = "Opret bog:";

  await insertPopupData();
  e.style.display = "block";

  insertPopUpBook(item);
}

async function deleteThisItem(item) {
  if (confirm("Er du sikker på du vil slette " + item.title + "?")) {
    await fetch("http://localhost:8080/book/" + item.id, {
      method: "DELETE"
    }).catch((reason) => alert(reason));
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

  //authorBook
  const authorMap = new Map();
  item.authors.forEach(author => {
    const span = document.createElement('span');
    span.innerText = author.authorName;
    authorBook.appendChild(span);
    authorMap.set(author.authorName, author);
  });

  //bogserie
  const listSer = await fetchList(bookUrl + "series");
  seriesBook.appendChild(createOption('nullSeries', "Vis alle"));
  listSer.forEach(element => seriesBook.appendChild(createOption(element.bookSeriesId, element.bookSeriesName)));
  if (item.bookSeries != null) {
    const element = document.getElementById(item.bookSeries.bookSeriesName);
    element.selected = true;
  }

  //forlag
  const listPub = await fetchList(bookUrl + "publisher");
  publisherBook.appendChild(createOption('nullPub', "Vis alle"));
  listPub.forEach(element => publisherBook.appendChild(createOption(element.publisherId, element.publisherName)));
  if (item.publisher != null) {
    const element = document.getElementById(item.publisher.publisherName);
    element.selected = true;
  }

  subscriptionBook.selected = true;
  dateBook = new Date();
}
