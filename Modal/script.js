'use strict';

const modal = document.querySelectorAll('.modal');
console.log(modal);

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);
// console.log(modal);

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');

    // console.log(i);
    overlay.classList.remove('hidden');
  });
}
for (let i = 0; i < modal.length; i++) {
  btnCloseModal.addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

overlay.addEventListener('click', function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  for (let i = 0; i < modal.length; i++) {
    if (e.key === 'Escape' && !modal[i].classList.contains('hidden')) {
      modal[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
