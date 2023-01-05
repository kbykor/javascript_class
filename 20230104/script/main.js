//main.js 

//큰사진 변수에 저장
let big_img = document.querySelector('big_img');

//작은사진 변수에 저장
let s_img = document.querySelectorAll('.s_img');

//반복문을 통해 목록안에 썸네일 이미지 클릭시 해당 이미지파일명이 나오도록 한다.
for(let i=0;i<s_img.length;i++){
  console.log(s_img[i]); // 이미지 태그 목록출력
  s_img[i].addEventListener('click', imgChange);
}

function imgChange() {
  let url = this.src;
  url = url.split('/');
  document.getElementById('big_img').querySelector('img').src = './images/'+url[url.length-1];
}