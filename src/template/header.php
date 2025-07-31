<?php 
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name= "description" content="Les quatre gourmands">
    <meta name="type" content="site web">
    <meta name="keywords" content="boulangerie, pâtisserie, vienoiseries, gâteau, pain, nourriture, Emmerin">
    <meta name="author" content="Solène Vandercruyssen">
    <meta name="og:title" content="Les quatre gourmands">
    <meta name="og:site_name" content="Les quatre gourmands">
    <meta name="og-url" content="">
    <meta name="robots" content="noindex, nofollow">
    <title>Les quatre gourmands</title>
    <!-- HEADER + HOME -->
    <link rel="stylesheet" href="style.css">
    <!-- <script type="module" src="/JS/script.js"></script>
    <script type="module" src="/JS/flèche.js"></script> -->
    <!-- Contact -->
    <!-- A propos -->
    <!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <script src="/JS/cards.js" defer></script> -->
</head>


<!-- ! Menu burger  -->
<header>
    <div id="flex">
        <div class="logo">
            <img src="./src/images/Logo des 4 Gourmands.png" alt="logo de l'entreprise" class= "logo_img">
        </div>

    </div>
    <input type="checkbox" id="burger-toggle" hidden>
    
    <label for="burger-toggle" class="burger-container">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
    </label>
    <div class="nav">
    <nav>
        <div class="nav-menu">
                <!-- From Uiverse.io by Lealdos --> 
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/nos produits">Nos Produits</a></li>
                    <li><a href="/apropos">A propos</a></li>
                </ul>
        </div>
    </nav>
</div>
    </div>
</header>
<main>