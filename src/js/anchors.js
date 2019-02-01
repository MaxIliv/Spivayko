var anchorScroll = (function() {
    var _$anchors = $('a.anchor-link');
    
    init();

    function init() {
        subscribeEvents();
    }

    function subscribeEvents() {
        _$anchors.on('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        if(e.currentTarget) {
            var $target = $(e.currentTarget.hash);
    
            if($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 65
                }, 1000, function() {});
            }
        }
    };

    return {

    };
})();

module.exports = anchorScroll;