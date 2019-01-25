var dotsManager = (function () {
    var _$body = $('body');
    var _$container = _$body.find('.indication-dots');
    var _sections = _$body.find('section');
    var _count = _sections.length;
    var _$dots = [];
    var _activeIndex = 0;
    var _activeClass = 'dots__item--active';
    var _shift = $(window).height() / 4;

    init();

    function init() {
        createIndicators();
        update();
    }

    function createIndicators() {
        for (let i = 0; i < _count; i++) {
            makeDot(_sections[i].id);
        }

        _$container.append(_$dots);
    }

    function makeDot(id) {
        var $wrap = $('<a />', {
            class: 'dots__wrap anchor-link',
            href: '#' + id
        });

        var $dot = $('<div />', {
            class: 'dots__item' 
        });

        $wrap.append($dot)
        _$dots.push($wrap);
    }

    function update() {
        _shift = $(window).height() / 2;
        for (let i = 0; i < _sections.length; i++) {
            const $element = $(_sections[i]);
            
            if($element.isInViewport(_shift)) {
                setActive(i);
                break;
            }
        }
    }

    function setActive(index) {
        deactivate();

        _activeIndex = index;
        _$dots[index].find('.dots__item').addClass(_activeClass);
    }

    function deactivate() {
        _$dots[_activeIndex].find('.dots__item').removeClass(_activeClass);
    }
    return {
        updateDots: update
    }
})();
