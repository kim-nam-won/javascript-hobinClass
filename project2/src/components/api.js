const API_URL = "https://animal-api-two.vercel.app"; // 이미지 url을 변수에 저장

// const $content = document.querySelector("div.content"); //(api 불러오는 코드만 남겨놓기 위해 삭제제)
// let template = []; // (api 불러오는 코드만 남겨놓기 위해 삭제제)

//API
export const request = async () => {
  const res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
