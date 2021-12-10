let slider1 = document.querySelector(".slide1");
let slider2 = document.querySelector(".slide2");
let slider3 = document.querySelector(".slide3");

let slider = document.querySelector(".slider");
let output1 = document.querySelector("#value1");
let output2 = document.querySelector("#value2");
let output3 = document.querySelector("#value3");

let backArrow = document.querySelector(".back-arrow");

let body = document.querySelector("body");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function () {
  output1.innerHTML = this.value;
  updateColor();
};

slider2.oninput = function () {
  output2.innerHTML = this.value;
  updateColor();
};

slider3.oninput = function () {
  output3.innerHTML = this.value;
  updateColor();
};

function updateColor() {
  let r = slider1.value;
  let g = slider2.value;
  let b = slider3.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  slider1.style.background =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  slider2.style.background =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  slider3.style.background =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  output1.style.color =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  output2.style.color =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  output3.style.color =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";

  backArrow.style.color =
    "rgb(" +
    Math.abs(r - 255) +
    "," +
    Math.abs(g - 255) +
    "," +
    Math.abs(b - 255) +
    ")";
}
