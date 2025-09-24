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
    // Vérifie si le clic est en dehors du menu et du bouton burger
    if (!burgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Enlève la classe "active"
    }
});



// Ajoute la classe 'show' à toutes les sections concernées au chargement
window.addEventListener('load', () => {
document.querySelectorAll('.home, .produits, .contact, .apropos').forEach(section => {
    section.classList.add('show');
});
});


// Slider
document.querySelectorAll("section").forEach(section => {
    const images = section.querySelectorAll(".image-apropos");
    const prevBtn = section.querySelector(".button-controls button:first-child");
    const nextBtn = section.querySelector(".button-controls button:last-child");

    // boucle de sécurité au cas où une section n'a pas de slider
    if (images.length === 0) return; // ignore les sections sans slider
    // index de l'image actuelle
    let index = 0;

    /**
     *  Fonction pour afficher l'image à l'index donné
     *  @param {number} i - Index de l'image à afficher
    */
    function showSlide(i) {
        images.forEach((img, idx) => {
            // Montre l'image si son index correspond, sinon la cache
            img.style.display = idx === i ? "block" : "none";
        });
    }

    // Affiche la première image
    showSlide(index);

    // Changement automatique toutes les 5 secondes
    setInterval(() => {
        // passe à l'image suivante, boucle si nécessaire
        index = (index + 1) % images.length;
        showSlide(index);
    },
    // intervalle en millisecondes
    5000);

    // si les boutons existent, ajoute les écouteurs d'événements
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            // retourne à l'image précédente, boucle si nécessaire
            index = (index - 1 + images.length) % images.length;
            showSlide(index);
        });
    }

    // même chose pour le bouton suivant
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            // passe à l'image suivante, boucle si nécessaire
            index = (index + 1) % images.length;
            showSlide(index);
        });
    }
});