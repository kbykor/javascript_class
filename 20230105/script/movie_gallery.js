

let n = 1;
const img_list = document.querySelectorAll('.lnb > li');
const left_btn = document.querySelector('i.fa-angle-left');
const right_btn = document.querySelector('i.fa-angle-right');

document.getElementById('page').innerHTML = n + ' / 16';

img_list.forEach((el, index) => {
  el.onclick=()=>{
    n = index+1 // 인덱스번호에 1을 더하여 1부터 숫자가 나오게..
    changeImg();
  }
});

left_btn.addEventListener('click', function(){
  if(n == 1){
    n=16;
  } else {
    n--;
  }
  changeImg();
});

right_btn.addEventListener('click', function(){
  if(n == 16){
    n=1;
  } else {
    n++;
  }
  changeImg();
});

function changeImg() {
  document.getElementById('page').innerHTML = n + ' / 16';
  document.getElementById('photo').src='./images/movie_image' + n + '.jpg';
}