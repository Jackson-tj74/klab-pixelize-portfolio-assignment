// dark mode toggle
// reads from localStorage, falls back to system preference

var themeBtn = document.createElement('button');
themeBtn.innerHTML = '☀';
themeBtn.id = 'theme-btn';
themeBtn.style.cssText = 'background:none;border:none;font-size:1.3rem;cursor:pointer;padding:8px;border-radius:50%;';

// insert before hamburger button
var hamburger = document.getElementById('hamburger-btn');
if (hamburger) {
    hamburger.parentNode.insertBefore(themeBtn, hamburger);
}

function getTheme() {
    var saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeBtn.innerHTML = '🌙';
    } else {
        document.body.classList.remove('dark');
        themeBtn.innerHTML = '☀';
    }
    localStorage.setItem('theme', theme);
}

// apply on load
setTheme(getTheme());

themeBtn.addEventListener('click', function () {
    var current = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
});