// toast notification
function showToast(msg, duration) {
    duration = duration || 3000;
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () {
        toast.classList.remove('show');
    }, duration);
}

// sticky nav on scroll
document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    var scrollBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', function () {
        if (nav) {
            if (window.scrollY > 80) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        }

        if (scrollBtn) {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        }
    });

    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    }
});