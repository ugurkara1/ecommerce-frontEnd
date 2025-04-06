document.addEventListener('DOMContentLoaded', function() {
    // Make thumbSlider globally accessible
    window.thumbSlider = new Swiper('.thumb-sliders', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        // Özel navigasyon butonları
        navigation: {
            nextEl: ".thumb-next",
            prevEl: ".thumb-prev"
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4
            }
        }
    });
    
    // Ana slider
    const mainSlider = new Swiper('.big-slider', {
        speed: 400,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        zoom: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        thumbs: {
            swiper: window.thumbSlider
        }
    });
    
    // Add click handler here in the same scope
    $('.thumb-image').on('click', function() {
        var clickedIndex = $(this).parent().index();
        
        if(clickedIndex == window.thumbSlider.slides.length - 1) {
            // If it's the last element
            window.thumbSlider.slideTo(0, 500); // Go to the first element
        } else {
            window.thumbSlider.slideTo(clickedIndex + 1, 500); // Go to the next element
        }
    });
    
});
