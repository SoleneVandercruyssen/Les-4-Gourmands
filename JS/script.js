"use strict";

// Récupère les éléments

const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ouvre/ferme le menu
    burgerBtn.classList.toggle('active'); // Anime le burger
});

// Ferme le menu si un lien est cliqué
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // Enlève la classe "active"
    });
});
// Ferme le menu si on clique en dehors
document.addEventListener('click', (event) => {
    if (!burgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Enlève la classe "active"
    }
});



// Ajoute la classe 'show' à toutes les sections concernées au chargement
window.addEventListener('load', () => {
document.querySelectorAll('.contact, .index, .apropos, .nosproduits').forEach(section => {
    section.classList.add('show');
});
});




// // Slider
// let currentSlide = 0;

// // Sélection de toutes les sections qui contiennent un slider
// document.querySelectorAll("section").forEach(section => {
//     const images = section.querySelectorAll(".image-apropos");
//     // Le premier et le dernier enfant sont sélectionnés pour les boutons de navigation
//     // On suppose que les boutons sont dans une div avec la classe "button-controls"
//     const prevBtn = section.querySelector(".button-controls button:first-child");
//     const nextBtn = section.querySelector(".button-controls button:last-child");

//     // L’index (position) de l’image actuellement visible dans CETTE section
//     let index = 0;
// /**
//  * Ici on affiche la diapositive correspondante à l'index donné
//  * @param {number} i - L'index de l'image à afficher
//  * On utilise une fonction pour parcourir toutes les images et afficher uniquement celle qui correspond à l'index
//  * @returns {void}
//  */
//     function showSlide(i) {
//         // On fait une boucle pour parcourir toutes les images 
//         // et on affiche uniquement celle qui correspond à l'index
//         images.forEach((img, idx) => {
//             img.style.display = idx === i ? "block" : "none";
//         });
//     }

//     // Initialisation
//     showSlide(index);
//     setInterval(nextSlide, 5000); // Change de diapositive toutes les 5 secondes
//     prevBtn.addEventListener("click", () => {
//         index = (index - 1 + images.length) % images.length;
//         showSlide(index);
//     });

//     nextBtn.addEventListener("click", () => {
//         index = (index + 1) % images.length;
//         showSlide(index);
//     });
// });

// Slider
document.querySelectorAll("section").forEach(section => {
    const images = section.querySelectorAll(".image-apropos");
    const prevBtn = section.querySelector(".button-controls button:first-child");
    const nextBtn = section.querySelector(".button-controls button:last-child");

    if (images.length === 0) return; // ignore les sections sans slider

    let index = 0;

    function showSlide(i) {
        images.forEach((img, idx) => {
            img.style.display = idx === i ? "block" : "none";
        });
    }

    // Affiche la première image
    showSlide(index);

    // Changement automatique toutes les 5 secondes
    setInterval(() => {
        index = (index + 1) % images.length;
        showSlide(index);
    }, 5000);

    // Navigation manuelle
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            showSlide(index);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % images.length;
            showSlide(index);
        });
    }
});























// Code pour un slider simple (non utilisé ici)
// let currentSlide = 0;
// const slides = document.querySelectorAll('.image-slider img');
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = (i === index) ? 'block' : 'none';
//     });
// }
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }
// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }
// Affiche la première diapositive au chargement
// window.addEventListener('load', () => {
//     showSlide(currentSlide);
// }); 


// Animation au scroll
const revealElements = document.querySelectorAll('.reveal');
const options = {
    threshold: 0.1 // Pourcentage de l'élément visible avant de déclencher l'animation
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Ajoute la classe 'active' pour déclencher l'animation
            observer.unobserve(entry.target); // Arrête d'observer l'élément une fois l'animation déclenchée
        }
    });
}, options);
revealElements.forEach(el => {
    observer.observe(el); // Observe chaque élément avec la classe 'reveal'
});
// Fin animation au scroll




