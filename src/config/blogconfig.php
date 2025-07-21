<?php
return [
    'host'     => $_ENV['DB_HOST'] ?? 'localhost',
    'port'     => 3306,
    'dbname'   => $_ENV['DB_NAME'] ?? 'boulangerie',
    'charset'  => 'utf8mb4',
    'user'     => $_ENV['DB_USER'] ?? 'root',
    'password' => $_ENV['DB_PASSWORD'] ?? '',
    'options'  => [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
];
