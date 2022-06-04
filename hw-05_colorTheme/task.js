const maxChars = 6;
const input = document.querySelector(".input");
const button = document.getElementById("button");

document.body.style.backgroundColor = `#${localStorage.getItem("background")}`;

input.addEventListener("keydown", function () {
  if (this.value.length >= maxChars) {
    this.value = this.value.substr(0, maxChars);
  }
});

input.addEventListener("keyup", function () {
  if (this.value.length >= maxChars) {
    this.value = this.value.substr(0, maxChars);
  }
});

button.addEventListener("click", () => {
  if (localStorage.getItem("background")) {
    localStorage.background = input.value;
    document.body.style.backgroundColor = `#${input.value}`;
  } else {
    localStorage.setItem("background", input.value);
  }
});
