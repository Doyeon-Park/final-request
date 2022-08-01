let myCounter = 0;
let yourCounter = 0;

const increaseCount = document.querySelector("#increase-count");
const upCount = document.querySelector("#upCount");

function addCounter1() {
  increaseCount.textContent = "count is " + myCounter;
}
function addCounter2() {
  upCount.textContent = "count is " + yourCounter;
}

addCounter1();
addCounter2();

increaseCount.onclick = function () {
  myCounter++;
  addCounter1();
};

upCount.onclick = function () {
  yourCounter++;
  addCounter2();
};
