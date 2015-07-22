var counter = 0;
var secondHand = document.getElementById('secondhand');
var minuteHand = document.getElementById('minutehand');
var hourHand = document.getElementById('hourhand');
tick();
setInterval(tick,1000);

function tick() {
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();

	secondHand.style.transform = 'rotate(' + (seconds*6) + 'deg)';
	secondHand.style.transformOrigin = 'center bottom';

	minuteHand.style.transform = 'rotate(' + (minutes*6) + 'deg)';
	minuteHand.style.transformOrigin = 'center bottom';

	hourHand.style.transform = 'rotate(' + (hours*30) + 'deg)';
	hourHand.style.transformOrigin = 'center bottom';
}
