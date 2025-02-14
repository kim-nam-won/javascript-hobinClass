const API_URL = "https://animal-api-two.vercel.app";

const $content = document.querySelector("div.content");
let template = [];

const getData = async (name) => {
  // name을 매개변수로 name에 penguin인자가 들어가가 getData 함수 호출
  let res = await fetch(`${API_URL}/${name}`); // API_URL에 name을 추가하여 펭귄사진만 요청을 보냄냄
  try {
    if (res.ok) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template += `<img src= ${elm.url}></img>`;
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

getData("penguin"); // penguin을 인자로 전달하여 getData 함수 호출 펭귄사진만 데이터로 받기위함.
