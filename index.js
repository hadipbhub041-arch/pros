document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.star-icon').forEach(star => {
        star.addEventListener('click', () => {
            star.classList.toggle('filled');
        });
    });


    const ANIMATION_SPEED_TOP = 45;
    const ANIMATION_SPEED_BOTTOM = 45;

    const CARD_WIDTH = 250;
    const CARD_GAP = 20;

    const topSlider = document.getElementById('custom-testimonials-top');
    const bottomSlider = document.getElementById('custom-testimonials-bottom');

    function setupInfiniteScroll(sliderElement, speedSeconds) {
        if (!sliderElement) return;

        const list = sliderElement.querySelector('.custom-slide-list');
        const track = sliderElement.querySelector('.slider-track');

        const originalSlidesHTML = list.innerHTML;
        list.innerHTML += originalSlidesHTML;
        const totalSlides = list.children.length / 2;
        const originalContentWidth = (totalSlides * CARD_WIDTH) + ((totalSlides - 1) * CARD_GAP);
        track.style.width = `${originalContentWidth * 2}px`;

        track.style.animationDuration = `${speedSeconds}s`;

        sliderElement.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });

        sliderElement.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }

    setupInfiniteScroll(topSlider, ANIMATION_SPEED_TOP);
    setupInfiniteScroll(bottomSlider, ANIMATION_SPEED_BOTTOM);

});



