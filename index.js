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
const allCategories = [
    'All', 'Travel', 'Things to do', 'Beauty & Spa', 'Beauty', 'Local',
    'Food & Drinks', 'Massage', 'Accessories', 'Goods', 'Electronics',
    'Clothing', 'Home Goods', 'Footwear'
];

function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsList = document.getElementById('suggestionsList');

    if (!searchInput || !suggestionsList) {
        console.error('Unified search input or suggestions list not found.');
        return;
    }

    searchInput.addEventListener('input', function () {
        const inputValue = this.value.toLowerCase().trim();
        suggestionsList.innerHTML = '';

        if (inputValue.length > 0) {
            const filteredSuggestions = allCategories.filter(category =>
                category.toLowerCase().includes(inputValue)
            );

            if (filteredSuggestions.length > 0) {
                filteredSuggestions.forEach(suggestion => {
                    const suggestionElement = document.createElement('a');
                    suggestionElement.href = '#';
                    suggestionElement.className = 'suggestion-item d-block text-decoration-none text-dark py-2 px-3';
                    suggestionElement.innerHTML = `<small>Suggested: <b>${suggestion}</b></small>`;

                    suggestionElement.addEventListener('click', (e) => {
                        e.preventDefault();
                        searchInput.value = suggestion;
                        suggestionsList.style.display = 'none';
                    });

                    suggestionsList.appendChild(suggestionElement);
                });

                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.style.display = 'none';
            }
        } else {
            suggestionsList.style.display = 'none';
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== searchInput && !suggestionsList.contains(e.target)) {
            suggestionsList.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', setupAutocomplete);