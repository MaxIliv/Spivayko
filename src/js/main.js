var $window = $(window);
var $body = $('body');
var pieces = {
    header: $body.find('header'),
    nav: $body.find('nav.nav'),
    loader: $body.find('#loader')
};

require('./indication');
require('./modal');

$window.on('scroll resize', function() {
    checkHeader();
    
    if($window.width() < 1248) {
        return;
    }

    updateIndicators();
});

(function() {
    checkHeader();
    initSlider();
    hideLoader();
    initVideo();
    initYear();
})();



function updateIndicators() {
    dotsManager && dotsManager.updateDots();
}
function checkHeader() {
    if($window.scrollTop() > 30) {
        if(pieces.header.hasClass('nav--fixed')) {
            return;
        }

        pieces.header.addClass('nav--fixed');
        pieces.nav.removeClass('nav--top');
    } else {
        if(pieces.nav.hasClass('nav--top')) {
            return;
        }

        pieces.header.removeClass('nav--fixed');
        pieces.nav.addClass('nav--top');
    }
}

function hideLoader() {
    setTimeout(() => {
        $body.removeClass('loading');
        pieces.loader.addClass('loader--hide');
    }, 1000);
    setTimeout(() => {
        pieces.loader.hide().removeClass('loader--hide');
    }, 1500);
}

function initSlider() {
    var _slicks = document.querySelectorAll('.slick-init');
    var slickConfig = {
        centerMode: true,
        infinite: true,
        centerPadding: '70px',
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        cssEase: 'ease',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerPadding: '40px',
            }
          }
        ]
      };

    _slicks.forEach(function(item) {
        $(item).slick(slickConfig);
    });
};

function initVideo() {
    if($window.width() > 768) {
        document.getElementById('worksVideo').src = 'static/musicVideo.mp4';
    }
}

function initYear() {
    document.getElementById('year').innerText = new Date().getFullYear();
}