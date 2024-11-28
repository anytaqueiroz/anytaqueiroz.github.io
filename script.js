// Modo Dark/Light
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

//se o modo escuro foi ativado 
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = 'Modo Claro';
}

// Função para alternar entre modo claro e escuro
darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled'); 
        darkModeBtn.textContent = 'Modo Claro';
    } else {
        localStorage.removeItem('darkMode');  
        darkModeBtn.textContent = 'Modo Escuro';
    }
});

// Botão de controle do tamanho da fonte
const fontSizeBtn = document.getElementById('increaseFontBtn');

// Verificar no localStorage se o tamanho da fonte foi alterado anteriormente
if (localStorage.getItem('fontSize') === 'increased') {
    body.classList.add('font-increased'); 
    fontSizeBtn.textContent = 'Diminuir Fonte'; 
} else {
    fontSizeBtn.textContent = 'Aumentar Fonte'; 
}

// Função para alternar entre os tamanhos de fonte
fontSizeBtn.addEventListener('click', () => {
    body.classList.toggle('font-increased');
    if (body.classList.contains('font-increased')) {
        localStorage.setItem('fontSize', 'increased');
        fontSizeBtn.textContent = 'Diminuir Fonte'; 
    } else {
        localStorage.removeItem('fontSize'); 
        fontSizeBtn.textContent = 'Aumentar Fonte'; 

    }
});

// Menu de Navegação Deslizante
const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const nav = document.querySelector('nav');

// Função para alternar a visibilidade do menu
toggleMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
});
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const width = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = width + '%';
});
const text = 'Bem-vindo ao nosso site!';
let index = 0;
const typeText = () => {
    if (index < text.length) {
        document.getElementById('typed-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
};
typeText();

function mostrarMais(id) {
    var conteudo = document.getElementById(id);
    conteudo.style.display = conteudo.style.display === 'none' ? 'block' : 'none';
}