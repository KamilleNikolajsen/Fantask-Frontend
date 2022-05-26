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
    case 'all':
      window.location.reload();
      break;
  }
}

async function displaySearchFieldBook() {
  // clear memory
  manipulativeSection.innerHTML = '';

  // Insæt felter over boolean for bog
  // Indsæt serie input felt
  const seriesDiv = createDiv('seriesDiv');
  const labelseries = createLabel('series', 'Serie:');
  const inputseries= createInput('text', 'series');
  inputseries.className = 'inputsearch';
  seriesDiv.appendChild(labelseries);
  seriesDiv.appendChild(inputseries);
  manipulativeSection.appendChild(seriesDiv);

  //Indsæt titel
  const titleDiv = createDiv('titleDiv');
  const labeltitle = createLabel('title', 'Titel:');
  const inputtitle= createInput('text', 'title');
  inputtitle.className = 'inputsearch';
  titleDiv.appendChild(labeltitle);
  titleDiv.appendChild(inputtitle);
  manipulativeSection.appendChild(titleDiv);

  // indsæt isbn input felt
  const isbnDiv = createDiv('isbnDiv');
  const label = createLabel('isbn', 'ISBN:');
  const input = createInput('text', 'isbn');
  input.className = 'inputsearch';
  isbnDiv.appendChild(label);
  isbnDiv.appendChild(input);
  manipulativeSection.appendChild(isbnDiv);

  // indsæt dropdown forlag
  const pubDiv = createDiv('pubDiv');
  const labelpub = createLabel('publisher', 'Forlag:');
  const dropdownpub = createSelect('publisher', 'dropdownselectsearchtype', 'publisher');
  // fetch options for dropdown
  const publisherlist = await fetchList("http://localhost:8080/book/publisher");
  dropdownpub.appendChild(createOption('null', ''))
  publisherlist.forEach(publisher => dropdownpub.appendChild(createOption(publisher.publisherId, publisher.publisherName)));
  // insæt dropdown forlag ind i div
  pubDiv.appendChild(labelpub);
  pubDiv.appendChild(dropdownpub);
  manipulativeSection.appendChild(pubDiv);


  // indsæt dropdown genre
  const genreDiv = createDiv('genreDiv');
  const labelgenre = createLabel('genre', 'Genre:');
  const dropdowngenre = createSelect('genre', 'dropdownselectsearchtype', 'genre');
  // fetch options for dropdown
  const genrelist = await fetchList("http://localhost:8080/book/genre");
  dropdowngenre.appendChild(createOption('null', ''))
  genrelist.forEach(genre => dropdowngenre.appendChild(createOption(genre.bookGenreId, genre.bookGenreName)));
  // insæt dropdown forlag ind i div
  genreDiv.appendChild(labelgenre);
  genreDiv.appendChild(dropdowngenre);
  manipulativeSection.appendChild(genreDiv);
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
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = value;
  return label;
}

function createSpan(id, value) {
  const span = document.createElement("span");
  span.id = id;
  span.textContent = value;
  return span;
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

function createOption(id, name) {
  const option = document.createElement('option');
  option.value = id;
  option.id = name;
  option.textContent = name;
  return option;
}

