// nav.js *** JS for the nav section of the page.
	
window.addEventListener("load", navJavscript);
	
	
function navJavscript() {
	
	/* Mobile nav open/close functionality */
	
	var mobileButton = document.getElementById("mobile-nav");
	var flexElement = document.getElementById("nav-links");
	
	mobileButton.addEventListener("click", mobileNav);
	
	function mobileNav() {
		flexElement.style.display = ((window.getComputedStyle(flexElement, null).display!='none') ? 'none' : 'block');
	}

}