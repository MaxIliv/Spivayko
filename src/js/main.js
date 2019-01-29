var $window = $(window);
var $body = $('body');
var pieces = {
    header: $body.find('header'),
    nav: $body.find('nav.nav'),
    loader: $body.find('#loader')
};

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
        centerPadding: '40px',
        slidesToShow: 3,
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
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
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

/////// A LITLE BIT OF VUE
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
});


var data = {
    todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
    ]
};
var app4 = new Vue({
    el: '#app-4',
    data: data
});


// setInterval(() => {
//     data.todos.push({ text: 'I am a new One' });
// }, 1000);



//////