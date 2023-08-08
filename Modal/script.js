'use strict';

// Select Dom Eelemts
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const body = document.querySelector('body');

// Show modal onClick
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showElements)
}

// Close modal by clicking on close button
btnCloseModal.addEventListener('click', hideElements);

// on Clicking outside
overlay.addEventListener('click', hideElements);

// Escape key
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideElements()
  }
});

// show modal
function showElements() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// hide modal
function hideElements() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}