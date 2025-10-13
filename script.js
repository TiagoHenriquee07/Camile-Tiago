const galleryData = [
    { 
        image: 'foto1.jpg', 
        caption: 'Encontro Estelar', 
        message: 'Como duas galáxias em colisão, nossas almas se encontraram em uma dança cósmica que mudou o universo para sempre.' 
    },
    { 
        image: 'foto2.jpg', 
        caption: 'Órbita Perfeita', 
        message: 'Encontrei em você a gravidade que mantém meus pés no chão e minha alma nas estrelas.' 
    },
    { 
        image: 'foto3.jpg', 
        caption: 'Supernova do Amor', 
        message: 'Seu amor é como uma supernova - explosivo, brilhante e capaz de iluminar até as noites mais escuras.' 
    },
    { 
        image: 'foto4.jpg', 
        caption: 'Via Láctea do Sorriso', 
        message: 'Seu sorriso é minha Via Láctea particular - uma faixa de luz que guia meus passos no universo.' 
    },
    { 
        image: 'foto5.jpg', 
        caption: 'Eclipse dos Corações', 
        message: 'Como um eclipse total, você cobriu completamente minha vida com sua luz, tornando tudo mais belo.' 
    },
    { 
        image: 'foto6.jpg', 
        caption: 'Nebulosa do Carinho', 
        message: 'Seu abraço é como uma nebulosa - aconchegante, colorido e cheio de novas possibilidades.' 
    },
    { 
        image: 'foto7.jpg', 
        caption: 'Constelação do Amor', 
        message: 'Juntos formamos nossa própria constelação, onde cada estrela é um momento especial que vivemos.' 
    },
    { 
        image: 'foto8.jpg', 
        caption: 'Buraco Negro da Paixão', 
        message: 'Seu amor é como um buraco negro - irresistível, poderoso e do qual nunca quero escapar.' 
    },
    { 
        image: 'foto9.jpg', 
        caption: 'Aurora Boreal do Afeto', 
        message: 'Seu carinho dança em minha vida como uma aurora boreal - colorido, mágico e inesquecível.' 
    },
    { 
        image: 'foto10.jpg', 
        caption: 'Cometa da Felicidade', 
        message: 'Como um cometa raro, você iluminou minha vida com uma beleza que só aparece uma vez na existência.' 
    },
    { 
        image: 'foto11.jpg', 
        caption: 'Planeta do Conforto', 
        message: 'Em seus braços encontrei meu planeta particular - um lugar seguro no vasto universo da vida.' 
    },
    { 
        image: 'foto12.jpg', 
        caption: 'Estrela Cadente do Destino', 
        message: 'Nosso amor foi escrito nas estrelas cadentes - rápido, brilhante e com um pedido que se realizou.' 
    },
    { 
        image: 'foto13.jpg', 
        caption: 'Galáxia do Romance', 
        message: 'Cada beijo seu é como descobrir uma nova galáxia - misteriosa, fascinante e cheia de maravilhas.' 
    },
    { 
        image: 'foto14.jpg', 
        caption: 'Satélite Natural', 
        message: 'Você é minha lua - sempre presente, iluminando minhas noites e controando as marés do meu coração.' 
    },
    { 
        image: 'foto15.jpg', 
        caption: 'Quasar da Paixão', 
        message: 'Seu amor emana energia como um quasar - intensa, poderosa e visível em todo o universo.' 
    },
    { 
        image: 'foto16.jpg', 
        caption: 'Anel Planetário', 
        message: 'Nosso amor forma anéis como os de Saturno - belos, complexos e eternamente em órbita.' 
    },
    { 
        image: 'foto17.jpg', 
        caption: 'Nebulosa da Esperança', 
        message: 'Em seus olhos vejo nebulosas de esperança se formando, criando novas estrelas de felicidade.' 
    },
    { 
        image: 'foto18.jpg', 
        caption: 'Agrupamento Estelar', 
        message: 'Nossos momentos juntos formam um agrupamento estelar - cada memória brilha mais forte quando estamos perto.' 
    },
    { 
        image: 'foto19.jpg', 
        caption: 'Expansão Cósmica', 
        message: 'Nosso amor se expande como o universo - sempre crescendo, sempre descobrindo novos horizontes.' 
    },
    { 
        image: 'foto20.jpg', 
        caption: 'Universo Paralelo', 
        message: 'Com você, vivo em um universo paralelo onde só existem amor, luz e felicidade infinita.' 
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupModal();
    setupHeaderNavigation();
    setupSmoothScrolling();
    setupMobileNavigation();
    setupMusicControls();
    setupAnimations();
    createShootingStars();
    typeWriterEffect();
    preloadImages();
});

// Galeria Masonry
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Embaralhar as fotos para efeito mais orgânico
    const shuffledData = [...galleryData].sort(() => Math.random() - 0.5);
    
    shuffledData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });
}

function createGalleryItem(item, index) {
    const itemElement = document.createElement('div');
    itemElement.className = 'masonry-item';
    itemElement.setAttribute('data-index', index);
    
    // Adicionar delay aleatório para animação
    const delay = Math.random() * 0.5;
    itemElement.style.animationDelay = `${delay}s`;
    
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.caption}" class="masonry-image" loading="lazy">
        <div class="masonry-overlay">
            <p class="masonry-caption">${item.caption}</p>
            <div class="click-hint">
                <span>Clique para mensagem cósmica</span>
            </div>
        </div>
    `;
    
    itemElement.addEventListener('click', () => showLoveMessage(item.message));
    
    return itemElement;
}

// Controles de Música (Função Simplificada e Corrigida)
function setupMusicControls() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (musicToggle && backgroundMusic) {
        backgroundMusic.volume = 0.3; // Define o volume

        musicToggle.addEventListener('click', function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play().catch(e => {
                    console.error("Erro ao tentar tocar a música:", e);
                });
                musicToggle.classList.add('playing');
                musicToggle.querySelector('.music-text').textContent = 'Música: Ligada';
            } else {
                backgroundMusic.pause();
                musicToggle.classList.remove('playing');
                musicToggle.querySelector('.music-text').textContent = 'Música: Desligada';
            }
        });
    }
}


// Modal de Frases de Amor
function setupModal() {
    const modal = document.getElementById('loveModal');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (closeModal) {
        closeModal.addEventListener('click', closeLoveModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeLoveModal);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLoveModal();
        }
    });
}

function showLoveMessage(message) {
    const modal = document.getElementById('loveModal');
    const loveMessage = document.getElementById('loveMessage');
    
    if (!modal || !loveMessage) {
        console.error('Modal elements not found');
        return;
    }
    
    loveMessage.textContent = message;
    modal.classList.add('active');
    
    // Desabilitar scroll da página
    document.body.style.overflow = 'hidden';
    
    // Efeito de partículas estelares
    createStarParticles();
}

function closeLoveModal() {
    const modal = document.getElementById('loveModal');
    
    if (modal) {
        modal.classList.remove('active');
        
        // Reabilitar scroll da página
        document.body.style.overflow = 'auto';
        
        // Voltar para a galeria
        setTimeout(() => {
            const gallerySection = document.getElementById('galeria');
            if (gallerySection) {
                gallerySection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 300);
    }
}

// Navegação do Header
function setupHeaderNavigation() {
    const homeLogo = document.getElementById('homeLogo');
    
    if (homeLogo) {
        homeLogo.addEventListener('click', scrollToTop);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll Suave
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navegação Mobile
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar nos links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Animações
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.masonry-item, .timeline-item, .quote-card, .message-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Estrelas Cadentes
function createShootingStars() {
    const shootingStars = document.querySelector('.shooting-stars');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createShootingStar(shootingStars);
        }, i * 3000);
    }
    
    setInterval(() => {
        createShootingStar(shootingStars);
    }, 8000);
}

function createShootingStar(container) {
    const star = document.createElement('div');
    star.style.cssText = `
        position: absolute;
        background: linear-gradient(90deg, transparent, white, transparent);
        width: ${Math.random() * 80 + 40}px;
        height: 2px;
        top: ${Math.random() * 100}%;
        left: -100px;
        animation: shootingStar ${Math.random() * 3 + 5}s linear forwards;
        opacity: 0;
    `;
    
    container.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 8000);
}

// Efeito de Partículas Estelares no Modal
function createStarParticles() {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;
    
    // Limpar partículas anteriores
    const existingParticles = modalContent.querySelectorAll('.star-particle');
    existingParticles.forEach(particle => particle.remove());
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'star-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: white;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: starTwinkle ${Math.random() * 2 + 1}s ease-in-out infinite;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            
            modalContent.appendChild(particle);
        }, i * 100);
    }
}

// Efeito de digitação no subtítulo
function typeWriterEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Preload de imagens
function preloadImages() {
    galleryData.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });
}

// Highlight menu ativo ao scroll
window.addEventListener('scroll', highlightActiveMenu);

function highlightActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Adicionar animação CSS para partículas
if (!document.querySelector('#starAnimations')) {
    const style = document.createElement('style');
    style.id = 'starAnimations';
    style.textContent = `
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shootingStar {
            0% {
                transform: translateX(0) translateY(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateX(calc(100vw + 200px)) translateY(200px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

console.log('🌌 Site cósmico carregado com sucesso!');