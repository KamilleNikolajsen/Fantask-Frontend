async function fetchItems(url, body) {

  await fetch(url, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(body)
  }).then((resonse) => resonse.json()).catch((reason) => alert(reason));
}

async function showSearched(event, url, body) {
  event.preventDefault();
  emptyTable();

  const list = fetchItems(url, body);
  /*const list = [{
    type: 'comic',
    author: 'Hans Pedersen',
    title: 'The mystery of men',
    series: 'How to understand humans',
    subseries: 'Men are from Mars and Women are From Venus',
    number: 3
  }, {
    type: 'book',
    author: 'Hans Pedersen',
    title: 'The mystery of men2',
    series: 'How to understand humans2',
    subseries: 'M2en are from Mars and Women are From Venus',
    number: 2
  }]

   */

  if (!list) {
    const errorMessage = await list.text;
    throw new Error(errorMessage);
  }
  await displayTable(list);
}

function emptyTable() {
  document.querySelector('.table').innerHTML = '';
}
