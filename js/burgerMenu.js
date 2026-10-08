document.addEventListener('DOMContentLoaded', function () {
    const bgImg = new Image();
    bgImg.src = 'img/hill.jpg';
    bgImg.onload = function () {
        document.body.classList.add('image-loaded');
    };
    if (bgImg.complete) {
        document.body.classList.add('image-loaded');
    }
});

