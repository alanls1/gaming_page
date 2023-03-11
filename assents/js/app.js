'use strict';

// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
    console.log(elements)
    elements.forEach(element => {
        element.addEventListener(eventType, callback)
    });
}

// mobile navbar navbar will show after clicking menu button

const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")
const navLinks = document.querySelectorAll("[data-nav-link]")

const toggleNav = function () {
    navbar.classList.toggle("active")
    this.classList.toggle("active")
}

navToggler.addEventListener("click", toggleNav)

const navClose = () => {
    navbar.classList.remove("active")
    navToggler.classList.remove("active")
}

addEventOnElements(navLinks, "click", navClose)


/**
 * HEADER and Back to top btn
 * header and back to top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-back-top-btn]")


const activeEl = function () {
    if (window.scrollY > 100) {
        header.classList.add("active")
        backTopBtn.classList.add("active")
    } else {
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }

}

window.addEventListener("scroll", activeEl)


/**
 * button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]")

const buttonHoverRipple = function (e) {
     this.style.setProperty("--top", `${e.offsetY}px`)
     this.style.setProperty("--left", `${e.offsetX}px`)
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple)


/**
 * scroll reveal
 */


const revealEements = document.querySelectorAll("[data-reveal]")

const revealEementOnScroll = function () {
    for (let i = 0, len = revealEements.length; i < len; i++){
        const isElementInsideWindow = revealEements[i].getBoundingClientRect().top < window.innerHeight / 1.1
        
        
        if (isElementInsideWindow) {
            revealEements[i].classList.add("revealed")
        }
    }
}


window.addEventListener("scroll", revealEementOnScroll)

window.addEventListener("load", revealEementOnScroll)


/*
* custom cursor
*/

const cursor = document.querySelector("[data-cursor]")
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")]

const cursorMove = function (event) {
    cursor.style.top = `${event.clientY}px`
    cursor.style.left = `${event.clientX}px`
} 

window.addEventListener("mousemove", cursorMove)

addEventOnElements(hoverElements, "mouseover", function () {
    cursor.classList.add("hovered")
})


addEventOnElements(hoverElements, "mouseover", function () {
    cursor.classList.remove("hovered")
})