 'use script';

//  modal variables 
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overly]');

// modal function
const modalCloseFunc = function () {
    modal.classList.add('closed')
}

// modal eventListener 
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc)
