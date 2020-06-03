$(document).ready(function() {

  // header follow, sns 내부 ul slide 처리

  $('.btn-follow')
    .on('mouseover', function() {
      $('.follow-list').slideDown();
    })
    .on('mouseleave', function() {
      $('.follow-list').slideUp();
    });

  $('.btn-sns')
    .on('mouseover', function() {
      $('.sns-list').slideDown();
    })
    .on('mouseleave', function() {
      $('.sns-list').slideUp();
    });

  // header follow, sns 내부 ul 내 li 아이콘 색상 hover 시 변경 처리

  $('header .group .follow-list li img')
    .on('mouseover', function() {
      var nowLi = $(this).attr('src');
      var hoverLi = nowLi.split('_off')[0];
      $(this).stop().attr('src', hoverLi + '_on.png')
    })
    .on('mouseleave', function() {
      var now2Li = $(this).attr('src');
      var hover2Li = now2Li.split('_on')[0];
      $(this).stop().attr('src', hover2Li + '_off.png')
    })

  $('header .group .sns-list li img')
    .on('mouseover', function() {
      var nowLi = $(this).attr('src');
      var hoverLi = nowLi.split('_off')[0];
      $(this).stop().attr('src', hoverLi + '_on.png')
    })
    .on('mouseleave', function() {
      var now2Li = $(this).attr('src');
      var hover2Li = now2Li.split('_on')[0];
      $(this).stop().attr('src', hover2Li + '_off.png')
    })


  // menu 버튼 클릭 시 메뉴 나오게 처리
  $('.btn-menu').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'inline-block'
    })
    $('nav').stop().animate({
      right: '0'
    })
    $('body').addClass('not_scroll');
  })

  // menu 닫기 버튼 클릭 시 메뉴 닫히도록 처리

  $('.btn-close-menu').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none'
    })
    $('nav').stop().animate({
      right: '-57%'
    })
    $('body').removeClass('not_scroll');
  })


  // dark-bg 클릭 시 메뉴 닫히도록 처리
  $('.dark-bg').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none'
    })
    $('nav').stop().animate({
      right: '-57%'
    })
    $('body').removeClass('not_scroll');
  })

  // contents img hover 시 이미지 변경 처리

  $('main .contents-list li')
    .on('mouseover', function() {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];
      if (!hoverLi.match('_on.png')) {
        $(this).find('img').stop().attr('src', hoverLi + '_on.png')
      }
    })
    .on('mouseleave', function() {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.png')) {
        $(this).find('img').stop().attr('src', hover2Li + '_off.png')
      }
    })

  //news img hover 시 이미지 변경 처리
  $('.news-list li')
    .on('mouseover', function() {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];
      if (!hoverLi.match('_on.png')) {
        $(this).find('img').stop().attr('src', hoverLi + '_on.png')
      }
    })
    .on('mouseleave', function() {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.png')) {
        $(this).find('img').stop().attr('src', hover2Li + '_off.png')
      }
    })

  // calendar img hover 시 이미지 변경 처리

  $('.calendar-list li')
    .on('mouseover', function() {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];

      if (!hoverLi.match('_on.jpg')) {
        $(this).find('img').stop().attr('src', hoverLi + '_on.jpg')
      }
    })
    .on('mouseleave', function() {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.jpg')) {
        $(this).find('img').stop().attr('src', hover2Li + '_off.jpg')
      }

    })

  // banner event 2개 3초마다 번갈아가며 출력
  setInterval(function() {
    $('.banner li').fadeToggle('hidden')
  }, 3000)

  // scroll top button

  var $window = $(window),
    $btnTop = $('.top');

  $btnTop.on('click', function() {
    $('html').animate({
      scrollTop: 0
    }, 500);
  });


  $window.scroll(function() {

    // 스크롤에 따른 이미지 등장 fade-up 애니메이션 처리
    if ($window.scrollTop() < 100) {
      $('.contents-list li:nth-child(1)').animate({
        opacity: '1',
        top: '0'
      }, 1000)
      $('.contents-list li:nth-child(2)').delay(500).animate({
        opacity: '1',
        top: '0'
      }, 1000)
    }

    if ($window.scrollTop() > 200) {
      $('.contents-list li:nth-child(3)').animate({
        opacity: '1',
        top: '0'
      }, 1000)
      $('.contents-list li:nth-child(3) img').animate({
        opacity: '1',
        left: '0'
      }, 1000)
    }

    if ($window.scrollTop() > 600) {
      $('.contents-list li:nth-child(4)').animate({
        opacity: '1',
        top: '0'
      }, 1000)
      $('.contents-list li:nth-child(5)').delay(500).animate({
        opacity: '1',
        top: '0'
      }, 1000)
    }

    // scroll 특정 위치가 되면 visual 이미지 변경하기
    if ($window.scrollTop() > 1600) {
      var topVisualImage = $('.visual').css("background-image").replace(/url\("*|"*\)/g, "");

      var bottomVisualImage = topVisualImage.split('1.gif')[0];

      if (!bottomVisualImage.match('2.jpg')) {
        $('.visual').css({
          background: `url(${bottomVisualImage}2.jpg) no-repeat center/cover`
        });
      }
    } else {
      bottomVisualImage = $('.visual').css("background-image").replace(/url\("*|"*\)/g, "");

      topVisualImage = bottomVisualImage.split('2.jpg')[0];

      if (!topVisualImage.match('1.gif')) {
        $('.visual').css({
          background: `url(${topVisualImage}1.gif) no-repeat center/cover`
        });
      }
    }
  });

  $window.trigger('scroll');

})