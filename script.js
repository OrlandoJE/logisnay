// Animacion scroll //
window.onload = function () {

    // Función para manejar la animación de fade-in en todos los elementos
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

}

// Menu desplegable //
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".barrasMenu");
    const menu = document.querySelector(".menuDesplegable");

    menuButton.addEventListener("click", function () {
        this.classList.toggle("active");
        menu.classList.toggle("menuOpen");
    });
});


// Formulario de contacto //
let contactanosSection = document.querySelector('#contacto');
if (contactanosSection) {
    document.getElementById('formulario').addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var asunto = document.getElementById('asunto').value;

        var mailtoLink = 'mailto:fabian.hernandez@logisnay.com?subject=' + encodeURIComponent('Página Web Logisnay') +
            '&body=' + encodeURIComponent('De:\n' + nombre + ' ' + apellido + '\nTeléfono: ' + tel + '\nCorreo Electrónico: ' + email + '\n\n Asunto del Cliente: \n' + asunto);

        window.location.href = mailtoLink;
    });
}

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

// En la página de servicios
document.querySelectorAll('li > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        var subject = this.querySelector('span').innerText;
        if (subject.includes('Seleccionar ')) {
            subject = subject.replace('Seleccionar ', '');
        }
        localStorage.setItem('subject', subject);
    });
});

// En la página de contacto
window.addEventListener('DOMContentLoaded', (event) => {
    var subject = localStorage.getItem('subject');
    if (subject) {
        document.getElementById('asunto').value = subject;
        localStorage.removeItem('subject');
    }
});