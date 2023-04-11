// using aos animation library
AOS.init({
    duration: 1500
});

// change bgcolor of navbar
// let nav = document.querySelector("#home nav");
// let contactnav=document.querySelector("#contactpage nav")
// window.addEventListener("scroll", function () {
//     let homeSection = document.getElementById("home");
//     let scrollNav = window.scrollY;
//     let homeHeight = homeSection.scrollHeight;
//     if (scrollNav > homeHeight) {
//         nav.style.backgroundColor = "rgba(0,0,0,.8)";
//     }
//     else{
//         nav.style.backgroundColor="rgb(74 73 58 / 73%)"
//     }
    
// })
$("document").ready(function(){
     new Typed('#ele', {
        strings: ["  ركة الهرم الرابع"],
        typeSpeed: 100,
        loop:true,
        backSpeed: 100,
        backDelay: 700,
        showCursor: false,
      });
})


$('.owl-carousel').owlCarousel({
    loop:true,
    rtl:true,
    margin:10,
    dotsEach:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1024:{
            items:3,
        }
    }
    
})

