function popupitem(event, url, body){
  event.preventDefault();

  const book = body;
  return window.open("https://www.w3schools.com","Popup",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")
}

let url;

function changeurl(type){

  //Lav rigtig url
  switch (type) {
    case 'book':
      return url = "http://localhost:8080/book/{id}";
    case 'film':
      return url = "http://localhost:8080/film/{id}";
    case 'figure':
      return url = "http://localhost:8080/figure/{id}";
    case 'comic':
      return url = "http://localhost:8080/comic/{id}";
    case 'game':
      return url = "http://localhost:8080/game/{id}";
  }
}
