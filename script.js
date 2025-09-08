function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Senior Software Developer", "Backend Developer", "Django Developer", "Python Developer", "Senior Software Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false,
});
// <!-- typed js effect ends -->