'use strict';

// write your code here
const logo = document.querySelector('.logo');
const message = document.createElement('div');

function successMessage() {
  message.classList.add('message');

  if (message.classList.contains('error-message')) {
    message.classList.toggle('error-message');
  }
  message.innerText = `Promise was resolved!`;
}

function errorMessage() {
  message.classList.add('message');
  message.classList.add('error-message');
  message.innerText = `Promise was rejected!`;
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error!'));
  }, 3000);
});

document.body.appendChild(message);
promise1.then(successMessage);
promise2.catch(errorMessage);
