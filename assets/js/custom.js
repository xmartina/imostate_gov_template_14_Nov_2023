
$(document).ready(function() {

    $('#imoServices').owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        stagePadding:15,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                center:true,
                stagePadding:0,
                center:true,
            },
            400: {
                items: 1,
                center:true,
                stagePadding:20,
            },
            600: {
                items: 2,
                center:true,
                stagePadding:30,
            },
            1200: {
                items: 3,
                center:true,
                stagePadding:50,
            },
            1500: {
                items: 4,
            }
            
        }
    });

    $('#homeGallery').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        stagePadding:15,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                center:true,
                stagePadding:0,
                center:true,
            },
            400: {
                items: 1,
                center:true,
                stagePadding:20,
            },
            600: {
                items: 2,
                center:true,
                stagePadding:30,
            },
            1200: {
                items: 4,
            }
            
        }
    });
});


