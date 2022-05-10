"use strict";

const urlCrossSearch = "http://localhost/category";
const formCross = document.querySelector('#formSearchCrossCategories');

const inputCrossFTS = document.querySelector('#searchAllFTSInput');
const udgåetCross = document.querySelector('#searchAlludgået');
const udsolgtCross = document.querySelector('#searchAlludsolgte');
const kommendeCross = document.querySelector('#searchAllkommende');
const skjultCross = document.querySelector('#searchAllskjulte');
const tilbudCross = document.querySelector('#searchAlltilbud');
const boxCross = document.querySelector('#searchAllbox');

formCross.addEventListener("submit", (event) => showSearched(event, urlCrossSearch, {}));

async function displayTable(list) {
  // tag table
  const table = document.querySelector('.table');

  // tilføj tabel kolonner
  const tr = createTableRow();
  tr.appendChild(createTableHeader('Ikon'));
  tr.appendChild(createTableHeader('Forfatter'));
  tr.appendChild(createTableHeader('Serie'));
  tr.appendChild(createTableHeader('Underserie'));
  tr.appendChild(createTableHeader('Nummer'));
  tr.appendChild(createTableHeader('Titel'));
  table.appendChild(tr)

  // tilføj varer til hver række
  list.forEach((item) => table.appendChild(createTableRowData(item)));
}

function createTableRowData(item) {
  //Lav række for item og indsæt dets data
  const tableRow = createTableRow();

  tableRow.appendChild(createIcon(item.type));

  tableRow.appendChild(createTableData(item.author));
  tableRow.appendChild(createTableData(item.series));
  tableRow.appendChild(createTableData(item.subseries));
  tableRow.appendChild(createTableData(item.number));
  tableRow.appendChild(createTableData(item.title));

  return tableRow;
}

function createIcon(type) {
  const i = document.createElement('i');

  switch (type) {
    case 'book':
      i.className = 'fa-solid fa-book';
      break;
    case 'film':
      i.className = 'fa-solid fa-video';
      break;
    case 'figure':
      i.className = 'fa-solid fa-palette';
      break;
    case 'comic':
      i.className = 'fa-solid fa-book-open';
      break;
    case 'game':
      i.className = 'fa-solid fa-dice-d20';
      break;
  }

  // Opret td og læg i tag med referance til fontawersome ind i
  const td = document.createElement('td');
  td.appendChild(i);
  return td;
}

function createTableData(data) {
  const tabledata = document.createElement('td');
  tabledata.innerText = data;
  return tabledata;
}

function createTableHeader(name) {
  const th = document.createElement('th');
  th.innerText = name;
  return th;
}

function createTableRow() {
  return document.createElement('tr');
}
