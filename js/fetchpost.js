async function fetchItems(url, body) {

  return await fetch(url, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(body)
  }).then((resonse) => resonse.json()).catch((reason) => alert(reason));
}
