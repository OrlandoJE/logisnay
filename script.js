// Para la animacion de la barra de navegacion
// Obtén la barra de navegación
const navbar = document.querySelector('.navbar');

// Agrega un evento de desplazamiento para controlar el cambio de tamaño
window.addEventListener('scroll', () => {
    // Verifica la posición de desplazamiento
    if (window.scrollY > 100) { // Cambia 100 a la cantidad de desplazamiento en píxeles en la que deseas que ocurra el cambio
        navbar.classList.add('scroll-shrink'); // Agrega una clase para reducir el tamaño
    } else {
        navbar.classList.remove('scroll-shrink'); // Remueve la clase si el desplazamiento es menor
    }
});

const navbarhr = document.querySelector('.hr');

// Agrega un evento de desplazamiento para controlar el cambio de tamaño
window.addEventListener('scroll', () => {
    // Verifica la posición de desplazamiento
    if (window.scrollY > 100) { // Cambia 100 a la cantidad de desplazamiento en píxeles en la que deseas que ocurra el cambio
        navbarhr.classList.add('scroll-shrink'); // Agrega una clase para reducir el tamaño
    } else {
        navbarhr.classList.remove('scroll-shrink'); // Remueve la clase si el desplazamiento es menor
    }
});

// Preguntas frecuentes //
document.addEventListener("DOMContentLoaded", function () {
    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click", function () {
            const parentLi = pregunta.parentElement;
            const respuesta = parentLi.querySelector(".respuesta");

            parentLi.classList.toggle("active");

            if (parentLi.classList.contains("active")) {
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                respuesta.style.maxHeight = "0";
            }
        });
    });
});

// Animacion scroll //
// Función para manejar la animación de fade-in en todos los elementos con la clase "box"
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el elemento es visible en el viewport
            entry.target.style.opacity = "1";
        }
    });
}

// Configuración del Intersection Observer
const options = {
    root: null, // Use el viewport como el elemento de referencia
    rootMargin: "0px", // Sin margen adicional
    threshold: 0.1 // Reduce el valor a 0.1 (10% del elemento visible)
};


// Crear una instancia del Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observar todos los elementos
const boxes = document.querySelectorAll("*");
boxes.forEach(box => {
    observer.observe(box);
});

// Menu desplegable //
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".barrasMenu");
    const menu = document.querySelector(".menuDesplegable");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("menuOpen");
    });
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;

    var mailtoLink = 'mailto:fabian.hernandez@logisnay.com?subject=' + encodeURIComponent('Página Web Logisnay') +
        '&body=' + encodeURIComponent(nombre + ' ' + apellido + '\nTeléfono: ' + tel + '\nCorreo Electrónico: ' + email + '\n\n Asunto del Cliente: \n' + asunto);

    window.location.href = mailtoLink;
});