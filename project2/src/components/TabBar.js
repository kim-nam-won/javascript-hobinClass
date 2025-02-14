export default function TabBar({ $app, initialState, onClick }) {
  // TabBar 클래스를 생성합니다. 초기값과 클릭 이벤트를 받습니다.
  this.state = initialState; // 초기값 설정
  this.onClick = onClick; // 클릭 이벤트 설정

  this.$target = document.createElement("div"); // 새로운 div 요소를 생성합니다.
  this.$target.className = "tab-bar"; // div 요소에 클래스 이름을 추가합니다.
  $app.appendChild(this.$target); // $app 요소에 div 요소를 추가합니다.

  this.template = () => {
    let temp = `<div id="all">전체</div><div id="penguin">펭귄</div>
        <div id ="koala">코알라</div><div id ="panda">판다</div>`; // 전체 탭을 추가합니다.
    return temp; // temp를 반환합니다.
  };
  this.render = () => {
    // 렌더링 함수
    this.$target.innerHTML = this.template(); // div 요소의 innerHTML을 template 함수의 반환값으로 설정합니다.
    let $currentTab = document.getElementById(this.state); // 현재 탭을 선택합니다.
    // $currentTab ? ($currentTab.className = "clicked") : ""; // 현재 탭이 존재하면 clicked 클래스를 추가합니다. 없으면 변화없음.
    $currentTab && ($currentTab.className = "clicked"); // && 연산자를 사용하여 현재 탭이 존재하면 clicked 클래스를 추가합니다.

    const $tabBar = this.$target.querySelectorAll("div"); // 모든 div 요소를 tabBar 요소에 담아온다.
    $tabBar.forEach((elm) => {
      elm.addEventListener("click", () => {
        // 각 div 요소에 클릭 이벤트 리스너를 추가합니다.
        this.onClick(elm.id); // 클릭한 div 요소의 id를 onClick 함수에 전달합니다.
      });
    });
  };

  this.setState = (newState) => {
    // state를 변경하는 함수
    this.state = newState; // state를 새로 받은 newState로 업데이트합니다.
    this.render(); // state가 변경되면 렌더링 함수를 다시 호출하여 화면을 업데이트합니다.
  };

  this.render(); // 렌더링 함수를 호출합니다.
}
