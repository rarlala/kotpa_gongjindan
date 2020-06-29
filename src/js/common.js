$(function () {
  preventDefaultAnchor();

  function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function (e) {
      e.preventDefault();
    });
  }

  // header
  // header follow, sns 내부 ul 내 li 아이콘 색상 hover 시 변경 처리

  imgChange('header .group .follow-list li img');
  imgChange('header .group .sns-list li img');

  function imgChange(selector) {
    $(selector)
      .on('mouseenter focus', function () {
        var nowLi = $(this).attr('src');
        var hoverLi = nowLi.split('_off')[0];
        $(this)
          .stop()
          .attr('src', hoverLi + '_on.png');
      })
      .on('mouseleave focusout', function () {
        var now2Li = $(this).attr('src');
        var hover2Li = now2Li.split('_on')[0];
        $(this)
          .stop()
          .attr('src', hover2Li + '_off.png');
      });
  }

  // header follow, sns 내부 ul slide 처리

  headerSlideDown('.btn-follow', '.follow-list');
  headerSlideDown('.btn-sns', '.sns-list');

  function headerSlideDown(selector, list) {
    $(selector)
      .on('mouseenter focus', function () {
        if ($(window).width() > 783) {
          $(list).slideDown();
        } else {
          $(this).css({
            color: 'gray',
          });
        }
      })
      .on('mouseleave focusout', function () {
        if ($(window).width() > 783) {
          $(list).slideUp();
        } else {
          $(this).css({
            color: 'black',
          });
        }
      });
  }

  // menu 버튼 클릭 시 메뉴 나오게 처리
  $('.btn-menu').on('click focus', function () {
    $('.dark-bg').css({
      display: 'inline-block',
    });

    $('.header-box .logo').css({
      'z-index': '10',
    });

    // 메인 페이지와 세부 페이지에 따른 nav 위치가 달라 조건 분기
    if ($('nav').hasClass('detail-page-menu')) {
      $('nav').stop(true).animate({
        right: '-30px',
      });
    } else {
      $('nav').stop(true).animate({
        right: '0',
      });
    }

    $('body').addClass('not_scroll');
  });

  // menu 닫기 버튼 클릭 시 메뉴 닫히도록 처리

  $('.btn-close-menu').on('click', function () {
    $('.dark-bg').stop().css({
      display: 'none',
    });

    $('.header-box .logo').css({
      'z-index': '20',
    });

    $('nav').stop().animate({
      right: '-120%',
    });

    $('body').removeClass('not_scroll');
  });

  // dark-bg 클릭 시 메뉴 닫히도록 처리
  $('.dark-bg').on('click', function () {
    $('.dark-bg').stop().css({
      display: 'none',
    });
    $('.header-box .logo').css({
      'z-index': '20',
    });
    $('nav').stop().animate({
      right: '-120%',
    });
    $('body').removeClass('not_scroll');
  });

  // banner

  // banner event 2개 3초마다 번갈아가며 출력
  setInterval(function () {
    $('.banner li').fadeToggle('hidden');
  }, 3000);

  // scroll top button

  var $btnTop = $('.top');

  $btnTop.on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
});
