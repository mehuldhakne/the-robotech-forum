const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

  // Get all anchor tags with class "open-image"
  const openImageLinks = document.querySelectorAll('.open-image');

  // Add click event listener to each anchor tag
  openImageLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          // Prevent the default behavior of anchor tag
          event.preventDefault();
          
          // Open the link in a new tab
          window.open(this.href, '_blank');
      });
  });
