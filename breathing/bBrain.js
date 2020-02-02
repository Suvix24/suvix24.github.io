function transformTime(num) {
	let timeToTransform;
	if (num < 60) {
		if (num < 10) {
			timeToTransform = "00:0" + num;
		}
		else {
			timeToTransform = "00:" + num;
		}
	}
	else if (num >= 60) {
		if (num % 60 < 10) {
			timeToTransform = Math.floor(num / 60) + ":0" + num % 60;
		}
		else {
			timeToTransform = Math.floor(num / 60) + ":" + num % 60;
		}
	}
	else {
		timeToTransform = "88:88";
	}
	return timeToTransform;
}

var sec = 0;
var i = 0;
var totalSec = 0;
var howManyTimes = 24;
function showTime() {
	if (i % 2 == 0 && i < howManyTimes) {
		
		document.getElementById("info").innerHTML = "Wdech " + i;
		document.getElementById("timer").innerHTML = transformTime(sec);
		sec += 1;
		if (sec > 4) {
			sec = 1;
			i++;
		}
	}
	else if (i % 2 == 1 && i < howManyTimes) {
		
		document.getElementById("info").innerHTML = "Wydech " + i;
		document.getElementById("timer").innerHTML = transformTime(sec);
		sec += 1;
		if (sec > 8) {
			sec = 1;
			i++;
		}
	}
	else if (i >= howManyTimes) {
		document.getElementById("timer").innerHTML = transformTime(sec);
		document.getElementById("info").innerHTML = "Wstrzymaj jak najdłużej!!!";
		sec += 1;
	}
	document.getElementById("total").innerHTML = transformTime(totalSec);
	totalSec += 1;
}

var mainInterval;

function start() {
	if (mainInterval) {
		clearInterval(mainInterval);
	}
	mainInterval = setInterval(showTime,1000);
}

function stop() {
	clearInterval(mainInterval);
}

function clearTime() {
	sec = 0;
	totalSec = 0;
	i = 0;
	showTime();
}

