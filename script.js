// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (In a real application, this would send data to a backend)
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        showMessage('Thank you! Your message has been sent successfully. I will get back to you soon!', 'success');
        contactForm.reset();
    });
}

// Q&A Form Handler
const qaForm = document.getElementById('qaForm');
const qaMessage = document.getElementById('qaMessage');

if (qaForm) {
    qaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const qaName = document.getElementById('qaName').value.trim() || 'Anonymous';
        const qaCategory = document.getElementById('qaCategory').value.trim();
        const qaTitle = document.getElementById('qaTitle').value.trim();
        const qaQuestion = document.getElementById('qaQuestion').value.trim();
        
        // Validation
        if (!qaCategory || !qaTitle || !qaQuestion) {
            showQAMessage('Please fill in all required fields', 'error');
            return;
        }
        
        // Log question (In a real application, this would send data to a backend)
        console.log({
            name: qaName,
            category: qaCategory,
            title: qaTitle,
            question: qaQuestion,
            timestamp: new Date().toISOString()
        });
        
        showQAMessage('Thank you for your question! I will try to answer it as soon as possible. Check back soon! 📬', 'success');
        qaForm.reset();
        
        // Note: In a real application, you would store this in a database and display it in the questions list
    });
}

function showQAMessage(text, type) {
    qaMessage.textContent = text;
    qaMessage.className = `form-message ${type}`;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        qaMessage.className = 'form-message';
    }, 5000);
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// Scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section content
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navItemsAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItemsAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.borderBottom = '2px solid var(--accent-color)';
            link.style.paddingBottom = '5px';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// Smooth scroll for anchor links (enhanced)
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

// TypeWriter effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // You can add initialization code here
    console.log('Portfolio website loaded successfully!');
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark-theme');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

// Initialize theme from localStorage or OS preference
(function() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
})();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark-theme');
        const next = isDark ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });
}
