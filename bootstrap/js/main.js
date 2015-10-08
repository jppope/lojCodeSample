/**
* @class Scripts to make this site a little cooler
* Just thought I would have a little fun with the task
*/


/**
* @Globals
*/


function init(){
$(".button").on("click", function(){
  	   bounceIt();
  	   setTimeout(hinge(),3000)
	});
}
init();



function bounceIt(){
	
	var three = new ui.Actor('.three');
	var four = new ui.Actor('.four');		
	var five = new ui.Actor('.five');
	var simulation3 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 30,
	            acceleration: 1800,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	var simulation4 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 30,
	            acceleration: 1600,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	var simulation5 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 30,
	            acceleration: 1800,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	
	three.start(simulation3);
	four.start(simulation4);
	five.start(simulation5);
	
	
	var six = new ui.Actor('.six');
	var seven = new ui.Actor('.seven');		
	var eight = new ui.Actor('.eight');
	var simulation6 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 50,
	            acceleration: 1800,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	var simulation7 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 50,
	            acceleration: 1600,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	var simulation8 = new ui.Simulate({
	    values: {
	        y: {
	            velocity: 100,
	            acceleration: 1800,
	            max: 400,
	            bounce: .8
	        }
	    }
	});
	
	six.start(simulation6);
	seven.start(simulation7);
	eight.start(simulation8);
	
}

function hinge(){
	$('.one').addClass('animated hinge');
	$('.two').addClass('animated hinge');
}




