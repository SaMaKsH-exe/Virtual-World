/** @format */

class Road {
	constructor(x, width, laneCount = 3) {
		this.x = x;
		this.width = width;
		this.laneCount = laneCount;
		this.xLeft = x - width / 2;
		this.xRight = x + width / 2;

		const infinity = 1000000;
		this.top = -infinity;
		this.bottom = infinity;

		const topRight = { x: this.xRight, y: this.top };
		const topLeft = { x: this.xLeft, y: this.top };
		const bottomLeft = { x: this.xLeft, y: this.bottom };
		const bottomRight = { x: this.xRight, y: this.bottom };
		this.borders = [
			[topLeft, bottomLeft],
			[topRight, bottomRight],
		];
		this.border = this.borders;
	}

	getLaneCenter(laneIndex) {
		const laneWidth = this.width / this.laneCount;
		return (
			this.xLeft +
			laneWidth / 2 +
			Math.min(laneIndex, this.laneCount - 1) * laneWidth
		);
	}

	colli;

	draw(ctx) {
		ctx.lineWidth = 5;
		ctx.strokeStyle = "white";

		for (let i = 1; i <= this.laneCount - 1; i++) {
			const x = lerp(this.xLeft, this.xRight, i / this.laneCount);

			ctx.setLineDash([20, 20]);
			ctx.beginPath();
			ctx.moveTo(x, this.top);
			ctx.lineTo(x, this.bottom);
			ctx.stroke();
		}
		ctx.setLineDash([]);
		this.borders.forEach((border) => {
			ctx.beginPath();
			ctx.moveTo(border[0].x, border[0].y);
			ctx.lineTo(border[1].x, border[1].y);
			ctx.stroke();
		});
	}
}
