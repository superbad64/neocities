var lang = window.location.href.split("/")[3];
if (["en", "fr"].includes(lang) == false) { lang = "common" };

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

document.write('<!-- The top navigation menu device thingy -->');
document.write('<nav>');
document.write('	<table class="titlebar">');
document.write('        <tbody>');
document.write('		    <td><label class="title">Menu</label></td>');
document.write('		    <td class="buttoncontainer">');
document.write('                <script src="/common/elements/fakebuttons.js"></script>');
document.write('		    </td>');
document.write('        </tbody>');
document.write('	</table>');
document.write('	');
document.write('    <script src="/common/elements/fakemenu.js"></script>');
document.write('	');
document.write('	<div style="display: flex; flex-direction: row; justify-content: space-around; flex-wrap: wrap; padding: 1em;">');
document.write('		<div><img src="/common/images/icons/world-4.png" />&nbsp;' + navStrings[lang]["home"] + '</div>');
document.write('		<div><img src="/common/images/icons/help_book_cool-4.png" />&nbsp;' + navStrings[lang]["aboutMe"] + '</div>');
document.write('		<div><img src="/common/images/icons/keyboard-5.png" />&nbsp;' + navStrings[lang]["articles"] + '</div>');
document.write('		<div><img src="/common/images/icons/computer_explorer-4.png" />&nbsp;' + navStrings[lang]["blog"] + '</div>');
document.write('		<div><img src="/common/images/icons/notepad-5.png" />&nbsp;' + navStrings[lang]["faq"] + '</div>');
document.write('		<div><img src="/common/images/icons/directory_open_file_mydocs-4.png" />&nbsp;' + navStrings[lang]["projects"] + '</div>');
document.write('	</div>');
document.write('</nav>');