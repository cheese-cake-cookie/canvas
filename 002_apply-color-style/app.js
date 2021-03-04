const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawFillStyle = () => {
  for (let i = 0; i < 6; i+= 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
};

const drawStrokeStyle = () => {
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`;
      ctx.beginPath();
      ctx.arc(15 + j * 30, 15 + i * 30, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}

const drawLine = () => {
  ctx.lineWidth = 5;
  ctx.lineCap = 'square'; // butt, round, square
  ctx.beginPath();
  ctx.moveTo(5, 30);
  ctx.lineTo(5, 50);
  ctx.stroke();
}

const gradient = () => {
  const linearGradient = ctx.createLinearGradient(0, 0, 0, 150);
  linearGradient.addColorStop(0, 'red');
  linearGradient.addColorStop(1, 'yellow');

  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, 50, 150);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const radialGradient = ctx.createRadialGradient(50, 50, 10, 55, 55, 30);
  radialGradient.addColorStop(0, 'red');
  radialGradient.addColorStop(0.9, 'yellow');
  radialGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

  ctx.fillStyle = radialGradient;
  ctx.fillRect(0, 0, 100, 100);
}

const pattern = () => {
  const image = new Image();
  image.src = './rabbit.png';
  
  console.dir(image);
  image.onload = () => {
    const pattern = ctx.createPattern(image, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

// drawFillStyle();
// drawStrokeStyle();
// drawLine();
// gradient();
pattern();