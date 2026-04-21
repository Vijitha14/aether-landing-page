// Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// Initial check on load
window.addEventListener('load', scrollReveal);

// Smooth Parallax for glow elements
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelector('.glow-1').style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    document.querySelector('.glow-2').style.transform = `translate(${x * -50}px, ${y * -50}px)`;
});