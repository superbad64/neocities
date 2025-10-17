#!/usr/bin/python3

## Generator script that takes HTML and outputs... more HTML (trust me, it makes sense in context)

import datetime
import glob
from math import ceil
import os

class Post():
    # A Post. Formatted and ready to go
    def __init__(self, path):
        # Creates a post using the file name as a title, file ctime as post date, and file contents as the post body
        self.path = path
        self.date = datetime.datetime.fromtimestamp(os.path.getctime(self.path)).strftime("%d/%m/%Y %H:%M")
        self.title = os.path.basename(path).rsplit('.')[0] + " - " + self.date
        # Build content as a string
        with open(self.path, 'r') as file:
            self.content = file.read()

    def generate(self):
        # Formats the blog post to be inserted into the HTML template
        html = "<article class=\"blogpost\">\n"
        html += "\t<div class=\"titlebar\">\n"
        html += "\t\t<label class=\"title\">" + self.title + "</label>\n"
        html += "\t\t<div class=\"buttoncontainer\">\n"
        html += "\t\t\t<label class=\"fakebutton\">X</label>\n"
        html += "\t\t</div>\n"
        html += "\t</div>\n"
        #html += "\t<!--#include virtual=\"/common/elements/fakemenu.shtml\"-->\n"
        html += "\t<script src=\"/common/elements/js/fakemenu.js\"></script>\n"
        html += "\t<p>\n"
        html += self.content
        html += "\n\t</p>\n"
        html += "</article>"

        return html

def navigationWidget(pageNumber, maxPages):
    # Old-style chevron based navigation widget
    navStr = "\n<div style=\"display: flex; flex-wrap: wrap; justify-content: center;\">\n"

    # First/Previous
    if pageNumber == 1:
        pass
    elif pageNumber == 2:
        navStr += f"&nbsp<a href=\"1.shtml\">&lt</a>&nbsp"
    else:
        navStr += f"&nbsp<a href=\"1.shtml\">&lt&lt</a>&nbsp"
        navStr += f"&nbsp<a href=\"{pageNumber-1}.shtml\">&lt</a>&nbsp"

    # Regular pages
    for i in range(1, maxPages):
        if i == pageNumber:
            navStr += f"&nbsp<strong>{i}</strong>&nbsp"
        else:
            navStr += f"&nbsp<a href=\"{i}.shtml\">{i}</a>&nbsp"

    # Next/Last
    if pageNumber + 1 < maxPages:
        navStr += f"&nbsp<a href=\"{pageNumber+1}.shtml\">&gt</a>&nbsp"
    if pageNumber + 2 < maxPages:
        navStr += f"&nbsp<a href=\"{maxPages}.shtml\">&gt&gt</a>&nbsp"

    navStr += "\n</div>\n"
    return navStr

# Split the template
fileStart = []

with open("../../common/elements/template.shtml", 'r') as t:
    for line in t:
        fileStart.append(line)
        if "topnav.js" in line or "topnav.shtml" in line:
            break

## Append title
fileStart[3] = "\t\t<title>Bad64's Blog</title>"

## And blog header
fileStart.append("\t<h3>Bad64's Blog</h3>\n")
fileStart = ''.join(fileStart)

#fileEnd = "\t\t\t<!--#include virtual=\"/common/elements/footer.shtml\"-->\n"
fileEnd = "\t\t\t<script src=\"/common/elements/js/footer.js\"></script>\n"
fileEnd += "\t\t\t<script>document.getElementsByClassName(\"content\")[0].getElementsByTagName(\"h3\")[0].style.marginTop = document.getElementsByClassName(\"sidenav\")[0].getBoundingClientRect().top + \"px\"</script>"
fileEnd += "\t\t</div>\n"
fileEnd += "\t</body>\n"
fileEnd += "</html>"

# Seek all posts
posts = []
files = glob.glob("posts/*/*/*/*.shtml", recursive=True)
files = list(reversed(sorted(files, key=os.path.getctime)))

print(f"Found {len(files)} posts")

for file in files:
    posts.append(Post(file))

# Clear the working dir
print("Clearing the workdir")
for file in glob.glob("../../blog/*.shtml"):
    os.remove(file)

# Create pages
maxPages = int(ceil((len(posts) / 5)))

print(f"Creating a total of {maxPages} pages")
for i in range(1, maxPages + 1):
    print(f"Creating page blog/{i}.shtml (out of {maxPages})")
    with open(f"../../blog/{i}.shtml", "w") as f:
        f.write(fileStart)
        f.write(navigationWidget(i, maxPages+1))
        for j in range(len(posts)):
            print(f"\tWriting blog post {posts[0].title}")
            f.write(posts.pop(0).generate())
            if j + 1 == 5:
                break
        f.write(fileEnd)
