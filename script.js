const styleswitchertoogler = document.querySelector(".style-switcher-toogler");
styleswitchertoogler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})
/*= = = = Scorll process = = = = */
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/* light and dark mode */
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");

})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else {
        daynight.querySelector("i").classList.add("fa-moon");
    }
})
/**Typinggg effect */

var typed = new Typed(".typing", {
    strings: [" ", "Final Year Student", "Web Developer", "Android Developer", "Future Ethical Hacker"],
    typeSpeed: 120, BackSpeed: 100,
    loop: true
})

/** = = = = Aside = = = = */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll("section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionToggle();
        }
    })
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split('#')[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".contact-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navToggle = document.querySelector(".toggle"),
    aside = document.querySelector(".aside");
navToggle.addEventListener("click", () => {
    asideSectionToggle();
})

function asideSectionToggle() {
    aside.classList.toggle("open");
    navToggle.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}