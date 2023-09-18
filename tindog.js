'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
  
    console.log(e.target.getBoundingClientRect());
  
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  console.log("javascript code is running.");
  document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');
  
    let chatBoxVisible = false; // Track the chatbox visibility
  
    chatIcon.addEventListener('click', function () {
      if (chatBoxVisible) {
        chatBox.style.display = 'none'; // Hide the chatbox
      } else {
        chatBox.style.display = 'block'; // Show the chatbox
      }
  
      // Toggle the chatbox visibility
      chatBoxVisible = !chatBoxVisible;
    });
  
    // Rest of your chat functionality goes here
  });
  