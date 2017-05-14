const robot = require("robotjs");

module.exports = class LumberJack {
	constructor(leftBranchPoint, rightBranchPoint) {
		this.branchColors = ['83643a', '9b7542'];

		this.leftBranchPoint = leftBranchPoint;
		this.rightBranchPoint = rightBranchPoint;

		this.interval = setInterval(() => {
			this.intervalCallback();
		}, 100);
	}

	intervalCallback() {
		if (this.isBranch(this.leftBranchPoint)) {
			this.move('right');
		} else if (this.isBranch(this.rightBranchPoint)) {
			this.move('left');
			
		}
	}

	isBranch(point) {
		const pixelColor = robot.getPixelColor(point.x, point.y);

		if (this.branchColors.indexOf(pixelColor) > -1) {
			return true;
		}
		return false;
	}

	move(direction) {
		console.log(`${direction}`);
		robot.keyTap(direction);
		setTimeout(() => {
			robot.keyTap(direction);
		}, 50);
	}
}
