/* Globals */
var html = document.getElementsByTagName("html")[0];
var content = document.getElementsByClassName("content")[0];
var nav = document.getElementsByTagName("nav")[0];
var horizontalMenu = document.getElementsByClassName("horizontalmenu")[0];
var verticalMenu = document.getElementsByClassName("verticalmenu")[0];
var prevState = "?";
var baseFontSize = window.getComputedStyle(html, null).getPropertyValue("font-size").slice(0, -2);
var lang = window.location.href.split("/")[3];
var stylemenu = document.getElementById("stylemenu");
var extrastyle = document.getElementById("extrastyle");
var loadedstyles = [ "9x_standard", "9x_plum", "9x_matrix", "9x_mystery",
	"xp_classic", "xp_luna", "xp_olive", "xp_silver", "xp_royale_noir",
	"watercolor", "candy", "cde" ];

/* Cookie stuff */
var cookie = decodeURIComponent(document.cookie).split(";")[0];

function getCookieParam(cookie, str) {
	let searchStr = str + "=";
	let cookieArray = cookie.split(";")
	for (let i = 0; i < cookieArray.length; i++) {
		if (cookieArray[i].includes(searchStr)) {
			return(true);
		}
	}
	return(false);
}

function setCookie(str)
{
	document.cookie = str + " path=/;";
	console.log("Updated cookie: " + document.cookie);
	return(document.cookie);
}

if (getCookieParam(cookie, "style") == false)
{
	setCookie("style=xp_luna;");
	var cookie = decodeURIComponent(document.cookie).split(";")[0];
	console.log("Created cookie: " + cookie);
} else {
	console.log("Loaded cookie: " + cookie);
}

/* Layout stuff */
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
	/* Changes the layout according to viewport dimensions */
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
		content.style.left = "1%";
		content.style.width = "98%";

		if (prevState != "portrait") {
			prevState = "portrait";
			recalculateFonts();

			/* Reinstate margin to topmost article */
			document.getElementsByTagName("article")[0].style.marginTop = "0.5em";
		}
	}

	/* Set background canvas size */
	try {
		document.getElementById("bgCanvas").width = window.innerWidth;
		document.getElementById("bgCanvas").height = window.innerHeight;
	} catch {
		
	}

	/* Set title bars */
	var titlebarSize = (parseInt(baseFontSize) * 1.25) + 5;
	for (let e of document.getElementsByClassName("titlebar")) { e.style.height = titlebarSize + "px"; }

	/* Set buttons */
	for (let t of [ "fakebutton_minimize", "fakebutton_maximize", "fakebutton_close" ]) {
		for (let e of document.getElementsByClassName(t)) {
			var btnHeight = parseInt(baseFontSize) * 1.1;

			e.style.height = btnHeight + "px"
			e.style.width = btnHeight + "px" ;
		}
	}

	/* Set button container offset */
	var btnrect = document.getElementsByClassName("fakebutton_close")[0].getBoundingClientRect();
	//var btnContainerOffset = (titlebarSize - (btnrect.bottom - btnrect.top)) / 2;
	var btnContainerOffset = 2;
	for (let e of document.getElementsByClassName("buttoncontainer")) { e.style.top = btnContainerOffset + "px"; }
}
window.onresize = recalculateLayout;
recalculateLayout();

/* Style changer callback function stuff */
stylemenu.value = cookie.split("=")[1];
console.log("Current stylemenu value: " + stylemenu.value);

function styleCallback() {
	console.log("Attempting to load style: " + stylemenu.value);
	switch (stylemenu.value) {
		// 9x styles
		case "9x_standard":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #008080; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; } .titlebar { background-image: linear-gradient(to right, #000080, #000080); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton_minimize { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid grey; border-radius: 0; background-color: #AAAAAA; } .blogpost { background-color: #AAAAAA; color: black; border: 3px solid grey; border-radius: 0; }";
			break;
		case "9x_plum":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #000000; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: white; } .titlebar { background-image: linear-gradient(to right, #484060, #484060); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton_minimize { background-color: #a89890; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #a89890; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #a89890; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #756964; border-radius: 0; background-color: #a89890; } .blogpost { background-color: #a89890; color: black; border: 3px solid #756964; border-radius: 0; }";
			try {
				document.getElementById("bgCanvas").style.display = "block";
				document.getElementById("bgCanvas").width = window.innerWidth;
				document.getElementById("bgCanvas").height = window.innerHeight;
			} catch {

			}
			break;
		case "9x_matrix":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #000000; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"W95Font\"; color: #00FF00; } a, a:hover, a:visited { color: #00FF00; } .titlebar { background-image: linear-gradient(to right, #00ff00, #00ff00); color: black; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton_minimize { background-color: #000000; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; font-weight: normal; color: #00FF00; border: 1px solid #00FF00; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #000000; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; font-weight: normal; color: #00FF00; border: 1px solid #00FF00; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #000000; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; font-weight: normal; color: #00FF00; border: 1px solid #00FF00; border-radius: 0; text-align: center; } nav { border: 3px solid #00FF00; border-radius: 0; background-color: #000000; } nav a, nav a:hover, nav a:visited { color: #00FF00; } .topnav a, .topnav a:hover, .topnav a:visited { color: #00FF00; } .blogpost { background-color: #000000; color: #00FF00; border: 3px solid #00FF00; border-radius: 0; }";
			break;
		case "9x_mystery":
			extrastyle.innerHTML = "@font-face { font-family: W95Font; src: url(\"/common/W95font.otf\"); } html { background-color: #008080; background-image: url(\"/common/images/mystery.jpg\"); background-attachment: fixed; background-size: cover; background-position-y: -25em; font-family: \"W95Font\"; } .titlebar { background-image: linear-gradient(to right, #503840, #503840); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: none; } .fakebutton_minimize { background-color: #687868; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #687868; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #687868; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid grey; border-radius: 0; background-color: #687868; } .blogpost { background-color: #687868; color: black; border: 3px solid grey; border-radius: 0; ";
			html.style.backgroundSize = "cover";
			break;
		// XP styles
		case "xp_classic":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to right, #000080, #a3c6ed); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: block; background-color: #d4d0c8; box-sizing: border-box; border-bottom: 1px groove darkgray; } .fakebutton_minimize { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #AAAAAA; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: black; border: 2px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #a19d97; border-radius: 0 0 0; background-color: #d4d0c8; } .blogpost { background-color: #FFFFFF; color: black; border: 3px outset #a19d97; border-radius: 0; }";
			break;
		case "xp_luna":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #0042b6, #0055ea, #0042b6); border-radius: 6px 6px 0 0; color: white; } .fakemenu { display: block; } .fakebutton_minimize { background-color: #0055ea; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } .fakebutton_maximize { background-color: #0055ea; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } .fakebutton_close { background-color: #f66e51; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; }  nav { border: 3px solid #0042b6; border-radius: 10px 10px 0 0; background-color: #667ad8; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #0042b6; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_olive":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #8b956a, #bbc98f, #8b956a); border-radius: 6px 6px 0 0; color: white; } .fakemenu { display: block; } .fakebutton_minimize { background-color: #bbc98f; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } .fakebutton_maximize { background-color: #bbc98f; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } .fakebutton_close { background-color: #f66e51; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid white; border-radius: 3px; text-align: center; } nav { border: 3px solid #8b956a; border-radius: 10px 10px 0 0; background-color: #bbc98f; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #8b956a; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_silver":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/bliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #FFFFFF, #b2b2b2, #b2b2b2); border-radius: 6px 6px 0 0; color: black; } .fakemenu { display: block; } .fakebutton_minimize { background-color: #b2b2b2; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid #333333; border-radius: 3px; text-align: center; } .fakebutton_maximize { background-color: #b2b2b2; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid #333333; border-radius: 3px; text-align: center; } .fakebutton_close { background-color: #f66e51; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: 1px solid #333333; border-radius: 3px; text-align: center; } nav { border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; background-color: #e7e6ee; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #b2b2b2; border-radius: 10px 10px 0 0; }";
			break;
		case "xp_royale_noir":
			extrastyle.innerHTML = "html { background-color: #202020; background-image: url(\"/common/images/energybliss.png\"); background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to top, #161d2d, #556271); border-radius: 6px 6px 0 0; color: white; } .fakemenu { display: block; background-color: #f0eef1 } .fakebutton_minimize { background-color: #161d2d; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: unset; border-radius: 3px; text-align: center; } .fakebutton_maximize { background-color: #161d2d; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: unset; border-radius: 3px; text-align: center; } .fakebutton_close { background-color: #f66e51; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: white; border: unset; border-radius: 3px; text-align: center; } nav { border: 3px solid #556271; border-radius: 10px 10px 0 0; background-color: #707a82; } .blogpost { background-color: #FFFFFF; color: black; border: 3px solid #556271; border-radius: 10px 10px 0 0; }";
			html.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
			break;
		// Other styles
		case "watercolor":
			extrastyle.innerHTML = "html { background-color: #004e98; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"Tahoma\"; } .titlebar { background-image: linear-gradient(to right, #5094f8, #5094f8, #5094f8, #3573d6); color: white; font-weight: bold; border-radius: 0; } .fakemenu { display: block; background-color: #f4f4f0; } .fakebutton_minimize { background-color: #5094f8; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: lightblue; border: 1px solid; border-radius: 0; text-align: center; } .fakebutton_maximize { background-color: #5094f8; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: lightblue; border: 1px solid; border-radius: 0; text-align: center; } .fakebutton_close { background-color: #5094f8; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; color: lightblue; border: 1px solid; border-radius: 0; text-align: center; } nav { border: 3px solid #5094f8; border-radius: 0; background-color: #FFF; } .blogpost { background-color: #FFF; color: black; border: 3px solid #5094f8; border-radius: 0; }";
			break;
		case "candy":
			break;
		case "cde":
			extrastyle.innerHTML = "html { background-color: #008080; background-image: unset; background-attachment: fixed; background-size: cover; font-family: \"Lucida Console\"; } .titlebar { background-image: linear-gradient(to right, #eda870, #eda870); color: white; font-weight: unset; border-radius: 0; text-align: center; } .fakemenu { display: block; background-color: #4991a7; color: white; } .fakebutton_minimize { display: hidden; } .fakebutton_maximize { display: hidden; } .fakebutton_close { background-color: #eda870; font-family: \"Marlett\", \"Webdings\", \"W95Font\"; font-weight: bold; color: #eda870; border: 3px outset; border-radius: 0; text-align: center; } nav { border: 3px solid #eda870; border-radius: 0; background-color: #C6B2A8; } .blogpost { background-color: #C6B2A8; color: black; border: 3px solid #eda870; border-radius: 0; }";
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

	setCookie("style=" + stylemenu.value + ";");
}

window.onload = (event) => {
	styleCallback;
}
styleCallback();
stylemenu.onchange = styleCallback;