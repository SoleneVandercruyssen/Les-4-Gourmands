<?php
// Je crée une variable "$uri" qui récupèrera le chemin de l'url en ignorant les paramètres tels que "?id=3"
// $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Selon la valeur de "$uri", on entre dans un des cas du switch :
  // switch ($uri) {
  //   case '/':
  //     require __DIR__ . '/../views/home.php';
  //     break;
  //   case '/':
  //     require __DIR__ .'/../controllers';
  //     break;
  //     case '/':
  //       require __DIR__ .'/../models';
  //       break;
  //   default:
  //     http_response_code(404);
  //     echo "Page non trouvée";
  //     break;
  // }
