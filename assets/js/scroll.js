$('.scroll-link').on('click', function (err) {
    err.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 750);
});