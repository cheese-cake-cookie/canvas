const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawRactangle = () => {
  ctx.fillRect(10, 10, 100, 100);
  ctx.strokeRect(120, 10, 100, 100);
  ctx.clearRect(20, 20, 80, 80);
}

drawRactangle();