var $ = require("jquery");

$.fn.isInViewport = function(shift) {
    shift = shift || 0;
    
    var elementTop = $(this).offset().top - shift;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};