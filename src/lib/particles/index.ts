import initCanvas from "./initCanvas";
import { DENSITY, MAX_LINE_DISTANCE } from "./config";
import deltaTime from "./deltaTime";
import Particle from "./particle";

let particles: Particle[];
let ctx: CanvasRenderingContext2D;

export default function startParticles(canvas: HTMLCanvasElement) {
  ctx = initCanvas(canvas);

  particles = Array(Math.floor(canvas.width * canvas.height * DENSITY))
    .fill(0)
    .map(() => new Particle(canvas.width, canvas.height));
  update(0);
}

function update(time: DOMHighResTimeStamp) {
  const delta = deltaTime(time);
  console.log(1000 / delta);
  particles.forEach((p) => {
    p.x += p.vx * delta;
    p.y += p.vy * delta;

    if (p.x < -MAX_LINE_DISTANCE) {
      p.x = ctx.canvas.width + MAX_LINE_DISTANCE;
    } else if (p.x > ctx.canvas.width + MAX_LINE_DISTANCE) {
      p.x = -MAX_LINE_DISTANCE;
    }

    if (p.y < -MAX_LINE_DISTANCE) {
      p.y = ctx.canvas.height + MAX_LINE_DISTANCE;
    } else if (p.y > ctx.canvas.height + MAX_LINE_DISTANCE) {
      p.y = -MAX_LINE_DISTANCE;
    }
  });

  draw();
  requestAnimationFrame(update);
}

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < MAX_LINE_DISTANCE) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${
          1 - distance / MAX_LINE_DISTANCE
        })`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }
}
