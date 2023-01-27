let boxes = document.getElementsByClassName("info-circle");
let lines = document.getElementsByClassName("line-segment");
let arrows = document.getElementsByClassName("arrow-imgs");
let icons = document.getElementsByClassName("info-icons");
let cs = document.getElementsByClassName("cs");
let tst = document.getElementsByClassName("tech-child");
let tst2 = document.getElementsByClassName("tech-multi-child");
let tst3 = document.getElementsByClassName("tech-container");

let currentColor = "#336699"
let changeColor = "#77C66E"  

let filterGreenColor = "invert(71%) sepia(34%) saturate(533%) hue-rotate(67deg) brightness(92%) contrast(92%)";
let filterChangeColor = "invert(34%) sepia(75%) saturate(462%) hue-rotate(169deg) brightness(89%) contrast(87%)";

for(let i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("mouseover", function(){
		boxes[i].style.opacity = "2";
		boxes[i].style.transition = 'all 2s'; 

		arrows[i].style.filter =  filterGreenColor;
		icons[i].style.filter =  filterGreenColor;
		boxes[i].style.color = "#ffffff";
		boxes[i].style.borderColor = changeColor;
		boxes[i].style.backgroundColor = currentColor;
		lines[i].style.borderLeftColor = changeColor;
		for(let i = 0; i < cs.length; i++){
			cs[i].style.color = changeColor;	
		}

	});

	boxes[i].addEventListener("mouseout", function(){
		arrows[i].style.filter =  filterChangeColor;
		icons [i].style.filter =  filterChangeColor;
		boxes[i].style.color = "inherit";
		boxes[i].style.backgroundColor = "inherit";
		boxes[i].style.borderColor = currentColor;
		lines[i].style.borderLeftColor = currentColor;
		for(let i = 0; i < cs.length; i++){
			cs[i].style.color = "inherit";	
		}
	});

}

