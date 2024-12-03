// Autor: Diego Pazos

// Configuración de ponentes y eventos
const speakers = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'AI Research Lead',
        company: 'Tech Innovations',
        image: './assets/img/speaker1.jpg'
    },
   

const carouselImages = [
    {
        src: './assets/img/slide1.jpg',
        title: 'TechConference 2023',
        description: 'Momentos destacados de nuestra última edición'
    },
    {
        src: './assets/img/slide2.jpg',
        title: 'Networking',
        description: 'Conecta con líderes de la industria'
    },
    {
        src: './assets/img/slide3.jpg',
        title: 'Innovación',
        description: 'Descubre las últimas tendencias tecnológicas'
    }
];

// Configuración de imágenes de la galería
const galleryImages = [
    {
        src: './assets/img/gallery1.jpg',
        title: 'Imagen 1',
        description: 'Descripción de la imagen 1'
    },
    {
        src: './assets/img/gallery2.jpg',
        title: 'Imagen 2',
        description: 'Descripción de la imagen 2'
    },
    {
        src: './assets/img/gallery3.jpg',
        title: 'Imagen 3',
        description: 'Descripción de la imagen 3'
    }
    // Puedes añadir más imágenes aquí
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeComponents();
    } catch (error) {
        console.error('Error en la inicialización:', error);
    }
});

// Cargar ponentes en mosaico
function loadSpeakers() {
    const gallery = document.querySelector('.mosaic-gallery');
    
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('article');
        speakerCard.className = 'speaker-card';
        
        speakerCard.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}">
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p>${speaker.role}</p>
                <p>${speaker.company}</p>
            </div>
        `;
        
        gallery.appendChild(speakerCard);
    });
}

// Inicializar carrusel
function initCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    
    carouselImages.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        carouselItem.innerHTML = `
            <img src="${image.src}" class="d-block w-100" alt="${image.title}">
            <div class="carousel-caption">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        carouselInner.appendChild(carouselItem);
    });

    // Inicializar el carrusel de Bootstrap
    new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000,
        ride: true
    });
}

// Inicializar animaciones
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observar elementos para animación
    document.querySelectorAll('.speaker-card, .carousel-caption, .cta-button')
        .forEach(element => observer.observe(element));
}

// Efectos de scroll
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(31, 41, 55, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(31, 41, 55, 0.95)';
            navbar.style.backdropFilter = 'blur(5px)';
        }
    });
}

// Manejar formulario de registro
function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            // Aquí iría la lógica de envío del formulario
            console.log('Registro enviado');
            
            // Mostrar mensaje de éxito
            showNotification('¡Registro exitoso! Te contactaremos pronto.');
        } catch (error) {
            console.error('Error en el registro:', error);
            showNotification('Hubo un error en el registro. Por favor, intenta nuevamente.', 'error');
        }
    });
}

// Utilidad para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para manejar el zoom de imágenes
function initImageZoom() {
    // Crear el modal de zoom
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    document.body.appendChild(zoomModal);

    // Manejar click en imágenes de galerías
    document.querySelectorAll('.mosaic-item img, .gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            zoomModal.innerHTML = '';
            zoomModal.appendChild(modalImg);
            zoomModal.classList.add('active');
        });
    });

    // Cerrar modal al hacer click
    zoomModal.addEventListener('click', function() {
        this.classList.remove('active');
    });
}

// Función para cargar la galería
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = ''; // Limpiar la galería existente
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}
  

// Función para mostrar el botón de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/56948181288';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'floating-whatsapp';
    whatsappButton.innerHTML = '<i class="ri-whatsapp-line"></i>';
    document.body.appendChild(whatsappButton);
});
