// var myVar=setInterval(function () {myTimer()}, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }




var sec = 50;
var min = 59;
var hour = 23;

var myClock = setInterval(clockCount, 1000);
	
function clockCount(){
	sec++;

if(sec === 60){
	min++;
	sec = 0;
}
document.getElementById("secDisplay").innerHTML = (sec);

if(min === 60){
		hour++;
		min = 0;
}
document.getElementById("minDisplay").innerHTML = (min);
if(hour === 24){
		hour = 0;
		min = 0;
		sec = 0;
}
	document.getElementById("hourDisplay").innerHTML = (hour);
	
	

}


