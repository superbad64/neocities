/* Globals */
var html = document.getElementsByTagName("html")[0];
var content = document.getElementsByClassName("content")[0];
var nav = document.getElementsByTagName("nav")[0];
var horizontalMenu = document.getElementsByClassName("horizontalmenu")[0];
var verticalMenu = document.getElementsByClassName("verticalmenu")[0];
var prevState = "?";
var baseFontSize = window.getComputedStyle(html, null).getPropertyValue("font-size").slice(0, -2);

function recalculateFonts() {
	/* Resizes the fonts according to the main content font size */
	baseFontSize = window.getComputedStyle(html, null).getPropertyValue("font-size").slice(0, -2);

	// Title bars
	for (let e of document.getElementsByClassName("title")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }

	// Nav menu
	for (let e of document.getElementsByClassName("horizontalmenu")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }
	for (let e of document.getElementsByClassName("verticalmenu")) { e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px"; }

	// Sup elements
	for (let e of document.getElementsByTagName("sup")) { e.style.fontSize = (parseInt(baseFontSize) * 0.75) + "px"; }

	// Picture widget
	for (let e of document.getElementsByClassName("picture")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px"; }

	// Pseudo menu bar
	for (let e of document.getElementsByClassName("fakemenu")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px"; }

	// Footnotes
	for (let e of document.getElementsByClassName("footnotes")) { e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px";	}
}
recalculateFonts();

function recalculateLayout() {
	var navRect = nav.getBoundingClientRect();

	if (window.matchMedia("(orientation: landscape)").matches) {
		content.style.top = 0;
		content.style.left = (navRect.right + 10) + "px";
		content.style.width = "50%";

		if (prevState != "landscape") {
			prevState = "landscape";
			recalculateFonts();

			/* Adjust margin from topmost article */
			document.getElementsByTagName("article")[0].style.marginTop = "10px";
		}
	} else if (window.matchMedia("(orientation: portrait)").matches) {
		//content.style.top = (navRect.bottom + 10) + "px";
		content.style.left = "1%";
		content.style.width = "98%";

		if (prevState != "portrait") {
			prevState = "portrait";
			recalculateFonts();

			/* Reinstate margin to topmost article */
			document.getElementsByTagName("article")[0].style.marginTop = "0.5em";
		}
	}

	try {
		document.getElementById("bgCanvas").width = window.innerWidth;
		document.getElementById("bgCanvas").height = window.innerHeight;
	} catch {
		
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
loadedstyles = [ "9x_standard", "9x_plum", "9x_matrix", "9x_mystery",
	"xp_luna", "xp_olive", "xp_silver", "xp_royale_noir",
	"watercolor", "candy", "cde" ];

function easterEgg() {
	alert("Check the bottom of the page !");

	document.getElementById("styleselector").style.display = "block";
	window.location.replace("#styleselector");
}

function easterEggCallback() {
	switch (stylemenu.value) {
		// 9x styles
		case "9x_standard":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #008080; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; } .titlebar { background-image: linear-gradient(to right, #000080, #000080); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #AAAAAA; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .blogpost { background-color: #AAAAAA; color: black; border: 3px solid grey; border-radius: 0; }";
			break;
		case "9x_plum":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #000000; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: white; } .titlebar { background-image: linear-gradient(to right, #484060, #484060); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #a89890; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #756964; border-radius: 0; background-color: #a89890; } .blogpost { background-color: #a89890; color: black; border: 3px solid #756964; border-radius: 0;}";
			try {
				document.getElementById("bgCanvas").style.display = "block";
				document.getElementById("bgCanvas").width = window.innerWidth;
				document.getElementById("bgCanvas").height = window.innerHeight;
			} catch {

			}
			break;
		case "9x_matrix":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #000000; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: #00FF00; } a, a:hover, a:visited { color: #00FF00; } .titlebar { background-image: linear-gradient(to right, #00ff00, #00ff00); color: black; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #000000; font-family: \"Lucida Console\"; font-weight: bold; color: #00FF00; border: 1px solid #00FF00; border-radius: 0; text-align: center; } nav { border: 3px solid #00FF00; border-radius: 0; background-color: #000000; } nav a, nav a:hover, nav a:visited { color: #00FF00; } .topnav a, .topnav a:hover, .topnav a:visited { color: #00FF00; } .blogpost { background-color: #000000; color: #00FF00; border: 3px solid #00FF00; border-radius: 0; }";
			break;
		case "9x_mystery":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #008080; background-image: url(\"/common/images/mystery.jpg\"); background-attachment: fixed; background-size: cover; background-position-y: -25em; font-family: \"W95Font\"; } .titlebar { background-image: linear-gradient(to right, #503840, #503840); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton { background-color: #87888f; font-family: \"Lucida Console\"; font-weight: bold; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid grey; border-radius: 0; background-color: #87888f; } .blogpost { background-color: #87888f; color: black; border: 3px solid grey; border-radius: 0; }";
			html.style.backgroundSize = "cover";
			break;
		// XP styles
		case "xp_luna":
			extrastyle.innerHTML = "";
			break;
		case "xp_olive":
			extrastyle.innerHTML = "html { background-color: #FFFFFF; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #8b956a, #bbc98f, #8b956a); border-radius: 6px 6px 0 0; } .fakemenu { display: block; } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } nav { border: 3px solid #8b956a; border-radius: 10px 10px 0 0; background-color: #bbc98f; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #8b956a; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_silver":
			extrastyle.innerHTML = "html { background-color: #FFFFFF; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #FFFFFF, #b2b2b2, #b2b2b2); border-radius: 6px 6px 0 0; color: black; } .fakemenu { display: block; } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } nav { border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; background-color: #e7e6ee; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_royale_noir":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/energybliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #161d2d, #556271); border-radius: 6px 6px 0 0; } .fakemenu { display: block; background-color: #f0eef1 } .fakebutton { background-color: #f66e51; font-family: \"Lucida Console\"; font-weight: bold; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } nav { border: 3px solid #556271; border-radius: 10px 10px 0 0; background-color: #707a82; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #556271; border-radius: 10px 10px 0 0; }";
			html.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
			break;
		// Other styles
		case "watercolor":
			extrastyle.innerHTML = "html { background-color: #004e98; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to right, #5094f8, #5094f8); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: block; background-color: #f0f4f0; } .fakebutton { background-color: #5094f8; font-family: \"Lucida Console\"; font-weight: bold; color: lightblue; border: 3px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #5094f8; border-radius: 0; background-color: #F8FCF8; } .blogpost { background-color: #F8FCF8; color: black; border: 3px solid #5094f8; border-radius: 0; }";
			break;
		case "candy":
			break;
		case "cde":
			extrastyle.innerHTML = "html { background-color: #008080; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"Lucida Console\"; } .titlebar { background-image: linear-gradient(to right, #eda870, #eda870); color: white; font-weight: unset; border-radius: 0; text-align: center; } .fakemenu { display: block; background-color: #4991a7; color: white; } .fakebutton { background-color: #eda870; font-family: \"Lucida Console\"; font-weight: bold; color: #eda870; border: 3px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #eda870; border-radius: 0; background-color: #C6B2A8; } .blogpost { background-color: #C6B2A8; color: black; border: 3px solid #eda870; border-radius: 0; }";
			break;
		default:
			break;
	}

	if (stylemenu.value != "9x_plum") {
		try {
			document.getElementById("bgCanvas").style.display = "none";
		} catch {

		}
	}
}
stylemenu.onchange = easterEggCallback;
window.onload = easterEggCallback;

// Reload stylesheet according to GET request params
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("style")) {
	if (loadedstyles.includes(searchParams.get("style"))) {
		stylemenu.value = searchParams.get("style");
	}
} else {
	// Roll the dice, see if you get a cool skin today
	var luckyNumber = Math.trunc(Math.random() * 100);
	//console.log("Your lucky number is " + luckyNumber);

	switch (luckyNumber) {
		// Those values are largely arbitrary and subject to change
		case 20:	// Year of the WinXP source code leak
			stylemenu.value = "watercolor";
			break;
		case 64:	// Take a wild guess
			alert("Try entering the Konami Code if you're on PC !");
			break;
		case 93:	// CDE release year
			stylemenu.value = "cde";
			break;
		case 95:	// Win95 Plus! iconic style
			stylemenu.value = "9x_mystery";
			break;
		case 98:	// Win98 classic style
			stylemenu.value = "9x_standard";
			break;
	}
}
easterEggCallback();