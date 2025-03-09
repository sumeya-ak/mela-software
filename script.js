document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize AOS with adjusted settings
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        delay: 100
    });

    // Immediately show hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    // Remove scroll reveal from hero section
    if (heroContent) {
        heroContent.classList.remove('reveal');
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'none';
    }
    if (heroImage) {
        heroImage.classList.remove('reveal');
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'none';
    }

    // Only add reveal class to sections after hero
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#ff6b00' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b00',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        }
    });

    // Scroll Reveal Animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);

    // Typewriter Effect
    const typeWriter = (text, element, speed = 100) => {
        let i = 0;
        element.innerHTML = '';
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    const heroText = document.querySelector('.typewriter');
    typeWriter(heroText.textContent, heroText);
});

// Add smooth scroll for all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('reveal');
});

// Add interactive cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 