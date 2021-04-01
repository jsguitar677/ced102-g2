
var swiper2 = new Swiper('#swiper2', {
    slidesPerView:4,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        effect: 'fade',
    },
});


var swiper4 = new Swiper('#swiper4', {          
    slidesPerView:3,
    mousewheel: true,
    keyboard: true,
    spaceBetween: 30,
    breakpoints:{
        768: {
            slidesPerView:2.3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        effect: 'fade',
    },
    
});

var swiper5 = new Swiper('#swiper5', {
    slidesPerView:2.3,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    // width:820,  
    // height:500,
    mousewheel: true,
    uniqueNavElements :false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        effect: 'fade',
       

    },
});