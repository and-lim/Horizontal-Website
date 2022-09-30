$(document).ready(function() {
    ! function() {
        var e = document.body,
            n = (document.querySelector(".content-wrap"), document.getElementById("open-button")),
            t = document.getElementById("close-button"),
            i = document.getElementById("footer-tag"),
            a = !1;

        function o() {
            a ? classie.remove(e, "show-menu") : classie.add(e, "show-menu"), a = !a
        }
        n.addEventListener("click", o), i.addEventListener("click", o), t && t.addEventListener("click", o)
    }(), document.getElementById("getCurrentYear").innerHTML = (new Date).getFullYear(), $(".open-button,.footer-tag").click(function() {
        $("body").addClass("openButtonTrigger")
    });
    let e = (new Date).getHours();
    e > 17 || e < 6 ? ($(".nav-menu").addClass("night-time"), $("meta[name='theme-color']").attr("content", "#000000")) : ($(".nav-menu").addClass("day-time"), $("meta[name='theme-color']").attr("content", "#FFFFFF"));
    new Swiper(".main-window", {
        direction: "horizontal",
        watchSlidesVisibility: !0,
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: !0,
        touchEventsTarget: "container",
        mousewheel: {},
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        pagination: {
            el: ".main-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".main-navigation-next"
        },
        speed: 1e3
    }), new Swiper(".main-slider", {
        direction: "vertical",
        preloadImages: true,
        lazy: {loadOnTransitionStart: true},
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: !0,
        loop: !0,
        autoplay: {
                 delay: 5000,
                 disableOnInteraction: false
                    },
        effect: "fade",
        pagination: {
            el: ".main-slider-pagination",
            clickable: !0
        },
        navigation: {
            prevEl: ".main-slider-navigation-prev"
        },
        speed: 1000
    }), new Swiper(".vertical-logo", {
        direction: "vertical",
        slidesPerView: 6,
        centeredSlides: !0,
        spaceBetween: 0,
        loop: !0,
        autoplay: {
            delay: 0,
            reverseDirection: !0,
            disableOnInteraction: !1
        },
        speed: 2222
    })
});