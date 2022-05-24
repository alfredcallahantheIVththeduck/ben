$("#searchButton").click(function () {
  var search = $("#searchTerm").val()
  if (typeof (search) == "string" && search.length > 0) {
    window.location.href = "https://www.google.com/search?q=" + search
  }
})

$("#searchTerm").keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    var search = $("#searchTerm").val()
    if (typeof (search) == "string" && search.length > 0) {
      window.location.href = "https://www.google.com/search?q=" + search
    }
  }
});
