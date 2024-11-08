//** popup
$('#popup').draggable();
$('.btn_popup_close').click(function(){
   $('#popup').hide();
})

//** header language
$('.lang_wrap button').click(function() {
   $('.lang_wrap button , .lang_wrap ul').toggleClass('open');
})

//** header 전체메뉴
$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'});
   $('html , body').css({'overflow' : 'hidden'})
   $('header .search_popup').hide();
})
$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide();
   $('html , body').css({'overflow' : 'auto'})
   $('header').removeClass('on')
})

//** header search 검색창
$('header .btn_search_open').click(function() {
   $('header').toggleClass('on')
   //.search_popup을 보였다 안 보였다
   $('header .search_popup').toggle()
})

$(window).scroll(function() { //스크롤링이 될 때마다
   if($(window).scrollTop() >= 10) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
})

$('#gnb .dep1>li').hover(function() { //over
   $(this).children('.dep2_wrap').stop().slideDown();
   // $(this).children('.dep2_wrap').stop().show();
   $('header').addClass('on')
}, function() { //out
   $('#gnb .dep2_wrap').stop().slideUp();
   $('header').removeClass('on')
});

let s = false;
$('.family_wrap>button').click(function() {
   $('.family_wrap>ul').slideToggle()
   console.log(s)
})

const mainSwiper = new Swiper ('.main_swiper', {
   effect: 'fade',
   loop: true,
   autoplay: {
      delay: 5000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
   }
})

//** progress_bar 애니메이션
const $progressBar = $('.progress .bar');
function startProgressBar() {
   $progressBar.css('animation-play-state', 'running');
}
function stopProgressBar() {
   $progressBar.css('animation-play-state', 'paused');
}
$('.swiper_content .auto-play').click(function() {
   $(this).hide()
   $('.swiper_content .auto-stop').show();
   mainSwiper.autoplay.start();
   startProgressBar();
})
$('.swiper_content .auto-stop').click(function() {
   $(this).hide()
   $('.swiper_content .auto-play').show();
   mainSwiper.autoplay.stop();
   stopProgressBar();
})

//.progress .bar 초기화
function resetProgressBar() {
   $progressBar.css('animation', 'none');
   void $progressBar[0].offsetWidth;
   $progressBar.css('animation', '')
   $progressBar.css('animation-play-state', 'running');
}
$('.swiper-btn-next').on('click', resetProgressBar);
$('.swiper-btn-prev').on('click', resetProgressBar);

//** faculty
const facultySwiper = new Swiper ('.faculty_swiper',{
   spaceBetween: 40,
   slidesPerView: 'auto',
   autoplay: {
      delay: 0,
   },
   speed: 4000,
   loop: true,
})

//** news
$('.news_wrap .tabs li').click(function() {

   $('.news_wrap .tabs li').not(this).removeClass('active')
   $(this).addClass('active');

   //* index를 활용 (우선 활용)
   //const i = $(this).index(); //0~4 (인덱스는 0부터 시작)
   // $('.news_wrap .content_box').hide();0
   // $('.news_wrap .content_box').eq(i).show()

   //$(this).attr('data-news')//이벤트 발생한 요소의 'data-news' 속성을 get
   const tabName = $(this).attr('data-news');
   console.log(tabName)

   // 변수 tabName의 값을 content_box의 클래스로 찾기
   // index가 동일하지 않은 경우
   $('.news_wrap .content_box').not('.' + tabName).hide()
   $('.news_wrap .' + tabName).show()
})

$('.sub .lnb_wrap button').click(function() {
   //클릭한 버튼의 동생 ul
   let nextEl = $(this).next()

   //동생 ul의 css 속성중 display가 none과 같다면
   if(nextEl.css('display') == 'none') {
      nextEl.css('display', 'flex')
      $('.sub .lnb_wrap ul').not(nextEl).css('display', 'none')
      $(this).children('i').css('transform', 'rotate(180deg)')
   }
   else {
      $('.sub .lnb_wrap ul').css('display', 'none')
   }
})

//*** 섹션마다 스크롤 시 fade 효과
$('.fade_wrap').css({
   opacity: 0,
   transform: 'translateY(30px)',
   transition: 'opacity 0.6s ease, transform 0.6s ease'
});
$(window).on('scroll', function() {
   $('.fade_wrap').each(function() {
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      let offsetTop = $(this).offset().top;

      //화면의 30% 지점에서 보이도록
      if (scrollTop + windowHeight * 0.7 > offsetTop) {
         $(this).css({
            opacity: 1,
            transform: 'translateY(0)' //원래 위치로 이동
         });
      }
   });
});

//***** 보류
// let pos = ['main_visual', 'earth_wrap', 'course_wrap', 'faculty_wrap', 'news_wrap']
// $(window).scroll(function() {
//    for(let i = 0; i < pos.length; i++) {
//       if($(window).scrollTop() >= $(`.${pos[i]}`).offset().top - 120) {
//          $('.main_nav a').removeClass('click')
//          $('.main_nav a').eq(i).addClass('click')
//       }
//    }
// })

// $('.main_nav a').click(function() {
//    $(this).addClass('click')

//    //Move
//    let n = $(this).index()
//    $('html').animate({
//       scrollTop: $(`.${pos[n]}`).offset().top - 120
//    })
// })