var lang = document.location.href.split("/")[3];

var footerStrings = {
    "common": {
        "copyrightNotice": "And remember...",
        "toTop": "Back to top",
        "stylePrompt": "Pick a style ! "
    },
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

document.write('<!-- The site footer, with badges, copyright, and other fun stuff -->');
document.write('<section class="footer">');
document.write('	<hr>');

document.write('	<p style="text-align: center;">© Bad64 2025<br>' + footerStrings[lang]["copyrightNotice"] + '</p>');
document.write('	<div class="footerBadges">');
document.write('		<img src=/common/images/badges/chromevil.gif />');
document.write('	</div>');
document.write('	<p style="text-align: center;"><span class="fakelink" onclick="toTop()">' + footerStrings[lang]["toTop"] + '</span></p>');
document.write('</section>');
document.write('');
document.write('<script src="/common/elements/scripts.js"></script>');
document.write('<script src="/common/gadgets/toasters/canvas.js"></script>');

function toTop() {
    articles.scrollTop = 0;
}