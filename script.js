const music = document.getElementById("background-music");
const musicControl = document.getElementById("music-control");

// Función para iniciar la experiencia y ocultar el recuadro de bienvenida
function startExperience() {
    document.getElementById("welcome-overlay").style.display = "none";
    if (music.paused) {
        music.play().catch(error => console.error('No se pudo reproducir la música:', error));
    }
}

// Función para iniciar la cuenta regresiva
function startCountdown() {
    const weddingDate = new Date("2025-02-22T12:30:00");
    const countdownElements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    function updateCountdown() {
        const now = new Date();
        const timeDifference = weddingDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElements.days.innerText = String(days).padStart(2, '0');
            countdownElements.hours.innerText = String(hours).padStart(2, '0');
            countdownElements.minutes.innerText = String(minutes).padStart(2, '0');
            countdownElements.seconds.innerText = String(seconds).padStart(2, '0');
        } else {
            countdownElements.days.innerText = "00";
            countdownElements.hours.innerText = "00";
            countdownElements.minutes.innerText = "00";
            countdownElements.seconds.innerText = "00";
        }
    }

    setInterval(updateCountdown, 1000);
}

// Función para alternar la música
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        musicControl.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Función para el formulario RSVP
function submitForm(event) {
    event.preventDefault();
    alert("Gracias por confirmar tu asistencia. ¡Te esperamos!");
}

// Función para el botón de enlace de WhatsApp en RSVP
function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const confirmation = document.getElementById("confirmation").value;
    const restrictions = document.getElementById("restrictions").value || "Sin restricciones alimentarias";
    const message = document.getElementById("message").value || "";

    const noviaWhatsAppNumber = "56998590466"; // Número en formato internacional

    // Verifica si los datos se obtienen correctamente
    console.log("Datos del formulario:", { name, email, phone, confirmation, restrictions, message });

    const whatsappMessage = `Hola, soy ${name}. Confirmación: ${confirmation}. Teléfono: ${phone}. Email: ${email}. Restricciones: ${restrictions}. Mensaje: ${message}`;

    const whatsappURL = `https://wa.me/${noviaWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    console.log("Enlace generado para WhatsApp:", whatsappURL);

    // Abre el enlace en una nueva ventana/pestaña
    window.open(whatsappURL, "_blank");
}


// Función para alternar la visibilidad de los detalles de regalos
function toggleGiftDetails() {
    const giftDetails = document.getElementById("gift-details");
    giftDetails.classList.toggle("show");
}

// Enlace de Playlist de YouTube
function openYouTube() {
        // Reemplaza 'PL_ID_DE_TU_PLAYLIST' con el ID de tu playlist de YouTube
        window.open("https://youtube.com/playlist?list=PLv7ed5wMEp1rYJa9oDXocU3-SiDZnW2Oj&jct=ig1Fg7eTZ65ir43_gr9MkA", "_blank");
    }

// Playlist Spotify
function openSpotify() {
    window.open("https://open.spotify.com/playlist/1lIxwJT9hg9B3QYN0BqFNu?si=f4595a183dc94215", "_blank");
} 

// Control del Slider de Imágenes
let currentSlide = 0;
const slideIntervalTime = 3000;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index >= totalSlides) ? 0 : (index < 0) ? totalSlides - 1 : index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
    startAutoSlide();
    document.querySelector('.prev').addEventListener('click', () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });
    document.querySelector('.next').addEventListener('click', () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });
});

// Iniciar la cuenta regresiva
startCountdown();
