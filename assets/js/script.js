document.addEventListener('DOMContentLoaded', () => {
    // === Navbar active link highlighting ===
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    // === Dark Mode Toggle ===
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = darkModeToggle.querySelector('.fa-moon');
    const sunIcon = document.createElement('i');
    sunIcon.classList.add('fas', 'fa-sun');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        darkModeToggle.innerHTML = '';
        darkModeToggle.appendChild(sunIcon);
    } else {
        darkModeToggle.innerHTML = '';
        darkModeToggle.appendChild(moonIcon);
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '';
            darkModeToggle.appendChild(sunIcon);
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '';
            darkModeToggle.appendChild(moonIcon);
        }
    });

    // === ScrollReveal Animations ===
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1500,
        delay: 200,
    });

    ScrollReveal().reveal('.section-hero h1, .section-hero p', { origin: 'top' });
    ScrollReveal().reveal('.hero-img', { origin: 'bottom', scale: 0.8 });
    ScrollReveal().reveal('.section-title', { origin: 'top' });
    ScrollReveal().reveal('.cards .card, .form-contact', { origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('footer .footer-container', { origin: 'bottom' });
    ScrollReveal().reveal('.btn-primary', { origin: 'bottom', distance: '40px', delay: 500 });

    // === Hamburger menu toggle ===
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // === Auto-close nav when menu item clicked ===
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
