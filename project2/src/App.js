import TabBar from "./components/TabBar"; // TabBar.js 파일을 불러옵니다.
import Content from "./components/Content"; // Content.js 파일을 불러옵니다.
import { request } from "./components/api"; // api.js 파일을 불러옵니다.

export default function App($app) {
  // App 생성자 함수를 생성합니다.
  // $app은 App 컴포넌트가 렌더링될 DOM 요소입니다.

  this.state = {
    //state 초기값 설정
    currentTab: "all", // 탭 초기값 설정 tabbar 컴포넌트에 전달할 현재 탭 데이터
    photos: [], // 사진 초기값 설정 content 컴포넌트에 전달할 사진 데이터
  };
  const tabbar = new TabBar({
    $app, // App 컴포넌트가 렌더링될 DOM 요소를 전달합니다.
    initialState: "", // 초기값 설정
    oncClick: async (name) => {
      // 클릭 이벤트 설정 변경값을 currentTab에 저장
      this.setTate({
        // 클릭한 탭의 데이터를 state에 저장합니다.
        ...this.setState, // 기존 state를 복사합니다. 스프레드 연산자
        currentTab: name, // 클릭한 탭의 이름을 currentTab에 저장합니다.
        photos: await request(name), // 클릭한 탭의 새로운 사진을 request 이름으로 함수를 불러와 저장합니다.
        // request 함수는 비동기 함수로 async await를 사용하여 데이터를 받아옵니다.
      });
    },
  });
  const content = new Content();

  this.setState = (newState) => {
    // 업데이트 값을 newState로 받습니다.
    this.state = newState; // state를 새로 받은 newState로 업데이트합니다.
    tabbar.setState(this.state.currentTab); // tabbar 컴포넌트에 state를 전달합니다.
    content.setState(this.state.photos); // content 컴포넌트에 state를 전달합니다.
  };

  const init = async () => {
    //웹페이지가 로드되면 실행되는 함수
    try {
      const initialPhotos = await request(); // request 함수를 불러와 initialPhotos에 저장합니다.
      this.setState({
        // state를 initialPhotos로 업데이트합니다.
        ...this.state, // 기존 state를 복사합니다. 스프레드 연산자
        photos: initialPhotos, // initialPhotos를 photos에 저장합니다.
      });
    } catch (err) {
      console.log(err);
    }
  };
  init(); // 웹애플리케이션이 실행될때 init 함수를 실행합니다.
}
