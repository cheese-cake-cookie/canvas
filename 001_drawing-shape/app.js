const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawRactangle = () => {
  ctx.fillRect(10, 10, 100, 100);
  ctx.strokeRect(120, 10, 100, 100);
  ctx.clearRect(20, 20, 80, 80);
}

const drawTriangle = () => {
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 50);
  ctx.lineTo(50, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(200, 100);
  ctx.lineTo(150, 50);
  ctx.closePath();
  ctx.stroke();
}

const drawCircle = (x = 10, y = 10, radius = 10, fill = true) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  
  if (! fill) {
    ctx.stroke();
    ctx.closePath();
    return;
  }

  ctx.fill();
}

// use Bezier
const drawSpeechBubble = () => {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.quadraticCurveTo(220, 150, 200, 200);
  ctx.lineTo(190, 200);
  ctx.quadraticCurveTo(190, 220, 170, 220);
  ctx.quadraticCurveTo(180, 220, 180, 200);
  ctx.lineTo(100, 200);
  ctx.quadraticCurveTo(80, 150, 100, 100);
  ctx.stroke();
  ctx.closePath();
}

const drawHeart = () => {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.bezierCurveTo(125, 0, 175, 0, 200, 50);
  ctx.bezierCurveTo(225, 0, 275, 0, 300, 100);
  ctx.lineTo(200, 200);
  ctx.lineTo(100, 100);
  ctx.closePath();
  ctx.stroke();
}

// drawRactangle();
// drawTriangle();
// drawCircle();
// drawSpeechBubble();
// drawHeart();