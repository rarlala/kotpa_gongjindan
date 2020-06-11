$(function () {
  var clickNum = 0;

  var List = $('.view-point-img').find('ul'),
    firstLi = $('.view-point-img').find('ul li:first-child').clone();

  List.append(firstLi);

  function SlideImg() {
    if (clickNum === 4) {
      $('.view-point-img ul').css({
        'margin-left': '0',
      });
      clickNum = 0;
    } else {
      $('.view-point-img')
        .find('ul')
        .animate({
          'margin-left': -100 * clickNum + '%',
        });
      clickNum++;
    }
  }

  setInterval(SlideImg, 5000);
});
