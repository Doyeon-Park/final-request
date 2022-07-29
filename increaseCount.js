let myCounter = 0;
const increaseCount = document.querySelector("#increaseCount");

function addCounter() {
  increaseCount.textContent = "count is " + myCounter;
}

document.onload = function () {
  addCounter();
};

increaseCount.onclick = function () {
  myCounter++;
  addCounter();
};
