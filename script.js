// Configuração e inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupLinkInteractions();
    setupSocialLinks();
    setupContactInteractions();
    setupAnimations();
    setupThemeToggle();
    setupFormValidation();
}

// Interações dos links principais
function setupLinkInteractions() {
    const linkItems = document.querySelectorAll('.link-item');
    
    linkItems.forEach((item, index) => {
        // Adiciona delay na animação baseado no índice
        item.style.animationDelay = `${index * 0.1}s`;
        
        // Adiciona evento de clique
        item.addEventListener('click', function() {
            handleLinkClick(this);
        });
        
        // Adiciona efeito de ripple
        item.addEventListener('mousedown', function(e) {
            createRippleEffect(this, e);
        });
        
        // Adiciona suporte para teclado
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLinkClick(this);
            }
        });
        
        // Torna o item focável
        item.setAttribute('tabindex', '0');
    });
}

function handleLinkClick(linkItem) {
    const category = linkItem.getAttribute('data-category');
    
    // Adiciona classe de loading
    linkItem.classList.add('loading');
    
    // Simula carregamento
    setTimeout(() => {
        linkItem.classList.remove('loading');
        
        // Ações baseadas na categoria
        switch(category) {
            case 'badge':
                window.open('https://www.credly.com/users/luiz-carlos-de-araujo-machado', '_blank');
                break;
            case 'portfolio':
                window.open('https://github.com/Luizsaw?tab=repositories', '_blank');
                break;
            case 'curriculo':
                window.open('https://drive.google.com/file/d/1EXDl1HncSPZ5jx2v_53ydkBTtG3-KX8h/view?usp=sharing', '_blank');
                break;
            case 'contact':
                openContactModal();
                break;
            default:
                console.log('Link clicado:', category);
        }
    }, 300);
}

function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Configuração dos links sociais
function setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-platform');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleSocialClick(platform);
        });
        
        // Adiciona tooltip
        link.setAttribute('title', `Visite meu perfil no ${platform}`);
    });
}

function handleSocialClick(platform) {
    const urls = {
        linkedin: 'https://www.linkedin.com/in/luiz-machado-57366a174/',
        github: 'https://github.com/Luizsaw'
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank');
        trackSocialClick(platform);
    }
}

// Interações de contato
function setupContactInteractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-envelope')) {
                window.location.href = `mailto:${text}`;
            } else if (icon.classList.contains('fa-phone')) {
                window.location.href = `tel:${text.replace(/\D/g, '')}`;
            } else if (icon.classList.contains('fa-map-marker-alt')) {
                window.open(`https://maps.google.com/?q=${encodeURIComponent(text)}`, '_blank');
            }
        });
        
        // Adiciona cursor pointer
        item.style.cursor = 'pointer';
    });
}

// Animações avançadas
function setupAnimations() {
    // Intersection Observer para animações on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    document.querySelectorAll('.link-item, .social-link, .contact-item').forEach(el => {
        observer.observe(el);
    });
    
    // Animação de digitação para o título
    typewriterEffect('.profile-name', 'Luiz Carlos Machado');
}

function typewriterEffect(selector, text) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Toggle de tema
function setupThemeToggle() {
    // Cria botão de toggle de tema
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Alternar tema');
    
    // Adiciona estilos
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--gradient-primary);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition-normal);
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', toggleTheme);
    
    // Carrega tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

// Validação de formulários (para futuras expansões)
function setupFormValidation() {
    // Placeholder para validação de formulários
    console.log('Form validation setup ready');
}

// Funções utilitárias
function openContactModal() {
    // Cria modal de contato simples
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Entre em Contato</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Escolha uma forma de contato:</p>
                <div class="contact-options">
                    <a href="mailto:luizsaw@gmail.com" class="contact-option">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                    <a href="tel:+5513997073355" class="contact-option">
                        <i class="fas fa-phone"></i>
                        <span>Telefone</span>
                    </a>
                    <a href="https://wa.me/5513997073355" class="contact-option" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Adiciona estilos do modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // Fecha modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideDown 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adiciona estilos CSS dinâmicos
const dynamicStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); }
        to { transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); }
        to { transform: translateX(-50%) translateY(-100%); }
    }
    
    @keyframes ripple {
        to { transform: scale(2); opacity: 0; }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .modal-content {
        background: var(--bg-secondary);
        border-radius: 16px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .modal-header h3 {
        color: var(--text-primary);
        margin: 0;
    }
    
    .modal-close {
        background: none;
        border: none;
        color: var(--text-muted);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--transition-fast);
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
    }
    
    .contact-options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .contact-option {
        display: flex;
        align-items: center;
        padding: 1rem;
        background: var(--bg-card);
        border-radius: 12px;
        text-decoration: none;
        color: var(--text-secondary);
        transition: var(--transition-normal);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .contact-option:hover {
        background: rgba(79, 70, 229, 0.1);
        border-color: var(--primary-color);
        color: var(--text-primary);
    }
    
    .contact-option i {
        margin-right: 1rem;
        font-size: 1.2rem;
        color: var(--primary-color);
    }
    
    /* Tema claro */
    .light-theme {
        --bg-primary: #f8fafc;
        --bg-secondary: #ffffff;
        --bg-card: #f1f5f9;
        --text-primary: #1e293b;
        --text-secondary: #475569;
        --text-muted: #64748b;
    }
    
    .light-theme body::before {
        background: 
            radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.03) 0%, transparent 50%);
    }
`;

// Adiciona estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Prevenção de erros
window.addEventListener('error', function(e) {
    console.error('Erro capturado:', e.error);
});

// Service Worker (opcional para PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}

