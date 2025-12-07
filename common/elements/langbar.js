var url = window.location.href.split("/");
url[0] += "/";
var lang = url[3];

document.write(
  '<div id="langbar" style="width: 100; display: flex; justify-content: right; padding-right: 1em; margin-top: 5px">\n',
);
document.write('<p id="langText"></p>');

var locStrings = {
  en: {
    langSelector: "Choose your language:",
  },
  fr: {
    langSelector: "Choisissez votre langue:",
  },
};
//document.getElementById("langText").innerHTML = locStrings[lang]["langSelector"];

function samePageDifferentLang() {
  var locales = ["en", "fr"];
  for (let locale of locales) {
    url[3] = locale;
    // Special cases
    if (url[3] == "fr" && url[4] == "blog") {
      // Since I don't translate my blog
      document.write(
        '<a href="' + url.slice(0, 3).join("/") + '/fr/blog/1.shtml">',
      );
      document.write('<img src="/common/images/lang/' + locale + '.svg"');
      document.write('style="width: auto; cursor: pointer;">');
      document.write("</a>\n");
      document.write("<span>&nbsp;</span>");
    } else {
      document.write('<a href="' + url.join("/") + '">');
      document.write('<img src="/common/images/lang/' + locale + '.svg"');
      document.write('style="width: auto; cursor: pointer;">');
      document.write("</a>\n");
      document.write("<span>&nbsp;</span>");
    }
  }
}
samePageDifferentLang();

document.write("</div>\n");
