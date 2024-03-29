require('../css/main.scss');
require("slick-carousel");
require('./jquery-extend');
require("./sideNav");

var $ = require("jquery");

var $window = $(window);
var $body = $('body');
var pieces = {
    header: $body.find('header'),
    nav: $body.find('nav.nav'),
    loader: $body.find('#loader')
};

var dotsManager = require('./indication');
require('./modal');
require('./anchors');

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
              centerPadding: '0',
              dots: true
            }
          }
        ]
      };

    _slicks.forEach(function(item) {
        $(item).slick(slickConfig);
    });
};

function initVideo() {
    if ($window.width() < 768) {
        return;
    }

    const video = document.getElementById('worksVideo');

    if (!video) {
        return;
    }
}

function initYear() {
    document.getElementById('year').innerText = new Date().getFullYear();
}