<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
    <style>
        /* General */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color:green;
    color: #333;
    line-height: 1.6;
}

header {
    background-color:green;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    font-family: 'Trebuchet MS', sans-serif;
    margin-bottom: 10px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 10px;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: green
}

main h2 {
    font-size: 2rem;
    color: #d32f2f;
    margin-bottom: 15px;
}

main p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

main img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    margin-top: 20px;
}

footer p {
    margin: 0;
    font-size: 1rem;
}

footer .social-links {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-top: 10px;
}

footer .social-links li {
    margin: 0 10px;
}

footer .social-links li a img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s;
}

footer .social-links li a img:hover {
    transform: scale(1.2);
}

nav ul li a.login-link {
    color: #ffeb3b; /* Color destacado */
    font-weight: bold;
}

nav ul li a.login-link:hover {
    color: #ffd700; /* Efecto hover */
    text-decoration: underline;
}

    </style>
</head>
<body>
<header>
<h1>Bienvenidos a Nuestro Restaurante Mexicano </h1>
 <nav>
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <li><a href="about.php">Menú</a></li>
            <li><a href="contact.php">Reservaciones</a></li>
            <li><a href="aboutUs.html">Sobre Nosotros</a></li>
            <li><a href="pidaya.html">Pida ya</a></li>
            <?php if (isset($_SESSION['usuario'])): ?>
                <li><a href="logout.php">Cerrar Sesión</a></li>
            <?php else: ?>
                <li><a href="login.php">Iniciar Sesión</a></li>
            <?php endif; ?>
        </ul>
    </nav>
</header>
<main>
        <section>
            <h2>Nuestra Especialidad</h2>
            <p>Disfruta de auténtica comida mexicana en un ambiente acogedor.</p>
        </section>
        <section>
            <h2>Galería</h2>
            <img src="FondeDelindex1.jpg" alt="Platillo Típico">
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Restaurante Mexicano</p>
    <ul class="social-links">
        <li><a href="https://www.instagram.com" target="_blank"><img src="instagram-icon.png" alt="Instagram"></a></li>
        <li><a href="https://www.facebook.com" target="_blank"><img src="facebook-icon.png" alt="Facebook"></a></li>
        <li><a href="https://www.tiktok.com" target="_blank"><img src="tiktok-icon.png" alt="TikTok"></a></li>
    </ul>
    </footer>
</body>
</html>

