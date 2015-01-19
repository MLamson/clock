// var myVar=setInterval(function () {myTimer()}, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }




var sec = 5;
var secTens = 5;
var min = 9;
var minTens = 5;
var hour = 3;
var hourTens = 2;

var myClock = setInterval(clockCount, 1000);
	
function clockCount(){
	sec++;

if(sec === 10){
	secTens++;
	sec = 0;
}

document.getElementById("secDisplay").innerHTML = (sec);

if(secTens === 6){
	min++;
	secTens = 0;
	sec = 0;
}

document.getElementById("secTensDisplay").innerHTML = (secTens);

if(min === 10){
	minTens++;
	min = 0;
	secTens = 0;
	sec = 0;
}

document.getElementById("minDisplay").innerHTML = (min);

if(minTens === 6){
	hour++;
	minTens = 0;
	min = 0;
	secTens = 0;
	sec = 0;
}

document.getElementById("minTensDisplay").innerHTML = (minTens);

if(hour === 4){
		hourTens++
		hour = 0;
		minTens = 0;
		min = 0;
		secTens = 0;
		sec = 0;
}
document.getElementById("hourDisplay").innerHTML = (hour);

if(hourTens === 3){
		hourTens = 0;
		hour = 0;
		minTens = 0;
		min = 0;
		secTens = 0;
		sec = 0;
}
	document.getElementById("hourTensDisplay").innerHTML = (hourTens);
	
	

}


