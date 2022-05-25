async function fetchItemById(id) {
  return await fetch(bookUrl + id).then(response => response.json()).catch(reason => alert(reason));
}
