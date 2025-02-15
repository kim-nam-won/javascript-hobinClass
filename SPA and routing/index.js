// 웹페이지 라우팅
// 라우팅이란 웹 페이지 간의 이동 방법을 말한다.
// 웹 사이트 내에서 웹주소를 특정 페이지에 연결하는 과정 변화가 필요한 요소만 변경하는 기술
// 클라이언트 측에서 라우팅을 처리한다.
// 바닐라 자바스크립트로 라우팅을 구현하려면 history API를 사용해야 한다.
// history API는 history 객체를 통해 브라우저의 세션 기록을 조작할 수 있는 API이다.

const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page}입니다.`;
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
  // history 객체에 pushState history의 현재상태를 추가할수있다.
  // history.pushState(state, title, url)
  // state: 상태 객체
  // title: 제목 블라우저 탭에 표시될 제목
  // url: URL 전달함.
};

// popstate 윈도우객체에 있는 매서드로 뒤로가기, 앞으로가기 버튼을 눌렀을때 발생하는 이벤트
window.addEventListener("popstate", (event) => {
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다.`;
  }
});

document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});
document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});
document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

const goBack = () => {
  history.back(); // 히스토리 객체에 back 메서드를 사용하면 뒤로가기 버튼을 누른 것과 같은 효과를 낼 수 있다.
};

const goForward = () => {
  history.forward(); // 히스토리 객체에 forward 메서드를 사용하면 앞으로 가기 버튼을 누른 것과 같은 효과를 낼 수 있다.
};
document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForward);
