var url = window.location.href.split("/");
url[0] += "/";
var lang = url[3];

var locStrings = {
  en: {
    langSelector: "Language:",
    langSelectorValues: {
        langFR: "French",
        langEN: "English"
    },
    styleSelector: "Style:"
  },
  fr: {
    langSelector: "Langue:",
    langSelectorValues: {
        langFR: "Français",
        langEN: "Anglais"
    },
    styleSelector: "Style:"
  },
};

document.write("<!-- The page header with a style and language selector-->")
document.write("<table style=\"width: 100%;\">");
document.write("    <tbody>");
document.write("        <tr>");
document.write("            <td>")
document.write("              <label for=\"stylemenu\" id=\"styleSelectorLabel\"></label>");
document.write('              <select id="stylemenu" onchange="styleCallback()">');
document.write('		            <option value="dos-like">DOS-like</option>');
document.write('		            <option value="9x_standard">9x Standard</option>');
document.write('		            <option value="9x_plum">9x Plum</option>');
document.write('		            <option value="9x_matrix">9x Matrix</option>');
document.write('		            <option value="9x_mystery">9x Mystery</option>');
document.write('		            <option value="xp_classic">XP Classic</option>');
document.write('		            <option selected="selected" value="xp_luna">XP Luna (default)</option>');
document.write('		            <option value="xp_olive">XP Olive</option>');
document.write('		            <option value="xp_silver">XP Silver</option>');
document.write('		            <option value="xp_royale_noir">XP Royale Noir</option>');
document.write('		            <option value="whistler_watercolor">Whistler Watercolor</option>');
document.write('		            <option value="common_desktop_environment">Common Desktop Environment</option>');
document.write('		            <option value="neocities_classic">GeoCities Classic</option>');
document.write('		            <option value="material">Flat(-ish) Material</option>');
document.write('              </select>');
document.write("            </td>")
document.write("            <td style=\"text-align: right\">")
document.write("                <label for=\"langSelector\" id=\"langSelectorLabel\"></label>");
document.write("                <select name=\"lang\" id=\"langSelector\">");
document.write("                    <option id=\"langSelectorOptionFrench\" value=\"fr\"></option>");
document.write("                    <option id=\"langSelectorOptionEnglish\" value=\"en\"></option>");
document.write("                </select>");
document.write("            </td>")
document.write("        </tr>");
document.write("    <tbody>");
document.write("</table>");

function headerInit() {
    document.getElementById("styleSelectorLabel").innerHTML = locStrings[lang]["styleSelector"];

    document.getElementById("langSelectorLabel").innerHTML = locStrings[lang]["langSelector"];
    document.getElementById("langSelector").value = lang;
    document.getElementById("langSelectorOptionFrench").innerHTML = locStrings[lang]["langSelectorValues"]["langFR"];
    document.getElementById("langSelectorOptionEnglish").innerHTML = locStrings[lang]["langSelectorValues"]["langEN"];
}
window.onload = headerInit();

function samePageDifferentLang() {
  url[3] = langSelector.value;
  document.location.href = url.join("/");
}
document.getElementById("langSelector").onchange = samePageDifferentLang;