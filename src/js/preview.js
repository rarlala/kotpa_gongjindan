$(function () {

  // 무한 슬라이드

  infiniteSlide('.view-point dd.view-point-img');

  function infiniteSlide(selector){
    var numBanner = $(selector).find('ul li').length;
    var bannerNow = 0;
    var bannerPrev = 0;
    var bannerNext = 0;
    var widthBox = $(selector).find('>div.img-wrap').innerWidth();
    var widthBar = 0;
    var offsetLeft = 0;
    var minNumSide = 0;
    var timerId = null;
    var isTimerOn = true;
    var timerSpeed = 5000;

    $(selector).find('ul li').each(function(i) {
      widthBar += $(this).outerWidth(true);
      $(this).attr({'data-num': (i + 1)});
    });

    checkMinNumSide();
    showBanner(1);
    
    $(window).on('resize', function() {
        widthBox = $(selector).find('> div.img-wrap').innerWidth();
        checkMinNumSide(bannerNow);
        showBanner(bannerNow);
    });
    
    function showBanner(n) {
        clearTimeout(timerId);
        checkVisibility(n);
        var $bannerNow = null;
        $(selector).find('ul li').each(function() {
            if (Number($(this).attr('data-num')) === n) {
                $bannerNow = $(this);
                return false;
            }
        });
        offsetLeft = -$bannerNow.position().left + (widthBox / 2) - $bannerNow.outerWidth() / 2;
        if (bannerNow === 0) {
            $(selector).find('ul').css({'transition': 'none', 'left': offsetLeft + 'px'});
        } else {
            $(selector).find('ul').css({'transition': 'left 0.5s', 'left': offsetLeft + 'px'});
        }
        $(selector).find('ul li').removeClass('on');
        $bannerNow.addClass('on');
        bannerNow = n;
        bannerPrev = (n - 1) < 1 ? numBanner : n - 1;
        bannerNext = (n + 1) > numBanner ? 1 : n + 1;
        if (isTimerOn === true) {
            timerId = setTimeout(function() {showBanner(bannerNext);}, timerSpeed);
        }
    }
    
    function checkMinNumSide() {
        var widthBox = $(selector).find('> div.img-wrap').innerWidth();
        var sumWidth = 0;
        $(selector).find('ul li').each(function(i) {
            sumWidth += $(this).outerWidth(true);
            if (sumWidth > widthBox) {
                minNumSide = Math.floor((i + 1) / 2);
                return false;
            }
        });
    }
    
    function checkVisibility(n) {
        var $bannerNow = null;
        $(selector).find('ul li').each(function() {
            if (Number($(this).attr('data-num')) === n) {
                $bannerNow = $(this);
                return false;
            }
        });
        for (var i = $bannerNow.prevAll().length; i < minNumSide; i++) {
            $bannerNow.parent().prepend($(selector).find('ul li:last').clone());
            $(selector).find('ul li:last').remove();
            offsetLeft -= $(selector).find('ul li:eq(0)').outerWidth(true);
            $(selector).find('ul').css({'transition': 'none', 'left': offsetLeft + 'px'});
            console.log(offsetLeft);
        }
        for (var i = $bannerNow.nextAll().length; i < minNumSide; i++) {
            $bannerNow.parent().append($(selector).find('ul li:eq(0)').clone());
            $(selector).find('ul li:eq(0)').remove();
            offsetLeft += $(selector).find('ul li:last').outerWidth(true);
            $(selector).find('ul').css({'transition': 'none', 'left': offsetLeft + 'px'});
        }
    }
  }

});
