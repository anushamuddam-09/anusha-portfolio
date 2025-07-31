// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Full Stack Web Development',
    'Machine Learning Projects',
    'Clean Code. Smart Tech.'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed = 50;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before starting new phrase
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typing animation
setTimeout(typeWriter, 1000);

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Floating Elements Animation
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach(element => {
    const speed = element.getAttribute('data-speed') || 1;
    element.style.animationDuration = `${6 / speed}s`;
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;
        const yPos = -(scrolled * speed * 0.5);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .achievement-card, .tech-category, .snippet-card').forEach(el => {
    observer.observe(el);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Download Resume Button - REMOVED OVERRIDE
// The HTML download link will work automatically

// Tooltip for Tech Icons
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const tooltip = icon.getAttribute('data-tooltip');
        if (tooltip) {
            // Tooltip is handled by CSS
        }
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .achievement-card, .tech-category, .snippet-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .light-mode {
        --bg-dark: #ffffff;
        --bg-darker: #f5f5f5;
        --text-light: #333333;
        --text-gray: #666666;
    }
    
    .light-mode .navbar {
        background: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .light-mode .nav-link {
        color: #333333;
    }
    
    .light-mode .project-card,
    .light-mode .achievement-card,
    .light-mode .tech-category,
    .light-mode .snippet-card,
    .light-mode .contact-item {
        background: rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .scroll-top {
        display: none;
    }
`;

document.head.appendChild(style);

// Initialize animations on page load
window.addEventListener('load', () => {
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.project-card, .achievement-card, .tech-category, .snippet-card').forEach(el => {
            el.classList.add('animate-in');
        });
    }, 500);
}); 