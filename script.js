$(document).ready(function () {


  $("body").css({
    "background-repeat": "no-repeat",
    "background-size": "cover"
  })
});



$(".searchbuttobn").click(function () {
  window.location.href = "https://www.google.com/search?q=" + $(".searchTerm").val()
}
)

$(".searchbuttobn").keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    window.location.href = "https://www.google.com/search?q=" + $(".searchTerm").val()
  }
});