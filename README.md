# Página de Links Profissional

Página de links responsiva e interativa para apresentar seus perfis profissionais e redes sociais de forma elegante.

## Características

- **Design Moderno**: Interface limpa com gradientes e animações suaves
- **Totalmente Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema Claro/Escuro**: Alternância entre temas com um clique
- **Animações Interativas**: Efeitos hover, transições e micro-interações
- **Acessibilidade**: Suporte a navegação por teclado e leitores de tela
- **Personalizável**: Fácil de customizar cores, conteúdo e links

## Estrutura dos Arquivos

```
pagina-links/
├── index.html          # Estrutura principal da página
├── styles.css          # Estilos e design responsivo
├── script.js           # Interatividade e funcionalidades
├── Assets              # Foto do perfil
└── README.md           # Esta documentação
```

## Personalização

### 1. Informações Pessoais

Edite o arquivo `index.html` para personalizar:

- **Nome**: Altere "Luiz Carlos Machado" na linha 20
- **Título**: Modifique "Desenvolvedor de Sistemas" na linha 21
- **Bio**: Personalize a descrição na linha 22
- **Foto de Perfil**: Substitua a URL na linha 18

### 2. Links Principais

Modifique os links principais editando as seções `.link-item` no HTML:

```html
<div class="link-item" data-category="portfolio">
    <i class="fas fa-briefcase"></i>
    <div class="link-content">
        <h3>Seu Título</h3>
        <p>Sua descrição</p>
    </div>
    <i class="fas fa-external-link-alt link-arrow"></i>
</div>
```

### 3. Redes Sociais

Atualize os links das redes sociais no arquivo `script.js`, na função `handleSocialClick`:

```javascript
const urls = {
    linkedin: 'https://linkedin.com/in/seu-perfil',
    github: 'https://github.com/seu-usuario',
    // ... outros links
};
```

### 4. Informações de Contato

Edite as informações de contato no HTML:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>seu-email@exemplo.com</span>
</div>
```

### 5. Cores e Tema

Personalize as cores editando as variáveis CSS no arquivo `styles.css`:

```css
:root {
    /* Paleta principal */
    --primary-color: #3b82f6;
    --primary-dark: #1e40af;
    --primary-light: #60a5fa;

    /* Secundária */
    --secondary-color: #10b981;
    --accent-color: #fbbf24;
    /* ... outras variáveis */
}
```

## Funcionalidades

### Interatividade dos Links

- **Clique**: Cada link principal executa uma ação específica
- **Hover**: Efeitos visuais ao passar o mouse
- **Teclado**: Navegação completa via teclado (Tab, Enter, Espaço)
- **Ripple Effect**: Efeito de ondulação ao clicar

### Tema Claro/Escuro

- Botão no canto superior direito para alternar temas
- Preferência salva no localStorage
- Transições suaves entre temas

### Modal de Contato

- Link "Entre em Contato" abre um modal com opções
- Integração com email, telefone e WhatsApp
- Fechamento por clique fora ou botão X

## Responsividade

A página se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Ajustes no grid das redes sociais
- **Mobile**: Layout otimizado para telas pequenas

### Breakpoints

- `640px`: Ajustes para tablets
- `480px`: Otimizações para smartphones

## Como Usar

1. **Personalização**: Edite os arquivos conforme suas necessidades
2. **Teste Local**: Abra `index.html` em qualquer navegador
3. **Hospedagem**: Faça upload dos arquivos para seu servidor web
4. **Domínio**: Configure seu domínio personalizado (opcional)

## Hospedagem Sugerida

### Opções Gratuitas
- **GitHub Pages**: Ideal para projetos open source
- **Netlify**: Deploy automático e domínio personalizado
- **Vercel**: Otimizado para performance
- **Firebase Hosting**: Integração com outros serviços Google

### Opções Pagas
- **Hostinger**: Hospedagem compartilhada econômica
- **DigitalOcean**: VPS para maior controle
- **AWS S3**: Hospedagem estática escalável

## Customizações Avançadas

### Adicionar Novos Links

1. Copie uma seção `.link-item` existente no HTML
2. Modifique o `data-category`, ícone, título e descrição
3. Adicione a lógica correspondente no `script.js`

### Integração com Analytics

Descomente e configure o Google Analytics no `script.js`:

```javascript
// Adicione seu ID do Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');
```

### PWA (Progressive Web App)

Para transformar em PWA, adicione:

1. **Manifest**: Arquivo `manifest.json`
2. **Service Worker**: Arquivo `sw.js`
3. **Ícones**: Conjunto de ícones em diferentes tamanhos

## Paleta de Cores

### Tema Escuro (Padrão)
- **Fundo Principal**: `#0f172a`
- **Fundo Secundário**: `#1e293b`
- **Cards**: `#334155`
- **Texto Principal**: `#f8fafc`
- **Texto Secundário**: `#cbd5e1`

### Tema Claro
- **Fundo Principal**: `#f8fafc`
- **Fundo Secundário**: `#ffffff`
- **Cards**: `#f1f5f9`
- **Texto Principal**: `#1e293b`
- **Texto Secundário**: `#475569`

## Performance

- **CSS Otimizado**: Uso de variáveis CSS e seletores eficientes
- **JavaScript Modular**: Código organizado em funções específicas
- **Imagens Otimizadas**: Suporte a formatos modernos
- **Lazy Loading**: Carregamento otimizado de recursos

## Licença

Você pode usar, modificar e distribuir livremente.

---

**Desenvolvido por Luiz carlos Machado com ❤️ e muito café**

*Última atualização: Agosto 2025*

