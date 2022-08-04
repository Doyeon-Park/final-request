const COUNT = 5;

let countButtons = [];
let values = [];

for (let i = 0; i < COUNT; i++) {
  values.push(0);
  const button = document.querySelector("#count-button-" + (i + 1));
  button.onclick = function () {
    button.textContent = `count is ${++values[i]}`;
  };

  countButtons.push(button);
}
