function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }
}

// Smooth Scroll Functionality
document.querySelectorAll('.btn, .contact-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image Modal Functionality
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal on click outside of the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}


//Light Box
const images = document.querySelectorAll('.photo-gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.dataset.full;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close on click outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });