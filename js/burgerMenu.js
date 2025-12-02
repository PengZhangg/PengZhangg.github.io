document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
        });

        const navItems = navList.querySelectorAll('.navItem a');
        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                navList.classList.remove('active');
            });
        });
    }
    const bgImg = new Image();
    bgImg.src = 'img/hill.jpg';
    bgImg.onload = function () {
        document.body.classList.add('image-loaded');
    };
    if (bgImg.complete) {
        document.body.classList.add('image-loaded');
    }
});

