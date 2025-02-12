// text를 매개변수로 받아서 changeText 함수를 호출하는 동적인 코드드
// const $btn = document.getElementById("changeTextButton");
// const $text = document.getElementById("text");

// const changeText = (text) => {
//   $text.textContent = text;
// };

// $btn.addEventListener("click", () => changeText("새로운 텍스트"));

// 클릭시 즉시 changeText 함수가 호출되어 텍스트가 변경되는 코드
const $btn = document.getElementById("changeTextButton");
const $text = document.getElementById("text");

const changeText = () => {
  $text.textContent = "텍스트가 변경되었습니다.";
};

$btn.addEventListener("click", changeText);
