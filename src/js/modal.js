var modal = (function(){
    var _$container = null;
    var _isShown = null;

    function _toggleBodyScroll() {
        $body.toggleClass('modal--opened');
    }

    function _show(id) {
        if(_isShown) return;
        
        _$container = $body.find('#' +id);
        _$container.find('.modal__close').off().on('click', _close);
        
        _toggleBodyScroll();
        
        _isShown = true;
        _$container.show();
    }

    function _close() {
        if(!_isShown) return;

        _toggleBodyScroll();
        _$container.hide();
        _$container = null;
        _isShown = false;
    }

    return {
        show: _show,
        _close: close
    };
})();

(function() {
    var modalListeners = $body.find('.modal-open');

    modalListeners.click(function(e) {
        var target = e.currentTarget;
        var id = target.getAttribute('data-modal');

        modal.show(id);
    });
})();