$(".searchButton").click(function () {
  console.log($(".searchTerm").val())
  window.location.href = "https://www.google.com/search?q=" + $(".searchTerm").val()
}
)

$(".searchTerm").keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    console.log($(".searchTerm").val())
    window.location.href = "https://www.google.com/search?q=" + $(".searchTerm").val()
  }
});
