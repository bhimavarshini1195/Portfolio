// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#00ff99';
toggleButton.style.color = '#0d0d0d';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '9999';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Navbar Animation
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0d0d0d';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});
