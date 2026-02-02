// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Subtle nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.style.boxShadow = '0 1px 3px rgba(13, 27, 42, 0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Video mute toggle
const muteBtn = document.getElementById('mute-toggle');
const featuredVideo = document.getElementById('featured-video');

if (muteBtn && featuredVideo) {
    muteBtn.addEventListener('click', () => {
        featuredVideo.muted = !featuredVideo.muted;
        muteBtn.querySelector('.icon-muted').style.display = featuredVideo.muted ? '' : 'none';
        muteBtn.querySelector('.icon-unmuted').style.display = featuredVideo.muted ? 'none' : '';
        muteBtn.setAttribute('aria-label', featuredVideo.muted ? 'Unmute video' : 'Mute video');
    });
}
