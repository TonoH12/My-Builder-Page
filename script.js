const glow = document.getElementById('glow');
const grid = document.getElementById('squares');

for (let i = 0; i < 120; i++) {
    const square = document.createElement('div');
    square.classList.add('squareBoxes');
    grid.appendChild(square);
}

window.addEventListener('load', (e) => {
    glow.style.background = 'rgba(255, 0, 217, 0)';
});

window.addEventListener('mousemove', (e) => {
    glow.style.background = '#b82d46';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});