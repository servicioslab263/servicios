// JavaScript para funcionalidad básica de la landing page

document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Cerrar menú móvil al hacer click en un enlace
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
  
  // Animaciones al hacer scroll
  const animateElements = document.querySelectorAll('.fade-in-up');
  
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Scroll reveal for .reveal-up elements
  const revealElements = document.querySelectorAll('.reveal-up');
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  
  // Animación de contadores para estadísticas
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };
    
    updateCounter();
  }
  
  // Iniciar animación de contadores cuando se vean en pantalla
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberElement = entry.target.querySelector('.number');
        if (numberElement) {
          const target = parseInt(numberElement.textContent);
          if (!isNaN(target)) {
            animateCounter(numberElement, target);
            statsObserver.unobserve(entry.target);
          }
        }
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
  });
});
// Clase para manejar el lightbox de la galería
class Lightbox {
  constructor() {
    this.lightbox = document.createElement('div');
    this.lightbox.className = 'lightbox';
    this.lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-img" src="" alt="">
        <div class="lightbox-caption"></div>
        <button class="lightbox-prev">&#10094;</button>
        <button class="lightbox-next">&#10095;</button>
      </div>
    `;
    document.body.appendChild(this.lightbox);
    
    this.currentIndex = 0;
    this.images = [];
    
    this.bindEvents();
  }
  
  bindEvents() {
    const closeBtn = this.lightbox.querySelector('.lightbox-close');
    const prevBtn = this.lightbox.querySelector('.lightbox-prev');
    const nextBtn = this.lightbox.querySelector('.lightbox-next');
    const img = this.lightbox.querySelector('.lightbox-img');
    const caption = this.lightbox.querySelector('.lightbox-caption');
    
    closeBtn.addEventListener('click', () => this.close());
    prevBtn.addEventListener('click', () => this.prev());
    nextBtn.addEventListener('click', () => this.next());
    
    // Cerrar al hacer click fuera de la imagen
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      switch(e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
      }
    });
  }
  
  open(index, images) {
    this.currentIndex = index;
    this.images = images;
    this.updateDisplay();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll detrás del lightbox
  }
  
  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateDisplay();
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateDisplay();
  }
  
  updateDisplay() {
    const img = this.lightbox.querySelector('.lightbox-img');
    const caption = this.lightbox.querySelector('.lightbox-caption');
    
    img.src = this.images[this.currentIndex].src;
    img.alt = this.images[this.currentIndex].alt;
    caption.textContent = this.images[this.currentIndex].caption || '';
  }
}

// Inicializar lightbox para la galería
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = new Lightbox();
  
  // Encontrar todas las imágenes de la galería
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        return {
          src: img.src,
          alt: img.alt,
          caption: caption ? caption.textContent : ''
        };
      });
      
      lightbox.open(index, images);
    });
  });
});