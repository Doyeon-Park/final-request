let count1 = 0;
let count2 = 0;
let count3 = 0;

const amountbutton1 = document.querySelector("#count-button1");
const amountbutton2 = document.querySelector("#count-button2");
const amountbutton3 = document.querySelector("#count-button3");

function increaseCount1() {
  amountbutton1.textContent = "count is " + count1;
}
function increaseCount2() {
  amountbutton2.textContent = "count is " + count2;
}
function increaseCount3() {
  amountbutton3.textContent = "count is " + count3;
}

amountbutton1.onclick = function () {
  count1++;
  increaseCount1();
};
amountbutton2.onclick = function () {
  count2++;
  increaseCount2();
};

amountbutton3.onclick = function () {
  count3++;
  increaseCount3();
};
