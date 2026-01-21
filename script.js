const button = document.getElementById('colorBtn');
const colors = ['#4361ee', '#7209b7', '#f72585', '#4cc9f0', '#06d6a0'];
let colorIndex = 0;

button.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    button.style.background = colors[colorIndex];
});
