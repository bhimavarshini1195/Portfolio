// script.js

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#18bc9c';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
