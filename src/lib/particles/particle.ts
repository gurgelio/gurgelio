export default class Particle {
  x: number;
  y: number;
  vx = 0.2 * Math.random() - 0.1;
  vy = 0.2 * Math.random() - 0.1;
  radius = 5;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
  }
}
