/* Viewport dimensions */
var vpHeight = window.innerHeight;
var vpWidth = window.innerWidth;

/* Elements */
var html = document.getElementsByTagName("html")[0];
var selectorsRow = document.getElementById("selectorsRow");
var portraitMenu = document.getElementById("portraitMenu");
var content = document.getElementById("content");
var landscapeMenu = document.getElementById("landscapeMenu");
var articles = document.getElementById("articles");

/* Set table element sizes */
html.style.height = vpHeight + "px";
selectorsRow.style.height = (vpHeight * (5/100)) + "px";

content.style.height = ((vpHeight - portraitMenu.getBoundingClientRect().height - selectorsRow.getBoundingClientRect().height) * (97.5/100)) + "px";

landscapeMenu.style.height = content.style.height;
portraitMenu.style.width = document.getElementById("articles").style.width + "px";
articles.style.height = content.style.height;

/* Set button size */
for (const buttoncontainer of document.getElementsByClassName("buttoncontainer")) {
    for (const button of buttoncontainer.children) {
		button.style.height = button.getBoundingClientRect().height + "px";
        button.style.width = button.getBoundingClientRect().height + "px";
    }
}

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
	//console.log("Updated cookie: " + document.cookie);
	return(document.cookie);
}

if (getCookieParam(cookie, "style") == false)
{
	setCookie("style=xp_luna;");
	var cookie = decodeURIComponent(document.cookie).split(";")[0];
	//console.log("Created cookie: " + cookie);
} else {
	//console.log("Loaded cookie: " + cookie);
}

/* Style changer */
stylemenu.value = cookie.split("=")[1];
//console.log("Current stylemenu value: " + stylemenu.value);

function styleCallback() {
	currentStyleSheet.href = "/common/styles/original/" + stylemenu.value + ".css";

	// Extra per-style stuff
	if (stylemenu.value == "9x_plum") {
		try {
			document.getElementById("bgCanvas").style.display = "block";
		} catch {
			//console.log("Oops I tried to show a canvas that doesn't exist !");
		}
	} else {
		try {
			document.getElementById("bgCanvas").style.display = "none";
			//console.log("Hiding canvas !");
		} catch {
			//console.log("Oops I tried to hide a canvas that doesn't exist !");
		}
	}

	// Adjust background
	if (stylemenu.value == "neocities_classic") {
		html.style.backgroundSize = "auto";
		html.style.backgroundRepeat = "repeat";
	}
	else if (stylemenu.value == "xp_royale_noir") {
		html.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
	}
	else {
		html.style.backgroundSize = "cover";
		html.style.backgroundRepeat = "no-repeat";
	}

	// Update cookie
	setCookie("style=" + stylemenu.value + ";");
}

stylemenu.onchange = styleCallback;
window.onload = styleCallback;
styleCallback();