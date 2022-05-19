async function fetchItemById(id) {
  console.log(url + id);
  return await fetch(url + id).then(response => response.json()).catch(reason => alert(reason));
}
