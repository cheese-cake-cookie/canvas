import { Slot } from "./slot.js";

export class Roulette {
  constructor(x = 0, y = 0, radius = 100) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.spinedCount = 0;
    this.speed = 5;
    this.slotList = [
      {
        id: 1,
        name: "100 cash",
        color: "#D1C4E9",
      },
      {
        id: 2,
        name: "200 cash",
        color: "#B39DDB",
      },
      {
        id: 3,
        name: "1000 cash",
        color: "#9575CD",
      },
      {
        id: 3,
        name: "3000 cash",
        color: "#7E57C2",
      },
      {
        id: 4,
        name: "4000 cash",
        color: "#673AB7",
      },
      {
        id: 5,
        name: "5000 cash",
        color: "#5E35B1",
      }
    ];
    this.slots = [];
    this.rotateDegree = 0;

    this.init();
  }

  init() {
    const degreeOfSlot = 360 / this.slotList.length;

    for (let i = 0; i < this.slotList.length; i++) {
      const startAngle = i * this._degreeToRadian(degreeOfSlot);
      const endAngle = (i + 1) * this._degreeToRadian(degreeOfSlot);

      const slot = new Slot(
        0,
        0,
        this.radius,
        startAngle,
        endAngle,
        this.slotList[i].color,
        this.slotList[i].name,
      );

      this.slots.push(slot);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius + 10, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    this.slots.forEach((slot) => {
      ctx.beginPath();
      ctx.arc(slot.x, slot.y, slot.radius, slot.startAngle, slot.endAngle);
      ctx.lineTo(slot.x, slot.y);
      ctx.fillStyle = slot.color;
      ctx.fill();
    });
  }

  spin(ctx, spinCount = 10) {
    if (this.spinedCount >= spinCount) {
      this.rotateDegree = 0;
      this.spinedCount = 0;
      return;
    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0); // 변형 초기화
    ctx.translate(this.x, this.y);
    ctx.rotate(this._degreeToRadian(this.rotateDegree));
    this.draw(ctx);
    ctx.restore();

    this.rotateDegree += 360 * spinCount / this.speed / 60;
    
    if (this.rotateDegree >= this.spinedCount * 360) {
      this.spinedCount += 1;
    }
    
    // if (this.rotateDegree)
    
    requestAnimationFrame(() => {
      this.spin(ctx, spinCount);
    });
  }

  stop(ctx) {
    console.log("stop");
  }

  _degreeToRadian(degree) {
    return (Math.PI / 180) * degree;
  }
}
