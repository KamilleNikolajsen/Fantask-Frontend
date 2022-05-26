const e = document.querySelector(".overlayPopup");
const popupDiv = document.querySelector(".popup");
const closeBtn = document.querySelector(".closePopup");
const insertPopupDiv = document.querySelector('.popupInsert');
const popupHeader = document.querySelector('#popupHeader');

console.log("popup");

closeBtn.addEventListener("click", closepopup);

let itemData;

function showpopup(item) {
  e.style.display = "block";
  insertPopupDiv.innerHTML = "";
  popupHeader.innerText = "Indskriv/Redigér bog:";

  itemData = item;


  insertPopupData();
  showItem(item.id);
}

function cancelpopup() {
  if (confirm("Er du sikker på du vil lukke uden at gemme?")) {
    e.style.display = "none";
  }
}

function closepopup() {
  e.style.display = "none";
}


function insertPopupData() {

  //ISBN
  insertPopupDiv.appendChild(createLabel("ISBNInputBook", "ISBN:"));
  inputElement(createInput("text", "ISBNInputBook"), "input");

  //Author
  insertPopupDiv.appendChild(createLabel("authorList", "Forfatter:"));
  insertPopupDiv.appendChild(createDiv("authorList"));

  //series DropDown
  insertPopupDiv.appendChild(createLabel("seriesDropDownBook", "Serie:"));
  insertPopupDiv.appendChild(createSelect("seriesDropDownBook", "dropdown", "seriesDropDown"));

  //number book
  insertPopupDiv.appendChild(createLabel("numberInputBook", "Nr:"));
  inputElement(createInput("text", "numberInputBook"), "input");

  //title book
  insertPopupDiv.appendChild(createLabel("titleInputBook", "Titel:"));
  inputElement(createInput("text", "titleInputBook"), "input");

  //publisher DropDownBook
  insertPopupDiv.appendChild(createLabel("publisherDropDownBook", "Forlag:"));
  insertPopupDiv.appendChild(createSelect("publisherDropDownBook", "dropdown", "publisherDropDownBook"));

  //US price book
  insertPopupDiv.appendChild(createLabel("usPriceInputBook", "U.S. pris:"));
  inputElement(createInput("text", "usPriceInputBook"), "input");

  //DK price book
  insertPopupDiv.appendChild(createLabel("danishPriceInput", "Dansk pris:"));
  inputElement(createInput("text", "danishPriceInput"), "input");

  //Discount price book
  insertPopupDiv.appendChild(createLabel("discountPriceInput", "Tilbuds pris:"));

  const discountPriceDiv = createDiv("discountPriceDiv")
  /*inputElement(createInput("text", "discountPriceInput"), "input");*/
  /*insertPopupDiv.appendChild(createInput("checkbox", "onSaleBook"));*/
  discountPriceDiv.appendChild(createInput("text", "discountPriceInput"));
  discountPriceDiv.appendChild(createInput("checkbox", "onSaleBook"));
  insertPopupDiv.appendChild(discountPriceDiv);

  //Memo
  insertPopupDiv.appendChild(createLabel("memoInputBook", "Memo:"));
  const textArea = document.createElement("textarea");
  textArea.id = "memoInputBook";
  textArea.style.resize = "none";
  textArea.rows = 8;
  textArea.cols = 50;
  insertPopupDiv.appendChild(textArea);

  insertPopupDiv.appendChild(createSpan("categoryAndType", "Genre og Type"));


  //Type DropDown
  insertPopupDiv.appendChild(createLabel("typeDropDownBook", "Type:"));
  insertPopupDiv.appendChild(createSelect("typeDropDownBook", "dropdown", "typeDropDownBook"));

  //Category DropDown
  insertPopupDiv.appendChild(createLabel("categoryDropDownBook", "Kategori:"));
  insertPopupDiv.appendChild(createSelect("categoryDropDownBook", "dropdown", "categoryDropDownBook"));

  //Genre DropDownBook
  insertPopupDiv.appendChild(createLabel("genreDropDownBook", "Genre:"));
  insertPopupDiv.appendChild(createSelect("genreDropDownBook", "dropdown", "genreDropDownBook"));

  //----------- Checkboxes
  insertPopupDiv.appendChild(createSpan("otherInformations", "Andre informationer"));

  //subscription
  insertPopupDiv.appendChild(appentinputAndLabelToDiv(
    createDiv("subscription"),
    createInput("checkbox", "subscriptionBook"),
    createLabel("subscriptionBook", "Abokørsel")));

  //backorder
  insertPopupDiv.appendChild(appentinputAndLabelToDiv(
    createDiv("backorder"),
    createInput("checkbox", "backorderBook"),
    createLabel("backorderBook", "Restordre")));

  //coming
  insertPopupDiv.appendChild(appentinputAndLabelToDiv(
    createDiv("coming"),
    createInput("checkbox", "comingBook"),
    createLabel("comingBook", "Kommende")));

  //outOfStock
  insertPopupDiv.appendChild(
    appentinputAndLabelToDiv(
      createDiv("outOfStock"),
      createInput("checkbox", "outOfStockBook"),
      createLabel("outOfStockBook", "Udsolgt")));

  //unavailable
  insertPopupDiv.appendChild(appentinputAndLabelToDiv(
    createDiv("unavailable"),
    createInput("checkbox", "unavailableBook"),
    createLabel("unavailableBook", "Udgået")));

  //hide
  insertPopupDiv.appendChild(appentinputAndLabelToDiv(
    createDiv("hide"),
    createInput("checkbox", "hideBook"),
    createLabel("hideBook", "Skjul")));

  //Dato
  insertPopupDiv.appendChild(createLabel("dateBook", "Dato:"));
  insertPopupDiv.appendChild(createSpan("dateBook", ""));

  //Cover
  const cover = document.querySelector("#cover");
  cover.innerHTML = "";
  cover.appendChild(appentinputAndLabelToDiv(createDiv("cover"), createInput("checkbox", "coverBook"), createLabel("coverBook", "Cover")));

}

function appentinputAndLabelToDiv(div, label, input) {
  div.appendChild(label);
  div.appendChild(input);

  return div;
}


function inputElement(element, className) {
  element.className = className;
  insertPopupDiv.appendChild(element);
}
