let n1_Counter = 0;
let n2_Counter = 0;
let n3_Counter = 0;

//counter를 3개 넣고 일관성있게 통일해보자. 버튼도 3개로
//id도 일관적이지 않고, kebab case 유지해야한다.
//깔끔하게만 작성할 수 있는 방법에 대해서 고민.

const amt_1 = document.querySelector("#countbox_1");
const amt_2 = document.querySelector("#countbox_2");
const amt_3 = document.querySelector("#countbox_3");

function add_number1() {
  amt_1.textContent = "count is " + n1_Counter;
}
function add_number2() {
  amt_2.textContent = "count is " + n2_Counter;
}
function add_number3() {
  amt_3.textContent = "count is " + n3_Counter;
}

countbox_1.onclick = function () {
  n1_Counter++;
  add_number1();
};

countbox_2.onclick = function () {
  n2_Counter++;
  add_number2();
};

countbox_3.onclick = function () {
  n3_Counter++;
  add_number3();
};
