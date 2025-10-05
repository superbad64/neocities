var html = document.getElementsByTagName("html")[0];
var baseFontSize = window.getComputedStyle(html, null).getPropertyValue("font-size").slice(0, -2);

function recalculateFonts() {
	/* Resizes the fonts according to the main content font size */

	// Title bars
	for (let e of document.getElementsByClassName("title")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }

	// Side nav
	for (let e of document.getElementsByClassName("sidenavmenu")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }

	// Top nav
	for (let e of document.getElementsByClassName("topnavmenu")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }

	// Sup elements
	for (let e of document.getElementsByTagName("sup")) { e.style.fontSize = (parseInt(baseFontSize) * 0.75) + "px"; }

	// Picture widget
	for (let e of document.getElementsByClassName("picture")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px"; }

	// Pseudo menu bar
	for (let e of document.getElementsByClassName("fakemenu")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px"; }

	// Footnotes
	for (let e of document.getElementsByClassName("footnotes")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px";	}
}
recalculateFonts()

function recalculateLayout() {
	/* Changes the layout according to the aspect ratio of the device */

	/* Set html size */
	html.style.width = window.innerWidth + "px";
	html.style.height = window.innerHeight + "px";

	/* Set side menu size */
	var sidenav = document.getElementsByClassName("sidenav")[0];
	if (sidenav.style.display != "none") {
		sidenav.style.height = ((window.innerHeight * 95) / 100) + "px";
		//console.log("Set navbar height to " + nav.style.height);
	}
	
	/* Set content block offset */
	var content = document.getElementsByClassName("content")[0];
	var offset = sidenav.getBoundingClientRect().right + sidenav.getBoundingClientRect().left;
	content.style.left = offset + "px";
	//console.log("Set content left offset to " + offset);

	/* Set content block width */
	var contentArea = window.innerWidth - sidenav.getBoundingClientRect().right;
	content.style.width = ((contentArea * 98) / 100) + "px";
	//console.log("Set content width offset to " + ((contentArea * 98) / 100) + "px");
	
	/* Show or hide top menu if viewport is vertical */
	var topnav = document.getElementsByClassName("topnav")[0];
	if (window.innerHeight > window.innerWidth) {
		// Recalculate font sizes
		html.style.fontSize = (parseInt(baseFontSize) * 1.5) + "px";
		recalculateFonts();

		// Set content offset
		content.style.left = "0.5%";

		// Set content width
		content.style.width = "99%";

		// Set top menu width to match content
		topnav.style.width = content.style.width;

	}
	else if (window.innerHeight < window.innerWidth) {
		// Recalculate font sizes
		html.style.fontSize = (parseInt(baseFontSize)) + "px";

		// Set content offset
		content.style.left = (sidenav.getBoundingClientRect().left + sidenav.getBoundingClientRect().right) + "px";
	}
}
recalculateLayout();

window.onresize = recalculateLayout;

/* Easter egg */ 
/* Code from https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html */
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
	// get the value of the key code from the key map
	var key = allowedKeys[e.keyCode];
	// get the value of the required key from the konami code
	var requiredKey = konamiCode[konamiCodePosition];

	// compare the key with the required key
	if (key == requiredKey) {

	// move to the next key in the konami code sequence
	konamiCodePosition++;

	// if the last key is reached, activate cheats
	if (konamiCodePosition == konamiCode.length) {
		easterEgg();
		//konamiCodePosition = 0;
	}
	} else {
		konamiCodePosition = 0;
	}
});

stylemenu = document.getElementById("stylemenu");
extrastyle = document.getElementById("extrastyle");
function easterEgg() {
	alert("Check the bottom of the page !");

	document.getElementById("styleselector").style.display = "block";
	window.location.replace("#styleselector");
}

function easterEggCallback() {
	switch (stylemenu.value) {
		case "9x_standard":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #008080; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; } .titlebar { background-image: linear-gradient(to right, #000080, #1084d0); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #AAAAAA; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 1px solid grey; text-align: center; } .sidenav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .topnav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .blogpost { background-color: #AAAAAA; color: black; border: 3px solid grey; border-radius: 0; }";
			break;
		case "9x_plum":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #402840; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: white; } .titlebar { background-image: linear-gradient(to right, #484060, #484060); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #a89890; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 1px solid grey; text-align: center; } .sidenav { border: 3px solid #756964; border-radius: 0; background-color: #a89890; } .topnav { border: 3px solid #756964; border-radius: 0; background-color: #a89890; } .blogpost { background-color: #a89890; color: black; border: 3px solid #756964; border-radius: 0;}";
			break;
		case "9x_darkplum":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #0c080c; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: white; } .titlebar { background-image: linear-gradient(to right, #484060, #402840, #402840); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #333333; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 1px solid grey; text-align: center; } .sidenav { border: 3px solid grey; border-radius: 0; background-color: #333333; } .topnav { border: 3px solid grey; border-radius: 0; background-color: #333333; } .blogpost { background-color: #333333; color: black; border: 3px solid grey; border-radius: 0;}";
			break;
		case "9x_storm":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #202020; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: white; } .titlebar { background-image: linear-gradient(to right, #800080, #388cb0); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #AAAAAA; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 1px solid grey; text-align: center; } .sidenav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .topnav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .blogpost { background-color: #AAAAAA; color: black; border: 3px solid grey; border-radius: 0;}";
			break;
		case "xp_luna":
			extrastyle.innerHTML = "";
			break;
		case "xp_olive":
			extrastyle.innerHTML = "html { background-color: #FFFFFF; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #8b956a, #bbc98f, #8b956a); border-radius: 6px 6px 0 0; } .fakemenu { display: block; } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 5px; text-align: center; } .sidenav { border: 3px solid #8b956a; border-radius: 10px 10px 0 0; background-color: #bbc98f; } .topnav { border: 3px solid #8b956a; border-radius: 10px 10px 0 0; background-color: #bbc98f; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #8b956a; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_silver":
			extrastyle.innerHTML = "html { background-color: #008080; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #FFFFFF, #b2b2b2, #b2b2b2); border-radius: 6px 6px 0 0; color: black; } .fakemenu { display: block; } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 5px; text-align: center; } .sidenav { border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; background-color: #e7e6ee; } .topnav { border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; background-color: #e7e6ee; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_royale_noir":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #161d2d, #919195); border-radius: 6px 6px 0 0; } .fakemenu { display: block; } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 5px; text-align: center; } .sidenav { border: 3px solid #919195; border-radius: 10px 10px 0 0; background-color: #707a82; } .topnav { border: 3px solid #919195; border-radius: 10px 10px 0 0; background-color: #707a82; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #919195; border-radius: 10px 10px 0 0; }";
			break;
		case "watercolor":
			extrastyle.innerHTML = "html { background-color: #004e98; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to right, #5094f8, #5094f8); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: block; background-color: #f0f4f0; } .fakebutton { background-color: #5094f8; font-family: \"Lucida Console\"; font-weight: bold; color: lightblue; border: 1px solid grey; text-align: center; } .sidenav { border: 3px solid #5094f8; border-radius: 0; background-color: #F8FCF8; } .topnav { border: 3px solid #5094f8; border-radius: 0; background-color: #F8FCF8; } .blogpost { background-color: #F8FCF8; color: black; border: 3px solid #5094f8; border-radius: 0; }";
			break;
		default:
			break;
	}
}
stylemenu.onchange = easterEggCallback;
