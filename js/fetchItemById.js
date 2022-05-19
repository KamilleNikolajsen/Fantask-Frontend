async function fetchItemById(id) {
  return await fetch(url + id).then(response => response.json()).catch(reason => alert(reason));
}
