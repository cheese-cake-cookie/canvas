export class Slot {
  constructor(x = 0, y = 0, radius = 100, startAngle = 0, endAngle = Math.PI * 2, color, name = '') {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = color;
    this.name = name;
  }
}