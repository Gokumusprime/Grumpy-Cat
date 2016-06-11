// main-section.js *** JS for the main section of the page.

window.addEventListener("load", mainSectionJavscript);
	
	
function mainSectionJavscript() {
	
	/* Change main section title H2 on hover */
	
	var meowGrumpy = document.getElementById("meow");
	
	meowGrumpy.addEventListener("mouseover", meowFunction);
	
	function meowFunction() {
		meowGrumpy.innerHTML = ((document.getElementById("meow").innerHTML!='Stare into my eyes... Hire Gianni Feola...') ? 'Stare into my eyes... Hire Gianni Feola...' : 'Lorem Ipsum is simply dummy');
	}
	
	/* Hypnotic grumpy cat eye color mode! */
	
	function randomColor() {
                var color = '#';
                var letters = ['9400D3','4B0082','0000FF','00FF00','FFFF00','FF7F00','FF0000','FFC0CB'];
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('banner').style.background = color;
    }
	
	function changeColors() {
		setInterval(randomColor, 500);
	}
	
	changeColors();
}