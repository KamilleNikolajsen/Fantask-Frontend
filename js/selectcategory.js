const manipulativeSection = document.querySelector('#manipulateSection');

categorydropdrown.addEventListener("change", displaySelectedCategory);

function displaySelectedCategory(event) {
  event.preventDefault();

  const choice = categorydropdrown.options[categorydropdrown.selectedIndex].value;

  switch (choice) {
    case 'book':
      displaySearchFieldBook();
      break;
    case 'comic':
      displaySearchFieldComic();
      break;
    case 'game':
      displaySearchFieldGame();
      break;
    case 'figure':
      displaySearchFieldFigure();
      break;
    case 'film':
      displaySearchFieldFilm();
      break;
  }
}

async function displaySearchFieldBook() {
  // clear memory
  manipulativeSection.innerHTML = '';

  // Insæt felter over boolean for bog
  // indsæt isbn input felt
  const divisbn = appendManipulativeSection('divisbn');
  const label = createLabel('isbn', 'ISBN:');
  const input = createInput('text', 'isbn');
  divisbn.appendChild(label, input);

  // indsæt dropdown forlag
  const divpub = appendManipulativeSection('divpublisher');
  const labelpub = createLabel('publisher', 'Forlag');
  const dropdownpub = createSelect('publisher', 'dropdown', 'publisher');
  // fetch options for dropdown
  const ddpub = await fillDropDown();
  // insæt dropdown forlag ind i div
  divpub.appendChild(labelpub, dropdownpub);
  //indsæt options fra fetch
  dropdownpub.appendChild();
  // indsæt dropdown genre
  const dropdowngenre = appendManipulativeSection('divgenre')
  //fetch drowdown for genre

  //her
}


function displaySearchFieldComic() {

}

function displaySearchFieldGame() {

}

function displaySearchFieldFigure() {

}

function displaySearchFieldFilm() {

}


// Helping to create html elements and appending

function appendManipulativeSection(id) {
  const div = createDiv(id);
  manipulativeSection.appendChild(div);
  return div;
}

function createDiv(id) {
  const div = document.createElement('div');
  div.id = id;
  return div;
}

function createLabel(forId, value) {
  const label = document.querySelector('label');
  label.htmlFor = forId;
  label.value = value;
  return label;
}

function createInput(type, id) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  return input;
}

function createSelect(id, className, name) {
  const select = document.createElement('select');
  select.id = id;
  select.className = className;
  select.name = name;
  return select;
}

function createOption() {

}


function fillDropDown() {
}
