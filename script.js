// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon i");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    menuIcon.parentElement.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x"); // Change icon to 'X'
    });

    // Close menu when a nav link is clicked (on mobile)
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuIcon.classList.add("bx-menu");
            menuIcon.classList.remove("bx-x");
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation when scrolling
    const heroContent = document.querySelector(".hero-content");
    setTimeout(() => {
        heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500);
});

// Contact form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset(); // Clear the form
    } else {
        alert("Please fill in all required fields.");
    }
});
