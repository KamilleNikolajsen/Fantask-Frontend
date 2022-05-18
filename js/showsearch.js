async function showSearched(event, url, body) {
  event.preventDefault();
  emptyTable();

  const list = await fetchItems(url, body);
  console.log(list)

  if (!list) {
    const errorMessage = await list.text;
    throw new Error(errorMessage);
  }
  await displayTable(list);
}
