// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close menu on mobile after click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Dummy Alert)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আলম থাই টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।');
    this.reset();
});
