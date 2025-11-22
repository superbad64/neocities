document.write('<!-- The sidebar navigation menu device thingy -->');
document.write('<nav>');
document.write('	<div class="titlebar">');
document.write('		<label class="title">Menu</label>');
document.write('	</div>');
document.write('	');
document.write('    <script src="/common/elements/fakemenu.js"></script>');

var lang = window.location.href.split("/")[3];
if (lang == "common") { lang = "en"; };

var navStrings = {
    "common": {
        "home": "<a href=\"/en/home.shtml\"><span style=\"text-decoration: underline\">H</span>ome</a>",
        "aboutMe": "<a href=\"/en/about.shtml\"><span style=\"text-decoration: underline\">A</span>bout me</a>",
        "articles": "<a href=\"/en/articles.shtml\">A<span style=\"text-decoration: underline\">r</span>ticles</a>",
        "blog": "<a href=\"/en/blog/1.shtml\"><span style=\"text-decoration: underline\">B</span>log</a>",
        "faq": "<a href=\"/en/faq.shtml\"><span style=\"text-decoration: underline\">F</span>AQ</a>",
        "projects": "<a href=\"/en/projects.shtml\"><span style=\"text-decoration: underline\">P</span>rojects</a>"
    },
    "en": {
        "home": "<a href=\"/en/home.shtml\"><span style=\"text-decoration: underline\">H</span>ome</a>",
        "aboutMe": "<a href=\"/en/about.shtml\"><span style=\"text-decoration: underline\">A</span>bout me</a>",
        "articles": "<a href=\"/en/articles.shtml\">A<span style=\"text-decoration: underline\">r</span>ticles</a>",
        "blog": "<a href=\"/en/blog/1.shtml\"><span style=\"text-decoration: underline\">B</span>log</a>",
        "faq": "<a href=\"/en/faq.shtml\"><span style=\"text-decoration: underline\">F</span>AQ</a>",
        "projects": "<a href=\"/en/projects.shtml\"><span style=\"text-decoration: underline\">P</span>rojects</a>"
    },
    "fr": {
        "home": "<a href=\"/fr/home.shtml\">A<span style=\"text-decoration: underline\">c</span>cueil</a>",
        "aboutMe": "<a href=\"/fr/about.shtml\"><span style=\"text-decoration: underline\">À</span> propos</a>",
        "articles": "<a href=\"/fr/articles.shtml\">A<span style=\"text-decoration: underline\">r</span>ticles</a>",
        "blog": "<a href=\"/fr/blog/1.shtml\"><span style=\"text-decoration: underline\">B</span>log</a>",
        "faq": "<a href=\"/fr/faq.shtml\"><span style=\"text-decoration: underline\">F</span>.A.Q.</a>",
        "projects": "<a href=\"/fr/projects.shtml\"><span style=\"text-decoration: underline\">P</span>rojets</a>"
    }
};

document.write('	');
document.write('	<dl class="horizontalmenu">');
document.write('		<dt><img src="/common/images/icons/world-4.png" />&nbsp;' + navStrings[lang]["home"] + '</dt>');
document.write('		<dt><img src="/common/images/icons/help_book_cool-4.png" />&nbsp;' + navStrings[lang]["aboutMe"] + '</dt>');
document.write('		<dt><img src="/common/images/icons/keyboard-5.png" />&nbsp;' + navStrings[lang]["articles"] + '</dt>');
document.write('		<dt><img src="/common/images/icons/computer_explorer-4.png" />&nbsp;' + navStrings[lang]["blog"] + '</dt>');
document.write('		<dt><img src="/common/images/icons/notepad-5.png" />&nbsp;' + navStrings[lang]["faq"] + '</dt>');
document.write('		<dt><img src="/common/images/icons/directory_open_file_mydocs-4.png" />&nbsp;' + navStrings[lang]["projects"] + '</dt>');
document.write('	</dl>');
document.write('	<div class="verticalmenu">');
document.write('		<div><img src="/common/images/icons/world-4.png" />&nbsp;' + navStrings[lang]["home"] + '</div>');
document.write('		<div><img src="/common/images/icons/help_book_cool-4.png" />&nbsp;' + navStrings[lang]["aboutMe"] + '</div>');
document.write('		<div><img src="/common/images/icons/keyboard-5.png" />&nbsp;' + navStrings[lang]["articles"] + '</div>');
document.write('		<div><img src="/common/images/icons/computer_explorer-4.png" />&nbsp;' + navStrings[lang]["blog"] + '</div>');
document.write('		<div><img src="/common/images/icons/notepad-5.png" />&nbsp;' + navStrings[lang]["faq"] + '</div>');
document.write('		<div><img src="/common/images/icons/directory_open_file_mydocs-4.png" />&nbsp;' + navStrings[lang]["projects"] + '</div>');
document.write('	</div>');

document.write('    <table class=\"navbadges\">');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/firefoxnow.gif /></td>');
document.write('            <td><img src=/common/images/badges/netscapenow.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/neocities-now.gif /></td>');
document.write('            <td><img src=/common/images/badges/dos.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/vim.gif /></td>');
document.write('            <td><img src=/common/images/badges/js.jpg /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/gnu-linux.gif /></td>');
document.write('            <td><img src=/common/images/badges/winxp.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/doombut.gif /></td>');
document.write('            <td><img src=/common/images/badges/dnfbtn.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/unrealorg.gif /></td>');
document.write('            <td><img src=/common/images/badges/quake.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/parental.gif /></td>');
document.write('            <td><img src=/common/images/badges/web_weed.gif /></td>');
document.write('        </tr>');
document.write('        <tr>');
document.write('            <td><img src=/common/images/badges/fspeech.gif /></td>');
document.write('            <td><img src=/common/images/badges/y2ks.gif /></td>');
document.write('        </tr>');
document.write('    </table>');

document.write('</nav>');