const API_URL = "https://animal-api-two.vercel.app"; // 이미지 url을 변수에 저장

// const $content = document.querySelector("div.content"); //(api 불러오는 코드만 남겨놓기 위해 삭제제)
// let template = []; // (api 불러오는 코드만 남겨놓기 위해 삭제제)

//API
export const request = async (name) => {
  const res = await fetch(name ? `${API_URL}/${name}` : API_URL); // fetch 함수를 사용하여 API_URL을 호출합니다. name이 있으면 name을 호출합니다. 없으면 API_URL을 호출합니다.
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
