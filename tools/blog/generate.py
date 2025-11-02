#!/usr/bin/python3

## Generator script that takes HTML and outputs... more HTML (trust me, it makes sense in context)

import datetime
import glob
from math import ceil
import os
import time

class Post():
    # A Post. Formatted and ready to go
    def __init__(self, path):
        # Creates a post using the file name as a title, file ctime as post date, and file contents as the post body
        self.path = path
        
        self.splitpath = self.path.split("/")
        self.year = self.splitpath[1]
        self.month = self.splitpath[2]
        self.day = self.splitpath[3]
        self.date = f"{self.day}/{self.month}/{self.year}"
        self.filename = self.splitpath[4].split(".shtml")[0]
        self.ctime = time.strftime("%H:%M", time.strptime(time.ctime(os.path.getctime(path))))

        self.title = f"{self.filename} - {self.date} {self.ctime}"
        # Build content as a string
        with open(self.path, 'r') as file:
            self.content = file.read()
        self.content = self.content.split("\n")
        self.content.pop(-1)

    def generate(self):
        # Formats the blog post to be inserted into the HTML template
        html = "\t\t\t<article class=\"blogpost\">\n"
        html += "\t\t\t\t<div class=\"titlebar\">\n"
        html += "\t\t\t\t\t<label class=\"title\">" + self.title + "</label>\n"
        html += "\t\t\t\t\t<div class=\"buttoncontainer\">\n"
        html += "\t\t\t\t\t<label class=\"fakebutton_minimize\">0</label>\n"
        html += "\t\t\t\t\t<label class=\"fakebutton_maximize\">1</label>\n"
        html += "\t\t\t\t\t<label class=\"fakebutton_close\">r</label>\n"
        html += "\t\t\t\t\t</div>\n"
        html += "\t\t\t\t</div>\n"
        #html += "\t\t\t\t<!--#include virtual=\"/common/elements/fakemenu.shtml\"-->\n"
        html += "\t\t\t\t<script src=\"/common/elements/fakemenu.js\"></script>\n"
        html += "\t\t\t\t<p>\n"
        for line in self.content:
            html += "\t\t\t\t\t" + line + '\n'
        html = html[:-1]
        html += "\n\t\t\t\t</p>\n"
        html += "\t\t\t</article>\n"

        return html

    def get_publication_time(self):
        # Returns the post date (but not time) for sorting
        return datetime.datetime.strptime(self.date, "%d/%m/%Y")

def navigationWidget(pageNumber, maxPages):
    # Old-style chevron based navigation widget
    navStr = "\n\t\t\t<div style=\"display: flex; flex-wrap: wrap; justify-content: center;\">\n"

    # First/Previous
    if pageNumber == 1:
        pass
    elif pageNumber == 2:
        navStr += f"\t\t\t\t&nbsp;<a href=\"1.shtml\">&lt;</a>&nbsp;"
    else:
        navStr += f"\t\t\t\t&nbsp;<a href=\"1.shtml\">&lt;&lt;</a>&nbsp;"
        navStr += f"\t\t\t\t&nbsp;<a href=\"{pageNumber-1}.shtml\">&lt;</a>&nbsp;"

    # Regular pages
    for i in range(1, maxPages):
        if i == pageNumber:
            navStr += f"\t\t\t\t&nbsp;<strong>{i}</strong>&nbsp;"
        else:
            navStr += f"\t\t\t\t&nbsp;<a href=\"{i}.shtml\">{i}</a>&nbsp;"

    # Next/Last
    if pageNumber + 1 < maxPages:
        navStr += f"\t\t\t\t&nbsp;<a href=\"{pageNumber+1}.shtml\">&gt;</a>&nbsp;"
    if pageNumber + 2 < maxPages:
        navStr += f"\t\t\t\t&nbsp;<a href=\"{maxPages}.shtml\">&gt;&gt;</a>&nbsp;"

    navStr += "\n\t\t\t</div>\n"
    return navStr

# Split the template
fileStart = []

with open("../../common/elements/template.shtml", 'r') as t:
    for line in t:
        fileStart.append(line)
        if "section" in line:
            break

## Append title
fileStart[3] = "\t\t<title>Blog - Bad64's Domain</title>\n"

## And blog header
fileStart.append("\n\t\t\t<h3>Blog</h3>\n")
fileStart = ''.join(fileStart)

# Now the end of the file
fileEnd = "\t\t\t<script src=\"/common/elements/footer.js\"></script>\n"
fileEnd += "\t\t\t<script>window.onload = () => { document.getElementsByClassName(\"content\")[0].getElementsByTagName(\"h3\")[0].style.marginTop = document.getElementByTagName(\"nav\")[0].getBoundingClientRect().top + \"px\"; }</script>\n"
fileEnd += "\t\t</section>\n"
fileEnd += "\t</body>\n"
fileEnd += "</html>"

# Seek all posts
posts = []
files = glob.glob("posts/*/*/*/*.shtml", recursive=True)

print(f"Found {len(files)} posts")

# Sort posts by date
for file in files:
    posts.append(Post(file))
posts = list(reversed(sorted(posts, key=Post.get_publication_time)))

# Clear the working dir
print("Clearing the workdir")
for file in glob.glob("../../en/blog/*.shtml"):
    os.remove(file)

# Create pages
maxPages = int(ceil((len(posts) / 5)))

print(f"Creating a total of {maxPages} pages")
for i in range(1, maxPages + 1):
    print(f"Creating page blog/{i}.shtml (out of {maxPages})")
    with open(f"../../en/blog/{i}.shtml", "w") as f:
        f.write(fileStart)
        f.write(navigationWidget(i, maxPages+1))
        for j in range(len(posts)):
            print(f"\tWriting blog post {posts[0].title}")
            f.write(posts.pop(0).generate())
            if j + 1 == 5:
                break
        f.write(fileEnd)