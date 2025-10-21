// Dados da galeria
const galleryData = [
    { image: 'img/eueela.png', caption: 'Nossa Conexão', message: 'Dois corações batendo como um só' },
    { image: 'img/image.png', caption: 'Momento Especial', message: 'Cada instante contigo é único' },
    { image: 'img/img2.jpeg', caption: 'Risos Compartilhados', message: 'A alegria que encontro no seu sorriso' },
    { image: 'img/img3.jpeg', caption: 'Aventuras Juntos', message: 'Explorando o mundo de mãos dadas' },
    { image: 'img/img4.jpeg', caption: 'Olhares que Encantam', message: 'Nos seus olhos encontro meu lar' },
    { image: 'img/img5.jpeg', caption: 'Momentos de Doçura', message: 'A suavidade do nosso amor' },
    { image: 'img/img6.jpeg', caption: 'Conexão Eterna', message: 'Almas gêmeas em sintonia perfeita' },
    { image: 'img/img7.jpeg', caption: 'Sorrisos Sinceros', message: 'A felicidade que transborda' },
    { image: 'img/img8.jpeg', caption: 'Parceria de Vida', message: 'Juntos em cada desafio' },
    { image: 'img/img9.jpeg', caption: 'Amor em Cada Detalhe', message: 'Nos pequenos gestos, o amor maior' },
    { image: 'img/img10.jpeg', caption: 'Constelação do Amor', message: 'Nossa história escrita nas estrelas' },
    { image: 'img/img12.jpeg', caption: 'Abraços que Aconchegam', message: 'No seu abraço, encontro paz' },
    { image: 'img/img13.jpeg', caption: 'Sonhos Compartilhados', message: 'Construindo nosso futuro' },
    { image: 'img/img15.jpeg', caption: 'Alegrias Multiplicadas', message: 'A felicidade é maior ao seu lado' },
    { image: 'img/img16.jpeg', caption: 'Momentos Únicos', message: 'Memórias que guardo no coração' },
    { image: 'img/img17.jpeg', caption: 'Cumplicidade Eterna', message: 'Sócios na vida e no amor' },
    { image: 'img/img18.jpeg', caption: 'Paixão que Persiste', message: 'O fogo que nunca se apaga' },
    { image: 'img/img19.jpeg', caption: 'Dois Corações', message: 'Batendo no mesmo ritmo' },
    { image: 'img/img20.jpeg', caption: 'Jornada de Amor', message: 'Cada passo dado juntos' },
    { image: 'img/img21.jpeg', caption: 'Eternidade em Olhares', message: 'O infinito nos seus olhos' },
    { image: 'img/img22.jpeg', caption: 'Harmonia Perfeita', message: 'Dois seres, uma só alma' },
    { image: 'img/img23.jpeg', caption: 'Amor que Transforma', message: 'Você mudou meu universo' }
];

// Dados dos pets
const petImages = [
    './img/ig7.jpeg', './img/ig15.jpeg', './img/ig3.jpeg', './img/ig11.jpeg',
    './img/bob.jpeg', './img/bob2.jpeg', './img/ig9.jpeg', './img/ig5.jpeg',
    './img/ig14.jpeg', './img/ig2.jpeg', './img/ig16.jpeg', './img/ig8.jpeg',
    './img/ig12.jpeg', './img/ig6.jpeg', './img/ig17.jpeg', './img/ig10.jpeg',
    './img/ig4.jpeg', './img/ig13.jpeg', './img/ig1.jpeg'
];

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    initializeGallery();
    initializePetsGallery();
    setupEntry();
    setupAnimations();
    setupTogetherTimer();
    preloadImages();
    setupLetterBalloon();
    setupLoginModal();
    setupSmoothScrolling();
});

// Função para o balão da carta
function setupLetterBalloon() {
    const balloon = document.getElementById('letterBalloon');
    const loginModal = document.getElementById('loginModal');

    if (balloon && loginModal) {
        balloon.addEventListener('click', function () {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
}

// Função para o modal de login

function setupLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');

    // Fechar modal 
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }


    // Processar formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Verificar credenciais
            if (username.toLowerCase() === 'camiletiago' && password === '23112024') {
                //  abrir carta em nova aba
                window.open('carta.html', '_blank');
                loginModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                loginForm.reset();
            } else {
                // Credenciais incorretas
                alert('Usuário ou senha incorretos. Tente novamente.');
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
            }
        });
    }
}


// Processar formulário de login
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar credenciais
        if (username.toLowerCase() === 'camiletiago' && password === '23112024') {
            window.open('carta.html', '_blank');
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            loginForm.reset();
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    });
}


// Inicializar galeria
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    galleryData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });
}

function createGalleryItem(item, index) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'masonry-item';
    itemDiv.style.animationDelay = `${index * 0.1}s`;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.caption;
    img.className = 'masonry-image';
    img.loading = 'lazy';

    img.onload = function () {
        img.classList.add('loaded');
    };

    const overlay = document.createElement('div');
    overlay.className = 'masonry-overlay';

    const caption = document.createElement('div');
    caption.className = 'masonry-caption';
    caption.textContent = item.caption;

    const message = document.createElement('div');
    message.className = 'masonry-message';
    message.textContent = item.message;

    overlay.appendChild(caption);
    overlay.appendChild(message);
    itemDiv.appendChild(img);
    itemDiv.appendChild(overlay);

    itemDiv.addEventListener('click', function () {
        this.classList.toggle('active');
    });

    return itemDiv;
}

// Inicializar galeria de pets
function initializePetsGallery() {
    const petsGrid = document.getElementById('petsGrid');
    if (!petsGrid) return;

    petsGrid.innerHTML = '';

    petImages.forEach((imageSrc, index) => {
        const petItem = document.createElement('div');
        petItem.className = 'pet-item';
        petItem.style.animationDelay = `${index * 0.1}s`;

        const petImage = document.createElement('img');
        petImage.src = imageSrc;
        petImage.alt = 'Nossos momentos especiais';
        petImage.className = 'pet-image';
        petImage.loading = 'lazy';

        petImage.onload = function () {
            petImage.classList.add('loaded');
        };

        petItem.appendChild(petImage);
        petsGrid.appendChild(petItem);
    });
}

// Configurar entrada
function setupEntry() {
    const entryOverlay = document.getElementById('entryOverlay');
    const enterButton = document.getElementById('enterButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (enterButton && entryOverlay) {
        enterButton.addEventListener('click', () => {
            entryOverlay.style.opacity = '0';
            setTimeout(() => {
                entryOverlay.style.display = 'none';
                if (backgroundMusic) {
                    backgroundMusic.volume = 0.3;
                    backgroundMusic.play().catch(e => {
                        console.log('Reprodução automática bloqueada');
                    });
                }
            }, 1000);
        });
    }
}

// Configurar animações
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.masonry-item, .timeline-item, .quote-card, .message-card, .pet-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Configurar scroll suave
function setupSmoothScrolling() {
    const cosmicScroll = document.querySelector('.cosmic-scroll');
    if (cosmicScroll) {
        cosmicScroll.addEventListener('click', function (e) {
            e.preventDefault();
            const fraseSection = document.getElementById('frase');
            if (fraseSection) {
                fraseSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Configurar timer

function setupTogetherTimer() {
    const countdownContainer = document.getElementById('countdown');
    if (!countdownContainer) return;


    const startDate = new Date('2024-11-23T00:00:00');

    function updateTimer() {
        const now = new Date();
        const diff = startDate - now;
        if (diff <= 0) {

            const timeTogether = now - startDate;
            const years = Math.floor(timeTogether / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((timeTogether % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((timeTogether % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeTogether % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeTogether % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeTogether % (1000 * 60)) / 1000);

            countdownContainer.innerHTML = `
                <div class="countdown-block">
                    <div class="countdown-number">${years}</div>
                    <div class="countdown-label">Anos</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${months}</div>
                    <div class="countdown-label">Meses</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${days}</div>
                    <div class="countdown-label">Dias</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${hours}</div>
                    <div class="countdown-label">Horas</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${minutes}</div>
                    <div class="countdown-label">Minutos</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${seconds}</div>
                    <div class="countdown-label">Segundos</div>
                </div>
            `;
        } else {
            // Se ainda não chegou na data, mostrar contagem regressiva
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownContainer.innerHTML = `
                <div class="countdown-block">
                    <div class="countdown-number">${days}</div>
                    <div class="countdown-label">Dias</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${hours}</div>
                    <div class="countdown-label">Horas</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${minutes}</div>
                    <div class="countdown-label">Minutos</div>
                </div>
                <div class="countdown-block">
                    <div class="countdown-number">${seconds}</div>
                    <div class="countdown-label">Segundos</div>
                </div>
            `;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}
// Pré-carregar imagens
function preloadImages() {
    galleryData.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });

    petImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}