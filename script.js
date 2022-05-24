$(document).ready(function() {


$("body").css({
  "background-repeat": "no-repeat",
  "background-size": "cover" })
});



$(".searchbuttobn").click(function(){
window.location.href =  "https://www.google.com/search?q=" + $(".searchTerm").text
}
)