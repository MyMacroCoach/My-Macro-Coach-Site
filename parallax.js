// parallax.js

let latestScroll = 0;
let ticking = false;

window.addEventListener('scroll', function() {
  latestScroll = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateParallax(latestScroll);
      ticking = false;
    });
    ticking = true;
  }
});

function updateParallax(scrollPosition) {
  const footerCircle = document.querySelector('.footerCircle');
  const footerSquare = document.querySelector('.footerSquare');
  const footerTriangle = document.querySelector('.footerTriangle svg');

  footerCircle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  footerSquare.style.transform = `translateY(${scrollPosition * 0.15}px) rotate(45deg)`;
  footerTriangle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
}

// parallax.js

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
  
    const footerCircle = document.querySelector('.footerCircle');
    const footerSquare = document.querySelector('.footerSquare');
    const footerTriangle = document.querySelector('.footerTriangle svg');
  
    // Increase the movement multipliers for a more intense effect
    footerCircle.style.transform = `translateY(${scrollPosition * 0.7}px)`;
    footerSquare.style.transform = `translateY(${scrollPosition * 0.5}px) rotate(45deg)`;
    footerTriangle.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  });
  