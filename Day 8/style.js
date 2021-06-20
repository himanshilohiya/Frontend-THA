let squares = document.getElementsByClassName("box");

Array.prototype.forEach.call(squares, (el) => {
  el.addEventListener("click", (event) => {
    
    el.classList.toggle("chgclr");
  });
});