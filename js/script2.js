'use strict';

// === UI Feature 2: Accordion ===

const root = document.documentElement;

//const accordionButtons = document.getElementsByTagName('button');
const accordionButtons = document.getElementsByClassName('aBtn');

accordionButtons[0].addEventListener('click', dropDown);
accordionButtons[1].addEventListener('click', dropDown);

function dropDown(event) {
    const btn = event.target;

    btn.classList.toggle('accordion-label-open');
    btn.classList.toggle('accordion-label');

    btn.nextElementSibling.classList.toggle('accordion-content-open');
    btn.nextElementSibling.classList.toggle('accordion-content');

    root.style.setProperty('--accordion-content-height', btn.nextElementSibling.scrollHeight + 'px');

    for (var i=0; i < accordionButtons.length; i++){
        if (accordionButtons[i] != btn && accordionButtons[i].classList.contains('accordion-label-open')){
            accordionButtons[i].classList.remove('accordion-label-open');
            accordionButtons[i].classList.add('accordion-label');
            accordionButtons[i].nextElementSibling.classList.remove('accordion-content-open');
            accordionButtons[i].nextElementSibling.classList.add('accordion-content');
        }
    }
} 

// === UI Feature 3: Toggle Tabs ===

const tabBtn = document.getElementsByClassName('tablinks');
console.log(tabBtn);

tabBtn[0].addEventListener('click', openTab);
tabBtn[1].addEventListener('click', openTab);
tabBtn[2].addEventListener('click', openTab);

function openTab(event) {
    let i, tabcontent, tablinks;
    const currTab = event.target.getAttribute('id');
    console.log(currTab);
  
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.querySelector(`.${currTab}`).style.display = "block";
    event.currentTarget.className += " active";
  }