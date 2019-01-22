(function() {
    $('a.anchor-link').on('click', smoothScroll);

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
})();