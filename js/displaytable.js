async function displayTable(list) {
  // tag table
  const table = document.querySelector('#table');

  // tilføj tabel kolonner til crossSearch
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


//Lav række for item og indsæt dets data
function createTableRowData(item) {
  const tableRow = createTableRow();

  //Jeg har tilføjet id her, da det skal sendes med ned i createIcon, hvis det er der eventlisteneren skal være
  //Men det kræver også at vi får lavet det så et item ideholder et id
  //Jeg har udkommenteret alt det jeg har prøvet mig med uden at det lykkes...
  tableRow.appendChild(createIcon(item.type, item.id));

  tableRow.appendChild(createTableData(item.author));
  tableRow.appendChild(createTableData(item.series));
  tableRow.appendChild(createTableData(item.subSeries));
  tableRow.appendChild(createTableData(item.number));
  tableRow.appendChild(createTableData(item.title));

  return tableRow;
}


// Lav ikon på baggrund af type (i tag)
function createIcon(type, id) {
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
  const td = document.createElement("Button");
  td.appendChild(i);

  //Denne er hvad jeg senest har forsøgt mig med, men mangler id
  td.addEventListener('click', showItem(id));
  td.target = "_blank";


  //td.setAttribute("onclick", "popupitem");
  //td.appendChild(onclick(popupitem()))
  //td.href = "https://www.w3schools.com";
  //td.target = "popup";
  //td.onclick = window.open("https://www.w3schools.com","popup",
    //"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"); return false;
  //td.click(popupitem());
  //th.href = showItem()
  //td.href = "https://www.w3schools.com";
  //td.href = "http://localhost:8080/book/1";
  //td.onclick = window.open("https://www.w3schools.com", Popup,
    //"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  return td;
}

function createTableData(data) {
  const tabledata = document.createElement('td');
  tabledata.innerText = data;
  return tabledata;
}

function createTableHeader(name) {
  const th = document.createElement('td');
  th.innerText = name;
  return th;
}

function createTableRow() {
  return document.createElement('tr');
}
function emptyTable() {
  document.querySelector('#table').innerHTML = '';
}

