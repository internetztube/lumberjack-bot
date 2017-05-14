const robot = require("robotjs");
const Countdown = require('./src/countdown');
const LumberJack = require('./src/lumberjack');

let leftCursor;
let rightCursor;

console.log("Welcome to LumberJack Bot! \n");
console.log('First the two branches must be calibrated.');

console.log('Move the cursor to the LEFT branch!');

new Countdown(() => {
	leftCursor = robot.getMousePos();
	console.log("\nAnd now move the cursor to the RIGHT branch!");

	new Countdown(() => {
		rightCursor = robot.getMousePos();

		console.log("\nNow click into telegram and remove the first branch.");

		new Countdown(() => {
			new LumberJack(leftCursor, rightCursor);
		}, 2);
	}, 8);
}, 8);
