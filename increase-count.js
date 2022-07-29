let myCounter = 0;
const increasecount = document.queryElementById("#increase-count");

function addCounter() {
  increasecount.textContent = "count is " + myCounter;
}
addCounter();

increasecount.onclick = function () {
  myCounter++;
  addCounter();
};
