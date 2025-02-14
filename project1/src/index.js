const API_URL = "https://animal-api-two.vercel.app"; // 이미지 url을 변수에 저장

const $content = document.querySelector("div.content"); //div요소 content 클래스를 선택택 content 변수에 담아 저장
let template = []; // template 변수 만들어 전역변수의 배열을 만듬.

const getData = async () => {
  // 비동기 함수 getData 생성
  // fetch 함수를 사용하여 API_URL에 요청을 보냄 async await를 사용하여 비동기 처리
  const res = await fetch(API_URL);
  // res 변수에 응답을 저장
  try {
    if (res) {
      let data = await res.json();
      // res가 존재하면 res.json()을 사용하여 응답을 JSON 형식으로 변환(파싱)하고 data 변수에 저장
      data.photos.forEach((elm) => {
        template += `<img src= ${elm.url}></img>`;
        // data.photos 배열의 요소를 forEach() 배열 메소드를 사용하여 순회하면서
        // template 전역변수에 이미지 주소소를 모두 추가
      });
      $content.innerHTML = template;
      // $content html content 클래스 선택자에 template 이미지 태그 배열을 추가하여 사람들에게 보여지게함.
    }
  } catch (err) {
    console.log(err);
    // res 응답이 없을 경우 에러를 출력
  }
};

getData();
