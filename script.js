const galleryData = [
    {
        image: 'img/img23.jpeg', 
        caption: 'Encontro Estelar',
        message: 'Como duas galáxias em colisão, nossas almas se encontraram em uma dança cósmica que mudou o universo para sempre.'
    },
    {
        image: 'img/img7.jpeg', 
        caption: 'Órbita Perfeita',
        message: 'Encontrei em você a gravidade que mantém meus pés no chão e minha alma nas estrelas.'
    },
    {
        image: 'img/img4.jpeg', 
        caption: 'Supernova do Amor',
        message: 'Seu amor é como uma supernova - explosivo, brilhante e capaz de iluminar até as noites mais escuras.'
    },
    {
        image: 'img/img5.jpeg', 
        caption: 'Via Láctea do Sorriso',
        message: 'Seu sorriso é minha Via Láctea particular - uma faixa de luz que guia meus passos no universo.'
    },
    {
        image: 'img/img16.jpeg', 
        caption: 'Eclipse dos Corações',
        message: 'Como um eclipse total, você cobriu completamente minha vida com sua luz, tornando tudo mais belo.'
    },
    {
        image: 'img/img11.jpeg', 
        caption: 'Nebulosa do Carinho',
        message: 'Seu abraço é como uma nebulosa - aconchegante, colorido e cheio de novas possibilidades.'
    },
    {
        image: 'img/img14.jpeg', 
        caption: 'Constelação do Amor',
        message: 'Juntos formamos nossa própria constelação, onde cada estrela é um momento especial que vivemos.'
    },
    {
        image: 'img/img9.jpeg', 
        caption: 'Buraco Negro da Paixão',
        message: 'Seu amor é como um buraco negro - irresistível, poderoso e do qual nunca quero escapar.'
    },
    {
        image: 'img/img10.jpeg', 
        caption: 'Aurora Boreal do Afeto',
        message: 'Seu carinho dança em minha vida como uma aurora boreal - colorido, mágico e inesquecível.'
    },
    {
        image: 'img/img3.jpeg', 
        caption: 'Cometa da Felicidade',
        message: 'Como um cometa raro, você iluminou minha vida com uma beleza que só aparece uma vez na existência.'
    },
    {
        image: 'img/img12.jpeg', 
        caption: 'Planeta do Conforto',
        message: 'Em seus braços encontrei meu planeta particular - um lugar seguro no vasto universo da vida.'
    },
    {
        image: 'img/img13.jpeg', 
        caption: 'Estrela Cadente do Destino',
        message: 'Nosso amor foi escrito nas estrelas cadentes - rápido, brilhante e com um pedido que se realizou.'
    },
    {
        image: 'img/img8.jpeg', 
        caption: 'Galáxia do Romance',
        message: 'Cada beijo seu é como descobrir uma nova galáxia - misteriosa, fascinante e cheia de maravilhas.'
    },
    {
        image: 'img/img15.jpeg', 
        caption: 'Satélite Natural',
        message: 'Você é minha lua - sempre presente, iluminando minhas noites e controando as marés do meu coração.'
    },
    {
        image: 'img/img2.jpeg', 
        caption: 'Quasar da Paixão',
        message: 'Seu amor emana energia como um quasar - intensa, poderosa e visível em todo o universo.'
    },
    {
        image: 'img/img17.jpeg', 
        caption: 'Anel Planetário',
        message: 'Nosso amor forma anéis como os de Saturno - belos, complexos e eternamente em órbita.'
    },
    {
        image: 'img/img18.jpeg', 
        caption: 'Nebulosa da Esperança',
        message: 'Em seus olhos vejo nebulosas de esperança se formando, criando novas estrelas de felicidade.'
    },
    {
        image: 'img/img19.jpeg', 
        caption: 'Agrupamento Estelar',
        message: 'Nossos momentos juntos formam um agrupamento estelar - cada memória brilha mais forte quando estamos perto.'
    },
    {
        image: 'img/img20.jpeg', 
        caption: 'Expansão Cósmica',
        message: 'Nosso amor se expande como o universo - sempre crescendo, sempre descobrindo novos horizontes.'
    },
    {
        image: 'img/img22.jpeg', 
        caption: 'Universo Paralelo',
        message: 'Com você, vivo em um universo paralelo onde só existem amor, luz e felicidade infinita.'
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    initializeGallery();
    setupHeaderNavigation();
    setupSmoothScrolling();
    setupMobileNavigation();
    setupEntry();
    setupAnimations();
    setupTogetherTimer();
    preloadImages();
});

// Iniciar a galeria
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });

    // Adiciona lógica de clique para mobile
    const allItems = document.querySelectorAll('.masonry-item');
    allItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Se já está ativo, o clique o desativa
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Remove a classe de todos os outros itens
                allItems.forEach(otherItem => otherItem.classList.remove('active'));
                // Adiciona a classe apenas no item clicado
                this.classList.add('active');
            }
            e.stopPropagation(); 
        });
    });

    // Clicar em qualquer lugar fora das imagens fecha a mensagem ativa
    document.body.addEventListener('click', function() {
        allItems.forEach(item => item.classList.remove('active'));
    });
}


function createGalleryItem(item, index) {
    const itemElement = document.createElement('div');
    itemElement.className = 'masonry-item';
    itemElement.setAttribute('data-index', index);

    const delay = Math.random() * 0.5;
    itemElement.style.animationDelay = `${delay}s`;

    // efeito hover/clique
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.caption}" class="masonry-image" loading="lazy">
        <div class="masonry-overlay">
            <p class="masonry-caption">${item.caption}</p>
            <p class="masonry-message">${item.message}</p>
        </div>
    `;
    
    return itemElement;
}


function setupEntry() {
    const entryOverlay = document.getElementById('entryOverlay');
    const enterButton = document.getElementById('enterButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (enterButton && backgroundMusic && entryOverlay) {
        backgroundMusic.volume = 0.3;

        enterButton.addEventListener('click', () => {
            backgroundMusic.play().catch(e => console.error("Música bloqueada:", e));
            entryOverlay.style.opacity = '0';
            setTimeout(() => {
                entryOverlay.style.display = 'none';
            }, 1000);
        });
    }
}

// Navegação do Header
function setupHeaderNavigation() {
    const homeLogo = document.getElementById('homeLogo');
    if (homeLogo) {
        homeLogo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}

// Scroll Suave
function setupSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}


function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.masonry-item, .timeline-item, .quote-card, .timer-card, .message-card, .letter-section .message-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Preload de imagens da galeria
function preloadImages() {
    galleryData.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });
}

// Highlight do menu ativo com o scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSectionId = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// TEMPORIZADOR
function setupTogetherTimer() {
    const countdownElement = document.getElementById('countdown');
    const startDate = new Date('2024-11-23T00:00:00');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-block">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Dias</span>
            </div>
            <div class="countdown-block">
                <span class="countdown-number">${String(hours).padStart(2, '0')}</span>
                <span class="countdown-label">Horas</span>
            </div>
            <div class="countdown-block">
                <span class="countdown-number">${String(minutes).padStart(2, '0')}</span>
                <span class="countdown-label">Minutos</span>
            </div>
            <div class="countdown-block">
                <span class="countdown-number">${String(seconds).padStart(2, '0')}</span>
                <span class="countdown-label">Segundos</span>
            </div>
        `;
    }

    if (countdownElement) {
        updateTimer();
        setInterval(updateTimer, 1000);
    }
}
console.log('Site cósmico carregado com sucesso!');