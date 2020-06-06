$(function () {
  // contents img hover 시 이미지 변경 처리

  $('main .contents-list li')
    .on('mouseover', function () {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];
      if (!hoverLi.match('_on.png')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hoverLi + '_on.png');
      }
    })
    .on('mouseleave', function () {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.png')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hover2Li + '_off.png');
      }
    });

  //news img hover 시 이미지 변경 처리
  $('.news-list li')
    .on('mouseover', function () {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];
      if (!hoverLi.match('_on.png')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hoverLi + '_on.png');
      }
    })
    .on('mouseleave', function () {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.png')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hover2Li + '_off.png');
      }
    });

  // calendar img hover 시 이미지 변경 처리

  $('.calendar-list li')
    .on('mouseover', function () {
      var nowLi = $(this).find('img').attr('src');
      var hoverLi = nowLi.split('_off')[0];

      if (!hoverLi.match('_on.jpg')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hoverLi + '_on.jpg');
      }
    })
    .on('mouseleave', function () {
      var now2Li = $(this).find('img').attr('src');
      var hover2Li = now2Li.split('_on')[0];
      if (!hover2Li.match('_off.jpg')) {
        $(this)
          .find('img')
          .stop()
          .attr('src', hover2Li + '_off.jpg');
      }
    });

  var $window = $(window);

  $window.scroll(function () {
    // 스크롤에 따른 이미지 등장 fade-up 애니메이션 처리
    var scrollPosition = $(window).height() + $(window).scrollTop(),
      scrollNowPosition = $(window).scrollTop(),
      contentsListLineOnePosition = $('.contents-list li:nth-child(1)').offset().top,
      contentsListLineTwoPosition = $('.contents-list li:nth-child(3)').offset().top,
      contentsListLineThreePosition = $('.contents-list li:nth-child(4)').offset().top,
      newsPosition = $('.news').offset().top - 100;

    if (scrollPosition > contentsListLineOnePosition) {
      $('.contents-list li:nth-child(1)').animate(
        {
          opacity: '1',
          top: '0',
        },
        1000
      );
      $('.contents-list li:nth-child(2)').delay(500).animate(
        {
          opacity: '1',
          top: '0',
        },
        1000
      );
    }

    if (scrollPosition > contentsListLineTwoPosition) {
      $('.contents-list li:nth-child(3)').animate(
        {
          opacity: '1',
          top: '0',
        },
        1000
      );
      $('.contents-list li:nth-child(3) img').animate(
        {
          opacity: '1',
          left: '0',
        },
        1000
      );
    }

    if (scrollPosition > contentsListLineThreePosition) {
      $('.contents-list li:nth-child(4)').animate(
        {
          opacity: '1',
          top: '0',
        },
        1000
      );
      $('.contents-list li:nth-child(5)').delay(500).animate(
        {
          opacity: '1',
          top: '0',
        },
        1000
      );
    }

    // scroll 특정 위치가 되면 visual 이미지 변경하기
    if (scrollNowPosition > newsPosition) {
      var topVisualImage = $('.visual')
        .css('background-image')
        .replace(/url\("*|"*\)/g, '');

      var bottomVisualImage = topVisualImage.split('1.gif')[0];

      $('.visual-area').css({
        background: '#eec06a',
      });

      if (!bottomVisualImage.match('2.jpg')) {
        $('.visual').css({
          background: `url(${bottomVisualImage}2.jpg) no-repeat top/contain`,
        });
      }
    } else {
      bottomVisualImage = $('.visual')
        .css('background-image')
        .replace(/url\("*|"*\)/g, '');

      topVisualImage = bottomVisualImage.split('2.jpg')[0];

      $('.visual-area').css({
        background: '#67b274',
      });

      if (!topVisualImage.match('1.gif')) {
        $('.visual').css({
          background: `url(${topVisualImage}1.gif) no-repeat top/contain`,
        });
      }
    }
  });

  $window.trigger('scroll');
});
