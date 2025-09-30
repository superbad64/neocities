var html = document.getElementsByTagName("html")[0];
var baseFontSize = window.getComputedStyle(html, null).getPropertyValue("font-size").slice(0, -2);

function recalculateFonts() {
	// Title bars
	for (let e of document.getElementsByClassName("title")) {
		e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px";
	}

	// Side nav
	for (let e of document.getElementsByClassName("navmenu")) {
		e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px";
	}

	// Top nav
	for (let e of document.getElementsByClassName("topnavmenu")) {
		e.style.fontSize = (parseInt(baseFontSize) * 1.25) + "px";
	}

	// Sup elements
	for (let e of document.getElementsByTagName("sup")) {
		e.style.fontSize = (parseInt(baseFontSize) * 0.75) + "px";
	}

	// Picture widget
	for (let e of document.getElementsByClassName("picture")) {
		e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px";
	}

	// Pseudo menu bar
	for (let e of document.getElementsByClassName("fakemenu")) {
		e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px";
	}

	// Footnotes
	for (let e of document.getElementsByClassName("footnotes")) {
		e.style.fontSize = (parseInt(baseFontSize) * 0.8) + "px";
	}
}
recalculateFonts()

function recalculateLayout() {
	/* Set html size */
	html.style.width = window.innerWidth + "px";
	html.style.height = window.innerHeight + "px";

	/* Set menu size */
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