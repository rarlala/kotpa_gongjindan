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
  })

  // menu 닫기 버튼 클릭 시 메뉴 닫히도록 처리
  $('.btn-close-menu').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none'
    })
    $('nav').stop().animate({
      right: '-57%'
    })
  })


  // dark-bg 클릭 시 메뉴 닫히도록 처리
  $('.dark-bg').on('click', function() {
    $('.dark-bg').stop().css({
      display: 'none'
    })
    $('nav').stop().animate({
      right: '-57%'
    })
  })

  // contents img hover 시 이미지 변경 처리
  $('main .contents img')
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
})