document.addEventListener("DOMContentLoaded", function() {
   var textCase = document.createElement("p");
   var text = document.createTextNode("DOM load success");
   textCase.appendChild(text);
   document.body.appendChild(textCase);
 });