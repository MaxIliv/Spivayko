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
})