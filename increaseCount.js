let myCounter = 0;
const increaseCount = document.querySelector("#increaseCount");

function addCounter() {
  increaseCount.textContent = "count is " + myCounter;
} 

addCounter(); /

increaseCount.onclick = function () {
  myCounter++;
  addCounter();
};
