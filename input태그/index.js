const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

// const $loginBtn = document.querySelector("button");

// 버튼 태그에 이벤트 리스너를 등록
// $loginBtn.addEventListener("click", () => {
//   console.log($userName.value);
//   console.log($password.value);
// });

// userName 수정
$userName.value = "아무개";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
