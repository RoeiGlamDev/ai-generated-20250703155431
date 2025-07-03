// 
// GoldTube - A Luxury YouTube Clone
// script.js - The main JavaScript file for the website
//

// Get the hero button element
const heroButton = document.querySelector('.hero-button');

// Add an event listener to the hero button
heroButton.addEventListener('click', () => {
  // Scroll to the video grid section
  document.querySelector('.video-grid').scrollIntoView({ behavior: 'smooth' });
});

// Get the video card elements
const videoCards = document.querySelectorAll('.video-card');

// Add an event listener to each video card
videoCards.forEach((videoCard) => {
  videoCard.addEventListener('mouseover', () => {
    // Add the hover effect to the video card
    videoCard.classList.add('smooth-transition');
  });

  videoCard.addEventListener('mouseout', () => {
    // Remove the hover effect from the video card
    videoCard.classList.remove('smooth-transition');
  });
});

// Add a fade-in animation to the hero section
document.querySelector('.hero').classList.add('fade-in');