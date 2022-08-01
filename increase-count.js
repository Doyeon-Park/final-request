let CounterA = 0;
let CounterB = 0;
let CounterC = 0;

const amount_1 = document.querySelector("#countbox-1");
const amount_2 = document.querySelector("#countbox-2");
const amount_3 = document.querySelector("#countbox-3");

function AddNumber1() {
  amount_1.textContent = "count is " + CounterA;
}
function AddNumber2() {
  amount_2.textContent = "count is " + CounterB;
}
function AddNumber3() {
  amount_3.textContent = "count is " + CounterC;
}

amount_1.onclick = function () {
  CounterA++;
  AddNumber1();
};
amount_2.onclick = function () {
  CounterB++;
  AddNumber2();
};

amount_3.onclick = function () {
  CounterC++;
  AddNumber3();
};
