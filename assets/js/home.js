
const swiper = new Swiper('.home-swiper', {
    speed: 400,
    navigation: {
        nextEl: ".swiper-button-next",  // İleri butonunun CSS sınıfı
        prevEl: ".swiper-button-prev"   // Geri butonunun CSS sınıfı
    }
});
const navBrandSwiper = new Swiper('.nav-brand-swiper', {
    speed: 1400,
    navigation: {
        nextEl: ".swiper-button-next",  // İleri butonunun CSS sınıfı
        prevEl: ".swiper-button-prev"   // Geri butonunun CSS sınıfı
    },
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true
    }
});
const categorySwiper = new Swiper('.nav-category-swiper', {
    speed: 1400,
    navigation: {
        nextEl: ".swiper-button-next",  // İleri butonunun CSS sınıfı
        prevEl: ".swiper-button-prev"   // Geri butonunun CSS sınıfı
    },
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true
    }
});

const brandSwiper = new Swiper('.brands-swiper', {
    speed: 1400,
    navigation: {
        nextEl: "#brandNext",  // İleri butonunun CSS sınıfı
        prevEl: "#brandPrev"   // Geri butonunun CSS sınıfı
    },
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true
    },
    breakpoints:{
        320:{
            slidesPerView:2,
        },
        640:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        1024:{
            slidesPerView:6,
        }
    }
});
const seasonProductSwiper = new Swiper('.season-product-swiper', {
    speed: 1400,
    navigation: {
        nextEl: "#seasonNext",  // İleri butonunun CSS sınıfı
        prevEl: "#seasonPrev"   // Geri butonunun CSS sınıfı
    },
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true
    },
    breakpoints:{

        1024:{
            slidesPerView:4,
            spaceBetween:20
        }
    }
});