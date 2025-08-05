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
