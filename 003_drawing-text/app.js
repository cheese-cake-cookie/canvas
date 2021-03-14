const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fillText = () => {
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 10, 50);
}

const strokeText = () => {
  ctx.font = '48px serif';
  ctx.strokeText('Hello world', 10, 50);
}

// fillText();
strokeText();