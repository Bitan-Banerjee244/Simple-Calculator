let buttons = document.querySelectorAll(".bodyCAL .button");
let input = document.querySelector("input");
let equal = document.querySelector(".button16");
input.value = "";
document.querySelector("button").addEventListener("click", () => {
  input.value = "";
});
document.querySelector(".delete").addEventListener("click", () => {
  let number = input.value;
  console.log(number.toString().slice(0, -1));
  input.value = number.toString().slice(0, -1);
});

var answer = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "=") {
      equal.addEventListener("click", () => {
        console.log(eval(input.value));
        input.value = eval(input.value);
      });
    } else {
      input.value += btn.innerHTML;
      console.log(input.value);
    }
  });
});
