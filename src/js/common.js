$(function() {

  // header
  // header follow, sns 내부 ul 내 li 아이콘 색상 hover 시 변경 처리

  $('header .group .follow-list li img')
    .on('mouseover', function() {
      var nowLi = $(this).attr('src');
      var hoverLi = nowLi.split('_off')[0];
      $(this)
        .stop()
        .attr('src', hoverLi + '_on.png');
    })
    .on('mouseleave', function() {
      var now2Li = $(this).attr('src');
      var hover2Li = now2Li.split('_on')[0];
      $(this)
        .stop()
        .attr('src', hover2Li + '_off.png');
    });

  $('header .group .sns-list li img')
    .on('mouseover', function() {
      var nowLi = $(this).attr('src');
      var hoverLi = nowLi.split('_off')[0];
      $(this)
        .stop()
        .attr('src', hoverLi + '_on.png');
    })
    .on('mouseleave', function() {
      var now2Li = $(this).attr('src');
      var hover2Li = now2Li.split('_on')[0];
      $(this)
        .stop()
        .attr('src', hover2Li + '_off.png');
    });

  // header follow, sns 내부 ul slide 처리

  $('.btn-follow')
    .on('mouseover', function() {
      if ($(window).width() > 783) {
        $('.follow-list').slideDown();
      } else {
        $(this).css({
          color: 'gray',
        });
      }
    })
    .on('mouseleave', function() {
      if ($(window).width() > 783) {
        $('.follow-list').slideUp();
      } else {
        $(this).css({
          color: 'black',
        });
      }
    });

  $('.btn-sns')
    .on('mouseover', function() {
      if ($(window).width() > 783) {
        $('.sns-list').slideDown();
      } else {
        $(this).css({
          color: 'gray',
        });
      }
    })
    .on('mouseleave', function() {
      if ($(window).width() > 783) {
        $('.sns-list').slideUp();
      } else {
        $(this).css({
          color: 'black',
        });
      }
    });

  // menu 버튼 클릭 시 메뉴 나오게 처리
  $('.btn-menu').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'inline-block',
    });

    // 메인 페이지와 세부 페이지에 따른 nav 위치가 달라 조건 분기
    if ($('nav').hasClass('detail-page-menu')) {
      $('nav').stop().animate({
        right: '-30px',
      });
    } else {
      $('nav').stop().animate({
        right: '0',
      });
    }

    $('body').addClass('not_scroll');
  });

  // menu 닫기 버튼 클릭 시 메뉴 닫히도록 처리

  $('.btn-close-menu').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none',
    });

    $('nav').stop().animate({
      right: '-100%',
    });

    $('body').removeClass('not_scroll');
  });

  // dark-bg 클릭 시 메뉴 닫히도록 처리
  $('.dark-bg').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none',
    });
    $('nav').stop().animate({
      right: '-100%',
    });
    $('body').removeClass('not_scroll');
  });

  // banner

  // banner event 2개 3초마다 번갈아가며 출력
  setInterval(function() {
    $('.banner li').fadeToggle('hidden');
  }, 3000);

  // scroll top button

  var $window = $(window),
    $btnTop = $('.top');

  $btnTop.on('click', function() {
    $('html').animate({
        scrollTop: 0,
      },
      500
    );
  });

})