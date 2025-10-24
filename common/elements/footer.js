document.write('<!-- The site footer, with badges, copyright, and other fun stuff -->');
document.write('<style>');
document.write('.badges');
document.write('{');
document.write('	display: flex;');
document.write('	justify-content: center;');
document.write('	flex-wrap: wrap;');
document.write('}');
document.write('</style>');
document.write('<section class="footer">');
document.write('	<hr>');
document.write('	<div class="badges">');
document.write('		<img src=/common/images/badges/firefoxnow.gif />&nbsp;');
document.write('		<img src=/common/images/badges/netscapenow.gif />&nbsp; ');
document.write('		<img src=/common/images/badges/php.gif />&nbsp;');
document.write('		<img src=/common/images/badges/geocities.gif />&nbsp;');
document.write('		<img src=/common/images/badges/neocities.gif />&nbsp;');
document.write('		<img src=/common/images/badges/vim.gif />');
document.write('	</div>');

var lang = document.location.href.split("/")[3];

var footerStrings = {
    "en": {
        "copyrightNotice": "And remember...",
        "toTop": "Back to top",
        "stylePrompt": "Pick a style ! "
    },
    "fr": {
        "copyrightNotice": "Et n'oubliez pas...",
        "toTop": "Haut de page",
        "stylePrompt": "Choisis ton style ! "
    }
}

document.write('	<p style="text-align: center;">© Bad64 2025<br>' + footerStrings[lang]["copyrightNotice"] + '</p>');
document.write('	<div class="badges">');
document.write('		<img src=/common/images/badges/chromevil.gif />');
document.write('	</div>');
document.write('	<p style="text-align: center;"><a href="#">' + footerStrings[lang]["toTop"] + '</a></p>');
document.write('</section>');
document.write('');


document.write('<section id="styleselector">');
document.write('	<label for="stylemenu">' + footerStrings[lang]["styleMenu"] + '</label>');
document.write('');
document.write('	<select id="stylemenu" onchange="easterEggCallback()">');
document.write('		<option value="9x_standard">9x Standard</option>');
document.write('		<option value="9x_plum">9x Plum</option>');
document.write('		<option value="9x_matrix">9x Matrix</option>');
document.write('		<option value="9x_mystery">9x Mystery</option>');
document.write('		<option selected="selected" value="xp_luna">XP Luna (default)</option>');
document.write('		<option value="xp_olive">XP Olive</option>');
document.write('		<option value="xp_silver">XP Silver</option>');
document.write('		<option value="xp_royale_noir">XP Royale Noir</option>');
document.write('		<option value="watercolor">Whistler Watercolor</option>');
document.write('		<option value="cde">Common Desktop Environment</option>');
document.write('	</select>');
document.write('</section>');
document.write('<style id="extrastyle"></style>');
document.write('');
document.write('<script src="/common/elements/scripts.js"></script>');
document.write('<script src="/common/gadgets/toasters/canvas.js"></script>');
