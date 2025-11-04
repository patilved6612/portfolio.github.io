// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form message
document.querySelector("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! Your message has been sent successfully.");
  e.target.reset();
});
