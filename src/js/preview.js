$(function () {
  var clickNum = 1;

  function SlideImg() {
    var imgWidth = $('.view-point-img').width();

    if (clickNum === 3) {
      $('.view-point-img').find('ul').animate({
        'margin-left': 0,
      });
      clickNum = 1;
    } else {
      $('.view-point-img')
        .find('ul')
        .animate({
          'margin-left': -(imgWidth * clickNum),
        });
      clickNum += 1;
    }
  }

  setInterval(SlideImg, 5000);
});
