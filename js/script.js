/* ****************** Change Background Header ****************** */
function scrollHeader() {
    const header = document.getElementById("header");
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
        scrollUp.classList.add("scroll-up-show");
    }
    else {
        header.classList.remove("scroll-header");
        scrollUp.classList.remove("scroll-up-show");
    }
}
window.addEventListener('scroll', scrollHeader)



/* ****************** Services Modal ****************** */
const modalViews = document.querySelectorAll(".services-modal"),
    modalBtn = document.querySelectorAll(".services-button"),
    modalClose = document.querySelectorAll(".services-modal-close"),
    workModalBtn = document.querySelectorAll("span.work-button"),
    workModalViews = document.querySelectorAll(".work-modal")

let modal = function (modalClick) {
    modalViews[modalClick].children[0].style.transform = "scale(1)"
    modalViews[modalClick].style.opacity = "1"
    modalViews[modalClick].classList.add("active-modal")
}

let workModal = function (modalClick) {
    workModalViews[modalClick].children[0].style.transform = "scale(1)"
    workModalViews[modalClick].style.opacity = "1"
    workModalViews[modalClick].classList.add("work-active-modal")
}

modalBtn.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        modal(i)
    })
})

workModalBtn.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        workModal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.children[0].style.transform = "scale(0.2)"
            mv.style.opacity = "0"
            setTimeout(() => {
                mv.classList.remove("active-modal")
            },150)
        })
        workModalViews.forEach((mv) => {
            mv.children[0].style.transform = "scale(0.2)"
            mv.style.opacity = "0"
            setTimeout(() => {
                mv.classList.remove("work-active-modal")
            },150)
        })
    })
})



/* ****************** Link active work ****************** */
const linkWork = document.querySelectorAll(".work-item")

function activeWork() {
    linkWork.forEach(l => l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener("click", activeWork))



/* ****************** Scroll Sections Active Link ****************** */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive)



/* ****************** Theme Change ****************** */
const themeButton = document.getElementById("theme-button"),
    lightTheme = "light-theme",
    iconTheme = "bxs-sun"

const selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? "light" : "dark"
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? "bx bxs-moon" : "bx bxs-sun"

if (selectedTheme) {
    document.body.classList[selectedTheme === "light" ? "add" : "remove"](lightTheme)
    themeButton.classList[selectedIcon === "bx bxs-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon)
})



/* ****************** Scroll Reveal ****************** */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 1000
})

sr.reveal(".nav-menu", {
    delay: 0,
    origin: "bottom"
})
sr.reveal(".home-data")
sr.reveal(".home-handle", {
    delay: 1200
})
sr.reveal(".home-social", {
    delay: 1400,
    origin: "left"
})
sr.reveal(".home-scroll", {
    delay: 1400,
    origin: "right"
})

const sn = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 30
})

sn.reveal(".themeBtn", {
    delay: 0,
    origin: "right",
    duration: 2500
})

sn.reveal(".section-subtitle", {delay: 90})
sn.reveal(".section-title")
sn.reveal(".work-filters", {origin: "top"})

const sd = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 2100,
    delay: 30
})

sd.reveal(".about-container")
// sd.reveal(".services-container")
sd.reveal(".skills-container")
// sd.reveal(".work-container")
sd.reveal(".testimonials-container")
sd.reveal(".contact-container")


const sp = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1500,
    delay: 30
})

sp.reveal(".footer-img")
sp.reveal(".footer-title")
sp.reveal(".footer-list")
sp.reveal(".footer-social")




/* ****************** Typing ****************** */
var typed = new Typed(".autoType", {
    strings: ["Amir Tofigh"],
    typeSpeed: 50,
    startDelay: 600,
    showCursor: false,
})



/* ****************** Scrolling To Top Of Page When Refreshed ****************** */
if ($(document).ready()) {
    $(document).ready(function () {
        $(this).scrollTop(0);
    });
} else {
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
}