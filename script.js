// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// Form Submission
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    // For demo purposes, we'll just show an alert
    alert('Thank you for your enquiry! We will contact you shortly.');
    this.reset();
});

// Current Year for Footer
document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} ExcelEd Coaching Institute. All Rights Reserved.`;

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content, .course-card, .profile-card, .testimonial-card, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
window.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.about-content, .course-card, .profile-card, .testimonial-card, .contact-form');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger animation once on page load
    setTimeout(animateOnScroll, 300);
});

// Animate elements on scroll
window.addEventListener('scroll', animateOnScroll);
