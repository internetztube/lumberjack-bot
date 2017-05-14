module.exports = class Countdown {
	constructor(callback, seconds) {
		this.seconds = seconds;
		this.callback = callback;

		this.interval = setInterval(() => {
			this.intervalCallback();
		}, 1000);
	}

	intervalCallback() {
		console.log(this.seconds);
		if (this.seconds > 0) {
			this.seconds--;
		} else {
			clearInterval(this.interval);
			this.callback();
		}
	}
}