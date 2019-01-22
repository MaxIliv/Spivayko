var $window = $(window);
var $body = $('body');
var pieces = {
    header: $body.find('header'),
    nav: $body.find('nav.nav'),
    loader: $body.find('#loader')
};

$window.on('scroll resize', function() {
    checkHeader();
    
    updateIndicators();
});

(function() {
    checkHeader();
    hideLoader();
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