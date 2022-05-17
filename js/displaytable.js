async function showSearched(event, url, body) {
  event.preventDefault();
  emptyTable();

 const list = await fetchItems(url, body);
  console.log(list)
 /*const list = [{
    type: 'comic',
    author: 'Hans Pedersen',
    title: 'The mystery of men',
    series: 'How to understand humans',
    subSeries: 'Men are from Mars and Women are From Venus',
    number: 3
  }, {
    type: 'book',
    author: 'Hans Pedersen',
    title: 'The mystery of men2',
    series: 'How to understand humans2',
    subSeries: 'M2en are from Mars and Women are From Venus',
    number: 2
  }, {
    type: 'figure',
   author: null,
    title: 'megasaurus',
   series: null,
   subSeries: null,
   number: null
  }]

  */

  if (!list) {
    const errorMessage = await list.text;
    throw new Error(errorMessage);
  }
  await displayTable(list);
}

function emptyTable() {
  document.querySelector('#table').innerHTML = '';
}

async function displayTable(list) {
  // tag table
  const table = document.querySelector('#table');

  // tilføj tabel kolonner
  const tr = createTableRow();
  tr.appendChild(createTableHeader('Type'));
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
  tableRow.appendChild(createTableData(item.subSeries));
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
