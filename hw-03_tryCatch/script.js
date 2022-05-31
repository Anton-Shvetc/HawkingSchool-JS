const Input = document.getElementById("input");
const InputBox = document.getElementsByClassName("inputs");
const Btn = document.getElementById("button");

// let InputValue = Input.value;
let InputValue;

Input.addEventListener("input", function () {
  InputValue = this.value;
  console.log(typeof InputValue);
  try {
    // console.log(typeof InputValue);
    if (!InputValue) {
      throw new Error("Поле пустое");
    } else if (InputValue < 5) {
      throw new Error("Число меньше  5");
    } else if (InputValue > 10) {
      throw new Error("Число больше 10");
    } else   {
      throw new Error("Это не число");
    }
  } catch (e) {
    document.getElementById("result").innerText = e.message;
    console.log(e.message);
  }
});
