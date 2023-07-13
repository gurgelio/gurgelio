import type { Bounds } from ".";
import { SPEED } from "./config";
import interpolate from "./interpolate";

export default class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor(private bounds: Bounds) {
    this.x = interpolate(bounds.from.x, bounds.to.x, Math.random());
    this.y = interpolate(bounds.from.y, bounds.to.y, Math.random());

    this.vx = SPEED * Math.random() * (Math.random() > 0.5 ? 1 : -1);
    this.vy = (SPEED - Math.abs(this.vx)) * (Math.random() > 0.5 ? 1 : -1);
  }

  update(delta: number) {
    this.x += this.vx * delta;
    this.y += this.vy * delta;

    if (this.x < this.bounds.from.x) {
      this.x = this.bounds.to.x;
    } else if (this.x > this.bounds.to.x) {
      this.x = this.bounds.from.x;
    }

    if (this.y < this.bounds.from.y) {
      this.y = this.bounds.to.y;
    } else if (this.y > this.bounds.to.y) {
      this.y = this.bounds.from.y;
    }
  }
}
