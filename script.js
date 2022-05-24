$("#searchButton").click(function () {
  var search = $("#searchTerm").val()
  if (typeof (search) == "string") {
    window.location.href = "https://www.google.com/search?q=" + search
  }
})

$("#searchTerm").keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    console.log($("#searchTerm").val())
    if (typeof (search) == "string") {
      window.location.href = "https://www.google.com/search?q=" + search
    }
  }
});
