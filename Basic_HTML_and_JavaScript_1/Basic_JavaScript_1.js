alert("JavaScript file loaded");
function My_First_function() {
  var message = "Kiss me, I'm Irish!";
  var paragraph = document.getElementById("Irish");
  paragraph.innerHTML = message;
  paragraph.style.color = "green";
}