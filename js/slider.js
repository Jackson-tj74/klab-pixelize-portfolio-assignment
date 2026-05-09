// simple image slider
// works for both hero and project sliders

function makeSlider(trackId, dotsId, slidesVisible) {
    var track = document.getElementById(trackId);
    var dotsContainer = document.getElementById(dotsId);
    if (!track || !dotsContainer) return;

    var slides = track.querySelectorAll('.slide');
    var total = slides.length;
    var current = 0;
    var timer = null;

    // set slide widths
    function updateLayout() {
        var percent = 100 / slidesVisible;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.minWidth = percent + '%';
        }
    }

    // create dots
    function createDots() {
        dotsContainer.innerHTML = '';
        for (var i = 0; i < total; i++) {
            var dot = document.createElement('button');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            (function (index) {
                dot.addEventListener('click', function () { goTo(index); });
            })(i);
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        var dots = dotsContainer.querySelectorAll('button');
        for (var i = 0; i < dots.length; i++) {
            if (i === current) {
                dots[i].classList.add('active');
            } else {
                dots[i].classList.remove('active');
            }
        }
    }

    function goTo(index) {
        var maxIndex = total - slidesVisible;
        if (index > maxIndex) index = 0;
        if (index < 0) index = maxIndex;
        current = index;
        var offset = -(current * (100 / slidesVisible));
        track.style.transform = 'translateX(' + offset + '%)';
        updateDots();
    }

    function next() {
        var maxIndex = total - slidesVisible;
        goTo(current >= maxIndex ? 0 : current + 1);
    }

    // autoplay
    function startAuto() {
        stopAuto();
        timer = setInterval(next, 3000);
    }

    function stopAuto() {
        if (timer) { clearInterval(timer); timer = null; }
    }

    // pause on hover
    track.parentElement.addEventListener('mouseenter', stopAuto);
    track.parentElement.addEventListener('mouseleave', startAuto);

    // touch swipe
    var startX = 0;
    track.parentElement.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        stopAuto();
    }, { passive: true });

    track.parentElement.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) next();
        if (diff < -50) goTo(current - 1);
        startAuto();
    }, { passive: true });

    // init
    updateLayout();
    createDots();
    goTo(0);
    startAuto();

    // handle resize
    window.addEventListener('resize', function () {
        updateLayout();
        goTo(current);
    });
}

// start sliders when page loads
document.addEventListener('DOMContentLoaded', function () {
    makeSlider('hero-track', 'hero-dots', 1);
    makeSlider('project-track', 'project-dots', 4);
});