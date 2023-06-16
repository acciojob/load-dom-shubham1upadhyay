document.addEventListener("DOMContentLoaded", function() {
   var style = document.createElement("style");
   style.innerHTML = `
     body:before {
       content: "DOM load success";
     }
   `;
   document.head.appendChild(style);
});