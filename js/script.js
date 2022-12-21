'use strict';

// === UI Feature 1: Carousel ===

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselNav = document.querySelectorAll('.nav-item');
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', goLeft);
rightBtn.addEventListener('click', goRight);

function goLeft(e) {
    const currItem = document.querySelector('.carousel-item.active');

    const currIndex = carouselItems.indexOf(currItem);

    let nextIndex;

    if (currIndex === 0) {
        nextIndex = CAROUSEL_SIZE - 1;
    }
    else {
        nextIndex = currIndex - 1;
    }

    carouselItems[nextIndex].classList.remove('hide');
    carouselItems[nextIndex].classList.add('active');
    carouselNav[nextIndex].classList.add('active');
    currItem.classList.remove('active');
    currItem.classList.add('hide');
    carouselNav[currIndex].classList.remove('active');
}

function goRight(e) {
    const currItem = document.querySelector('.carousel-item.active');

    const currIndex = carouselItems.indexOf(currItem);

    let nextIndex;

    if (currIndex === CAROUSEL_SIZE - 1) {
        nextIndex = 0;
    }
    else {
        nextIndex = currIndex + 1;
    }

    carouselItems[nextIndex].classList.remove('hide');
    carouselItems[nextIndex].classList.add('active');
    carouselNav[nextIndex].classList.add('active');
    currItem.classList.remove('active');
    currItem.classList.add('hide');
    carouselNav[currIndex].classList.remove('active');
}

