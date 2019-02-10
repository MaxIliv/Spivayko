const $ = require("jquery");
const body = document.getElementsByTagName('body')[0];

const sideNav = (function() {
    const _$nav__ham = $('body').find('.nav__ham');
    const _$container = $('.side-nav');
    const _$backdrop = _$container.find('.side-nav__backdrop'); 
    const _$close = _$container.find('.side-nav__close');
    const _links = _$container.find('.link');

    init();

    function init() {
        _links.each((index, link) => {
            link.addEventListener('click', linkClick);
        });

        _$nav__ham.on('click', show);
        _$close.on('click', close);
        _$backdrop.on('touch click', close);
    }

    function linkClick() {
        close();
    }

    function show() {
        body.classList.add('side-nav--opened');
    }

    function close () {
        body.classList.remove('side-nav--opened');
    }
})();

module.exports = sideNav;