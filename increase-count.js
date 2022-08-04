let values = [];
const countButtons = document.querySelectorAll(".count-button");

for (let i = 0; i < countButtons.length; i++) {
  values.push(0);

  countButtons[i].onclick = function () {
    countButtons[i].textContent = `count is ${++values[i]}`;
  };
}
