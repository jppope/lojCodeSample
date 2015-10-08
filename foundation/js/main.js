

var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
	element: elementButton,
	mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
	endAudio:  './music/ding.mp3'
});
