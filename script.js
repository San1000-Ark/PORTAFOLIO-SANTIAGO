const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = Math.floor(canvas.width / 20);
const ypos = Array(cols).fill(0);

function matrixRain() {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00bfff"; // Color azul eléctrico
  ctx.font = "16px monospace";

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(124); // Línea vertical (|)
    const x = ind * 20;
    ctx.fillText(text, x, y);

    if (y > canvas.height + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });

  requestAnimationFrame(matrixRain);
}

matrixRain();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});