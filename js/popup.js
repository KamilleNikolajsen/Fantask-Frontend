const e = document.querySelector(".overlayPopup");
const popupDiv = document.querySelector(".popup");
const closeBtn = document.querySelector(".closePopup");

console.log("popup");

closeBtn.addEventListener("click", closepopup);

let itemData;

function showpopup(item) {
  e.style.display = "block";

  itemData = item;

  insertPopupData();
  showItem(item.id);
}

function closepopup() {
  /*if (confirm("Er du sikker på du vil lukke uden at gemme?")) {
    e.style.display = "none";
  }*/

  e.style.display = "none";
}


function insertPopupData() {

  //ISBN
  popupDiv.appendChild(createLabel("ISBNInputBook", "ISBN:"));
  inputElement(createInput("text", "ISBNInputBook"), "input");

  //Author
  popupDiv.appendChild(createLabel("authorList", "Forfatter:"));
  popupDiv.appendChild(createDiv("authorList"));

  //series DropDown
  popupDiv.appendChild(createLabel("seriesDropDownBook", "Serie:"));
  popupDiv.appendChild(createSelect("seriesDropDownBook", "dropdown", "seriesDropDown"));

  //number book
  popupDiv.appendChild(createLabel("numberInputBook", "Nr:"));
  inputElement(createInput("text", "numberInputBook"), "input");

  //title book
  popupDiv.appendChild(createLabel("titleInputBook", "Titel:"));
  inputElement(createInput("text", "titleInputBook"), "input");

  //publisher DropDownBook
  popupDiv.appendChild(createLabel("publisherDropDownBook", "Forlag:"));
  popupDiv.appendChild(createSelect("publisherDropDownBook", "dropdown", "publisherDropDownBook"));

  //US price book
  popupDiv.appendChild(createLabel("usPriceInputBook", "U.S. pris:"));
  inputElement(createInput("text", "usPriceInputBook"), "input");

  //DK price book
  popupDiv.appendChild(createLabel("danishPriceInput", "Dansk pris:"));
  inputElement(createInput("text", "danishPriceInput"), "input");

  //Discount price book
  popupDiv.appendChild(createLabel("discountPriceInput", "Tilbuds pris:"));
  inputElement(createInput("text", "discountPriceInput"), "input");

  //Memo
  popupDiv.appendChild(createLabel("memoInputBook", "Memo:"));
  const textArea = document.createElement("textarea");
  textArea.id = "memoInputBook";
  textArea.className = "input";
  textArea.style.resize = "none";
  textArea.style.rows = "5";
  textArea.style.cols = "50";
  popupDiv.appendChild(textArea);

  //Type DropDown
  popupDiv.appendChild(createLabel("typeDropDownBook", "Type:"));
  popupDiv.appendChild(createSelect("typeDropDownBook", "dropdown", "typeDropDownBook"));

  //Category DropDown
  popupDiv.appendChild(createLabel("categoryDropDownBook", "Kategori:"));
  popupDiv.appendChild(createSelect("categoryDropDownBook", "dropdown", "categoryDropDownBook"));

  //Genre DropDownBook
  popupDiv.appendChild(createLabel("genreDropDownBook", "Genre:"));
  popupDiv.appendChild(createSelect("genreDropDownBook", "dropdown", "genreDropDownBook"));

  //----------- Checkboxes

  //outOfStock
  appentinputAndLabelToDiv(createDiv("outOfStock"), createInput("checkbox", "outOfStockBook"), createLabel("outOfStockBook", "Udsolgt"));

  //unavailable
  appentinputAndLabelToDiv(createDiv("unavailable"), createInput("checkbox", "unavailableBook"), createLabel("unavailableBook", "Udgået"));

  //subscription
  appentinputAndLabelToDiv(createDiv("subscription"), createInput("checkbox", "subscriptionBook"), createLabel("subscriptionBook", "Abokørsel"));

  //backorder
  appentinputAndLabelToDiv(createDiv("backorder"), createInput("checkbox", "backorderBook"), createLabel("backorderBook", "Restordre"));

  //coming
  appentinputAndLabelToDiv(createDiv("coming"), createInput("checkbox", "comingBook"), createLabel("comingBook", "Kommende"));

  //onSale
  appentinputAndLabelToDiv(createDiv("coming"), createInput("checkbox", "onSaleBook"), createLabel("onSaleBook", "Tilbud"));

  //hide
  appentinputAndLabelToDiv(createDiv("hide"), createInput("checkbox", "hideBook"), createLabel("hideBook", "Skjul"));

  //Cover
  appentinputAndLabelToDiv(createDiv("cover"), createInput("checkbox", "coverBook"), createLabel("coverBook", "Cover"));

  popupDiv.appendChild(createLabel("dateBook", "Dato:"));
  popupDiv.appendChild(createSpan("dateBook", ""));

}

function appentinputAndLabelToDiv(div, label, input) {
  div.appendChild(label);
  div.appendChild(input);

  popupDiv.appendChild(div);
}


function inputElement(element, className) {
  element.className = className;
  popupDiv.appendChild(element);
}
