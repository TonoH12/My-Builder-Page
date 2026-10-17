const lines = document.getElementById('lines');
const glow = document.getElementById('lines');
const grid = document.getElementById('squares');

for (let i = 0; i < 120; i++) {
    const square = document.createElement('div');
    square.classList.add('squareBoxes');
    grid.appendChild(square);
}

window.addEventListener('load', (e) => {
    lines.style.background = 'rgba(255, 0, 217, 0)';
    glow.style.background = 'rgba(255, 0, 217, 0)';
});

window.addEventListener('mousemove', (e) => {
    lines.style.background = '#b82d46';
    lines.style.left = e.clientX + 'px';
    lines.style.top = e.clientY + 'px';

    glow.style.background = 'radial-gradient(circle, #b82d46 0%, rgba(255, 0, 217, 0) 50%)';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});