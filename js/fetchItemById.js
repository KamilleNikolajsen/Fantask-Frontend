async function fetchItemById(id) {
  console.log(bookUrl + id);
  return await fetch(bookUrl + id).then(response => response.json()).catch(reason => alert(reason));
}
