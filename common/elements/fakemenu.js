document.write('<!-- A fake but convincing looking menu-bar-->');
document.write('<div class="fakemenu">');

var lang = window.location.href.split("/")[3];
switch (lang) {
    case "fr":
        document.write("<span>&nbsp;<u>F</u>ichier&nbsp;</span><span>&nbsp;<u>É</u>dition&nbsp;</span><span>&nbsp;<u>À</u> propos&nbsp;</span>");
        break;
    default:
        document.write("<span>&nbsp;<u>F</u>ile&nbsp;</span><span>&nbsp;<u>E</u>dit&nbsp;</span><span>&nbsp;<u>A</u>bout&nbsp;</span>");
        break;
}

document.write('</div>');