const canvas = document.getElementById("parabola");

const ctx = canvas.getContext("2d");

ctx.translate(400, 300);
ctx.scale(1, -1);

ctx.clearRect(0, 0, 1, 1);

ctx.beginPath();
ctx.moveTo(-400, 0);
ctx.lineTo(400, 0);

ctx.moveTo(0, -300);
ctx.lineTo(0, 300);

ctx.stroke();

let x = -400;
let xp = x / 400;
let yp = f(xp);

let handle = setInterval(drawFunction, 50, f);

function f(x) {
  return (x * x + 2 * x - 1) / 4;
}

function drawFunction(f) {
  ctx.beginPath();
  ctx.moveTo(xp * 400, yp * 300);
  x += 15;

  if (x > 400) {
    clearInterval(handle);
  }

  xp = x / 400;
  yp = f(xp);
  ctx.lineTo(xp * 400, yp * 300);

  ctx.stroke();
}
