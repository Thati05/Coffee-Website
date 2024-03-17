import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// JavaScript to toggle product display based on category
const productCards = document.querySelectorAll('.product__card');
const productInfos = document.querySelectorAll('.product-info');

// Show only New Delicacies by default
productCards.forEach(card => {
    if (card.classList.contains('delicacies')) {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});

productInfos.forEach(info => {
    info.addEventListener('click', () => {
        const filter = info.getAttribute('data-filter');
        productCards.forEach(card => {
            if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

