var imageViewer = (function($){
    var images = [];
    var index = 0;
    var _config = null;

    var _$dialog = $('#imageViewer');
    var _$body = $('body');

    var _dialog = {
        img: _$dialog.find('.image-viewer__image img'),
        description: _$dialog.find('.image-viewer__description'),
        close: _$dialog.find('.modal__close')
    };

    var _shown = false;

    init();

    function init() {
        _dialog.close.on('click', _close);
    }

    function reset() {
        images = [];
        index = 0;
        _config = null;
    }
    

    function setView() {
        if(_config) {
            var imgSrc = _config.src;
            var desc = _config.description;
    
            _dialog.img.attr('src', imgSrc);
            _dialog.description.text(desc);
        }
    }

    function _show(config) {
        if(_shown) return;
        
        reset();

        _shown = true;
        _config = config;

        setView();

        _$body.addClass('modal--opened');
        _$dialog.show();
    }

    function _close() {
        if(!_shown) return;

        _shown = false;

        _$body.removeClass('modal--opened');
        _$dialog.hide();
    }

    return {
        show: _show,
        close: _close
    }

})(jQuery);

$(window).ready(function() {
    var $img = $(document).find('.galery__item img');

    $img.each(function(index, item) {
        $(item).on('click', function(e) {
            imageViewer.show( {
                src: this.src,
                description: this.alt
            });
        })
    })
});