$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
  $(".overlay p").toggleClass("open");
	});
  
  $('.square.blue').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");
  const options = { threshold: 0.1 };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
      });
  }, options);

  fadeInOnScroll.observe(aboutSection);
});
