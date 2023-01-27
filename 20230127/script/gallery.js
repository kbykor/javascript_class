

$(function(){
  //1. 변수선언
  let g_navi = $('.g_navi a');
  let g_list = $('.g_list a');
  let total_btn = $('.g_navi li:first-child a');
  let plan_btn = $('.g_navi li:nth-of-type(2) a');
  let de_btn = $('.g_navi li:nth-of-type(3) a');
  let ui_btn = $('.g_navi li:nth-of-type(4) a');
  let codi_btn = $('.g_navi li:last-child a');

  //2.메뉴 클릭 이벤트와 서식적용
  g_navi.click(function(e){
    e.preventDefault();
    $('.g_navi a').removeClass('act');
    $(this).addClass('act');
  });

  //3. 이미지 목록에 마우스 오버시 캡션나오게
  g_list.hover(function(){
    $(this).find('.caption').stop().animate({'bottom':'0px'}, 300);
  }, function(){
    $(this).find('.caption').stop().animate({'bottom':'-40px'}, 300);
  });

  //4. 이미지 클릭시 해당 src값을 가져와서 모달윈도 띄우기
  g_list.click(function(e){
    e.preventDefault();
    let src = $(this).attr('href');
    let title = $(this).find('span').text();
    let index = $(this).parents().index('.'+$('.g_navi a.act').data('cate'));
    let listCount = $('.g_list li.'+$('.g_navi a.act').data('cate')).length;

    let modal = '<div class="modal">'+
    '<div class="center">'+
    '<h3>'+title+'</h3>'+
    '<p>'+$('.g_navi a.act').attr('title')+' <span>'+(index+1)+'/'+listCount+'</span></p>'+
    '<img src="'+src+'" alt="">'+
    '<i class="fas fa-times"></i>'+
    '<i class="fas fa-chevron-left"></i>'+
    '<i class="fas fa-chevron-right"></i>'+
    '</div>'+
    '</div>';

    $('body').append(modal);

    $('.modal i.fa-times').click(function(){
      $('.modal').fadeOut(function(){
        $(this).remove();
      });
    });

    $('.modal i.fa-chevron-right').click(function(){
      index = (listCount) > index+1 ? index+1 : 0;
      changeModal();
    });
    $('.modal i.fa-chevron-left').click(function(){
      index = (0 <= index-1) ? index-1 : listCount-1;
      changeModal();
    });

    function changeModal() {
      let nextData = $('.g_list li.'+$('.g_navi a.act').data('cate')+':eq('+index+') a');
      src = nextData.attr('href');
      title = nextData.find('span').text();

      $('.modal h3').text(title);
      $('.modal img').attr({'src':src});
      $('.modal span').text((index+1)+'/'+listCount);
    }

  });
  
  //5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게하기
  plan_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.plan').fadeIn(); //해당 목록만 보이게
  });
  de_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.design').fadeIn(); //해당 목록만 보이게
  });
  ui_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.ui').fadeIn(); //해당 목록만 보이게
  });
  codi_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.coding').fadeIn(); //해당 목록만 보이게
  });
  total_btn.click(function(){
    $('.total').hide();
    $('.total').fadeIn();
  });
  
});