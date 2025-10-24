document.write('<!-- A fake but convincing looking menu-bar, only shows up with the XP style -->');
document.write('<div class="fakemenu">');

var lang = window.location.href.split("/")[3];
switch (lang) {
    case "fr":
        document.write("<u>F</u>ichier&nbsp;&nbsp;<u>É</u>dition&nbsp;&nbsp;<u>À</u> propos");
        break;
    default:
        document.write("<u>F</u>ile&nbsp;&nbsp;<u>E</u>dit&nbsp;&nbsp;<u>A</u>bout");
        break;
}

document.write('</div>');