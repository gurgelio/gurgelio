import initCanvas from "./initCanvas";
import { DENSITY, MAX_LINE_DISTANCE, RADIUS } from "./config";
import deltaTime from "./deltaTime";
import Particle from "./particle";

export interface Bounds {
  from: {
    x: number;
    y: number;
  };
  to: {
    x: number;
    y: number;
  };
}

let ctx: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
let particles: Particle[];
let currentFrame: number;
let maxLineDistance: number;
let bounds: Bounds;

export function start(el: HTMLCanvasElement) {
  canvas = el;
  ctx = initCanvas(canvas);
  maxLineDistance = ((canvas.width + canvas.height) * MAX_LINE_DISTANCE) / 200;
  bounds = {
    from: {
      x: -maxLineDistance,
      y: -maxLineDistance,
    },
    to: {
      x: canvas.width + maxLineDistance,
      y: canvas.height + maxLineDistance,
    },
  };

  particles = Array(
    Math.floor((canvas.width * canvas.height * DENSITY) / 50000)
  )
    .fill(0)
    .map(() => new Particle(bounds));
  update(0);
}

export function resize() {
  maxLineDistance = ((canvas.width + canvas.height) * MAX_LINE_DISTANCE) / 200;
  bounds.from = {
    x: -maxLineDistance,
    y: -maxLineDistance,
  };
  bounds.to = {
    x: canvas.width + maxLineDistance,
    y: canvas.height + maxLineDistance,
  };
}

export function stop() {
  if (typeof window === "undefined") return;
  window.cancelAnimationFrame(currentFrame);
}

function update(time: DOMHighResTimeStamp) {
  const delta = deltaTime(time);
  console.log(Math.floor(1 / delta));
  particles.forEach((p) => p.update(delta));

  draw();
  currentFrame = window.requestAnimationFrame(update);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, ctx.canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    ctx.beginPath();
    ctx.arc(p.x, p.y, RADIUS, 0, Math.PI * 2);
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
      if (distance > maxLineDistance) continue;

      ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(
        0.5,
        1 - distance / maxLineDistance
      )})`;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }
}
