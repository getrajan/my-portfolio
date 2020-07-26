
// Start Navbar
$('.nav-item').on('click', function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});
// End Navbar

//for scrolling effects
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//scroll home section
sr.reveal('.title', {});
sr.reveal('.site-button', { delay: 300 });
sr.reveal('.banner-image', { delay: 500 });

// scroll about section
sr.reveal('.about-title', {});
sr.reveal('.paragraph', { delay: 300 });
sr.reveal('.about-image', { delay: 500 });

//scroll skill section
sr.reveal('.pr-skill', {});
sr.reveal('.skills-data', { interval: 100 });
sr.reveal('.skill-image', { delay: 300 });

//scroll work section
sr.reveal('.work-image', { interval: 200 });

//scroll contact section
sr.reveal('.contact-input', { interval: 200 });
sr.reveal('.contact-button', { delay: 300 });


