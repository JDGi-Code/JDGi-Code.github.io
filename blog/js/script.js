document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
        type           : 'fade',
        heightRatio    : 0.7,
        rewind         : true,
        pagination     : false,
        arrows         : true,
    } );


    var thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth  : 100,
        fixedHeight : 60,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        breakpoints : {
            600: {
                fixedWidth : 60,
                fixedHeight: 44,
            },
        },
    } );


    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
} );