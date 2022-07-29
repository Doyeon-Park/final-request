let myCounter = 0;
const increaseCount = document.querySelector("#increaseCount");
/*html 문서에서 id를 찾아서 Element를 반환*/

function addCounter() {
  increaseCount.textContent = "count is " + myCounter;
} /* addCounter 라는 함수를 생성 */

addCounter(); /* 함수 호출 */

increaseCount.onclick = function () {
  /*onclick을 이용하여 함수 실행*/
  myCounter++;
  addCounter();
};
