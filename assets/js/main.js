jQuery(document).ready(function ($) {
    let btns = $("#servicos .button-group button");

    btns.click(function (e) {
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");

        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Proxima",
            tCounter: "%curr% de %total%",
        },
    });

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            },
    });
});
