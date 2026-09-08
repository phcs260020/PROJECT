// ===== HAMBURGER TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) navLinks.classList.remove('active');
    });
});

// ===== SCROLL ANIMATION (fade-up) =====
const fadeElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card, .team-card, .gallery-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FORM SUBMISSIONS (demo) =====
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Form submitted! (Demo)');
        form.reset();
    });
});

// ===== STICKY NAV SHADOW =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) {
        navbar.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
    }
});
