var $window = $(window);
var $body = $('body');
var pieces = {
    header: $body.find('nav.nav'),
    loader: $body.find('.loader')
};

$window.on('scroll', function() {
    checkHeader();
});

(function() {
    checkHeader();
    hideLoader();    
})();

function checkHeader() {
    if($window.scrollTop() > 30) {
        if(pieces.header.hasClass('nav--bg')) {
            return;
        }

        pieces.header.addClass('nav--bg');
        pieces.header.removeClass('nav--top');
    } else {
        if(pieces.header.hasClass('nav--top')) {
            return;
        }

        pieces.header.removeClass('nav--bg');
        pieces.header.addClass('nav--top');
    }
}

function hideLoader() {
    setTimeout(() => pieces.loader.hide(), 400);
}