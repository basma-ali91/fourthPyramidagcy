// using aos animation library
AOS.init({
    duration: 1500
});

// change bgcolor of navbar
let nav = document.querySelector("#home nav");
let contactnav=document.querySelector("#contactpage nav")
window.addEventListener("scroll", function () {
    let homeSection = document.getElementById("home");
    let scrollNav = window.scrollY;
    let homeHeight = homeSection.scrollHeight;
    if (scrollNav > homeHeight) {
        nav.style.backgroundColor = "rgba(0,0,0,.8)";
    }
    else{
        nav.style.backgroundColor="rgb(74 73 58 / 73%)"
    }
    
})


