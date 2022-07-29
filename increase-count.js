let myCounter = 0;
const increaseCount = document.querySelector("#increase-count");
increaseCount = document.querySelector("#second-increase-count");

function addCounter() {
  increaseCount.textContent = "count is " + myCounter;
}

addCounter();

increaseCount.onclick = function () {
  myCounter++;
  addCounter();
};
