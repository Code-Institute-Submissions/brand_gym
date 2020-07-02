// Variables
const contactReadMore = document.querySelector('#contact-read-more-btn');
const contactReadLess = document.querySelector('#contact-read-less-btn');

const contactContentOne = document.querySelectorAll('.contact-txt')[0];
const contactContentTwo = document.querySelectorAll('.contact-txt')[1];

const contactHeadline = document.querySelector('.contact-headline');



// Functions
function readMoreLess() {  // Toggles Hidden Text Container
    contactContentOne.classList.toggle('out');
    contactContentTwo.classList.toggle('out');
    contactHeadline.classList.toggle('out');
    contactReadLess.classList.toggle('out');
}



// Event Listeners         // Buttons for Toggeling
contactReadMore.addEventListener('click', readMoreLess);
contactReadLess.addEventListener('click', readMoreLess);

