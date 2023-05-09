const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    navLink.forEach(n.addEventListener('click', linkAction))
}

function scrollheader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});
mixerProducts.filter('.Household Items')
const linkProducts = document.querySelectorAll('.products__item')

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-products')
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts))
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.crollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOset
    sections.forEach(current => {
        const sectionsHeight = current.offsetHeight,
            sectionTop = curent.offsetTop - 58,
            sectionId = current.gerAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active - link')
        }
    })
}