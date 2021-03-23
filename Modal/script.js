'use strict';

const modal = document.querySelectorAll('.modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const labelTimer = document.querySelector('.timer');
const startTimer = document.querySelector('.start');
console.log(startTimer);
// console.log(btnOpenModal);
// console.log(modal);

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

//start counting
startTimer.addEventListener('click', function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      alert('発表時間が終わりました。\nご清聴ありがとうございました。');
      //   labelWelcome.textContent = '';
      //   containerApp.style.opacity = 0;
      labelTimer.textContent = '5:00';
    }
    // Decrese 1s
    time--;
  };
  //Set time to 5 minutes
  let time = 300;
  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
});

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
