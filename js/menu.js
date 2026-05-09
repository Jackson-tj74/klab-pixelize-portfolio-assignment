// mobile menu open and close

var menuBtn = document.getElementById('hamburger-btn');
var closeBtn = document.getElementById('close-menu-btn');
var menu = document.getElementById('mobile-menu');
var overlay = document.getElementById('menu-overlay');

function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) overlay.addEventListener('click', closeMenu);

// close menu when a link inside is clicked
var mobileLinks = document.querySelectorAll('.mobile-links a, .mobile-contact-btn');
for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', closeMenu);
}