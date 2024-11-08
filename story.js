document.addEventListener("DOMContentLoaded", () => {
  const navIcon = document.getElementById("nav-icon");
  const overlay = document.querySelector(".overlay");
  const overlayLinks = overlay.querySelectorAll("a");
  const overlayParagraph = overlay.querySelector("p");

  // Function to toggle 'open' class on overlay and its children
  const toggleOverlay = () => {
      navIcon.classList.toggle("open");
      overlay.classList.toggle("open");

      // Check if overlay has 'open' class
      if (overlay.classList.contains('open')) {
          // Add 'open' class to links and paragraph
          overlayLinks.forEach((link) => link.classList.add('open'));
          if (overlayParagraph) {
              overlayParagraph.classList.add('open');
          }
      } else {
          // Remove 'open' class from links and paragraph
          overlayLinks.forEach((link) => link.classList.remove('open'));
          if (overlayParagraph) {
              overlayParagraph.classList.remove('open');
          }
      }
  };

  // Toggle 'open' class on click of nav icon
  navIcon.addEventListener("click", toggleOverlay);

  // Close menu when clicking on a link inside the overlay
  overlayLinks.forEach((link) => {
      link.addEventListener("click", () => {
          // Close the overlay
          navIcon.classList.remove("open");
          overlay.classList.remove("open");
          // Remove 'open' class from links and paragraph
          overlayLinks.forEach((link) => link.classList.remove('open'));
          if (overlayParagraph) {
              overlayParagraph.classList.remove('open');
          }
      });
  });
});
