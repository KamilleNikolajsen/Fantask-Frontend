//https://www.youtube.com/watch?v=7Iadn0Rm2T8

let menu = null;

document.addEventListener('DOMContentLoaded', function () {
  menu = document.querySelector('.menu');
  menu.classList.add('off');

  // reagere kun på klik indenfor ramme som angivet nedenfor - skal laves til tr med item i
  let box = document.querySelector('#boxtest');
  box.addEventListener('contextmenu', showMenu);

  // Få menu til at forsvinde ved at gå ud over dets rammer
  menu.addEventListener('mouseleave', hideMenu);

  // Lyt på valgmulighederne
  addMenuListeners();
});

// Manipuler menuens visibilitet
function showMenu(event) {
  event.preventDefault();

  menu.style.top = event.clientY - 20 + 'px';
  menu.style.left = event.clientX - 20 + 'px';
}

function hideMenu() {
  menu.classList.add('off');
  menu.style.top = '-200%';
  menu.style.left = '-200%';
}


// Lyt efter klik på valgene
function addMenuListeners() {
  document.querySelector('#menuCreate').addEventListener('click', createItemLikeThis(item));

  document.querySelector('#menuDelete').addEventListener('click', deleteThisItem(item));
}


// Her er funktioner som skal affyres ved valg
function createItemLikeThis(item) {

}

function deleteThisItem(item) {

}
