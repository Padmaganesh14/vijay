let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

let unAcceptClickTimeout; // Renamed variable

// Safeguard: Ensure elements exist
if (nextButton && prevButton && carousel && listHTML) {
    nextButton.onclick = function () {
        showSlider('next');
    };

    prevButton.onclick = function () {
        showSlider('prev');
    };

    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';
        carousel.classList.remove('next', 'prev');

        let items = document.querySelectorAll('.carousel .list .item');

        if (items.length === 0) return; // No items to slide

        if (type === 'next') {
            listHTML.appendChild(items[0]);
            carousel.classList.add('next');
        } else {
            listHTML.prepend(items[items.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(unAcceptClickTimeout);
        unAcceptClickTimeout = setTimeout(() => {
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000);
    };

    // See more buttons functionality
    seeMoreButtons.forEach((button) => {
        button.onclick = function () {
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        };
    });

    // Back button functionality
    if (backButton) {
        backButton.onclick = function () {
            carousel.classList.remove('showDetail');
        };
    }
}
