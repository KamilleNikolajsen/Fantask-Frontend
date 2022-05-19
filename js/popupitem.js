function popupitem(event, id){
  event.preventDefault();

  return window.open("http://localhost:8080/book/?id=" + id,"Popup",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")
}
