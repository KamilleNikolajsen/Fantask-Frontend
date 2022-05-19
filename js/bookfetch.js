"use strict";

//Lav rigtig url
const urlBookFetch = "http://localhost:8080/book/{id}";
const formPopUp = document.querySelector("#formPopUpBook");
const url = "http://localhost:8080/?category=/?id=";

async function fetchItem(category, id) {
  return await fetch(url + category + id).then(response => response.json()).catch(reason => alert(reason));
}

async function showItem(event) {
  event.preventDefault();
  formPopUp = await fetchItem()
}

