let count1 = 0;
let count2 = 0;
let count3 = 0;

const amountButton1 = document.querySelector("#count-button1");
const amountButton2 = document.querySelector("#count-button2");
const amountButton3 = document.querySelector("#count-button3");

function increaseCount1() {
  amountButton1.textContent = "count is " + count1;
}
function increaseCount2() {
  amountButton2.textContent = "count is " + count2;
}
function increaseCount3() {
  amountButton3.textContent = "count is " + count3;
}

amountButton1.onclick = function () {
  count1++;
  increaseCount1();
};
amountButton2.onclick = function () {
  count2++;
  increaseCount2();
};

amountButton3.onclick = function () {
  count3++;
  increaseCount3();
};
