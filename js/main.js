$('.owl-carousel').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0:{
            items: 1,
            margin: 25,
            stagePadding: 85
        },
        360:{
            items: 1,
            margin: 25,
            stagePadding: 95
        },
        440:{
            items: 1,
            margin: 25,
            stagePadding: 110
        },
        480:{
            items: 1,
            margin: 25,
            stagePadding: 120
        },
        520:{
            items: 1,
            margin: 25,
            stagePadding: 130
        },
        576:{
            margin: 0,
            stagePadding: 0,
            items: 4
        }
    }
});