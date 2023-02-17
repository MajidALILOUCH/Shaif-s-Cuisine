let toggler = document.querySelector(".toggle");
let ul = document.querySelector("header ul");
let close = document.querySelector(".close");

toggler.onclick = function () {
  ul.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};
