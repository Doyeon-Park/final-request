let count1 = 0;
let count2 = 0;
let count3 = 0;

const countButton1 = document.querySelector("#count-button1");
const countButton2 = document.querySelector("#count-button2");
const countButton3 = document.querySelector("#count-button3");

function increaseCount1() {
  countButton1.textContent = "count is " + count1;
}
function increaseCount2() {
  countButton2.textContent = "count is " + count2;
}
function increaseCount3() {
  countButton3.textContent = "count is " + count3;
}

countButton1.onclick = function () {
  count1++;
  increaseCount1();
};
countButton2.onclick = function () {
  count2++;
  increaseCount2();
};

countButton3.onclick = function () {
  count3++;
  increaseCount3();
};
