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
        self.lang = self.splitpath[1]
        self.year = self.splitpath[2]
        self.month = self.splitpath[3]
        self.day = self.splitpath[4]
        self.date = f"{self.day}/{self.month}/{self.year}"
        self.filename = self.splitpath[5].split(".shtml")[0]
        self.ctime = time.strftime("%H:%M", time.strptime(time.ctime(os.path.getctime(path))))

        self.title = f"{self.filename} - {self.date} {self.ctime}"
        # Build content as a string
        with open(self.path, 'r') as file:
            self.content = file.read()
        self.content = self.content.split("\n")
        if self.content[-1] == "":
            self.content.pop(-1)

    def generate(self):
        # Formats the blog post to be inserted into the HTML template
        html = "\t\t\t<article class=\"blogpost\">\n"
        html += "\t\t\t\t<table class=\"titlebar\">\n"
        html += "\t\t\t\t\t<tr>\n"
        html += "\t\t\t\t\t\t<td><label class=\"title\">" + self.title + "</label></td>\n"
        html += "\t\t\t\t\t\t<td class=\"buttoncontainer\">\n"
        html += "\t\t\t\t\t\t\t<script src=\"/common/elements/fakebuttons.js\"></script>\n"
        html += "\t\t\t\t\t\t</td>\n"
        html += "\t\t\t\t\t</tr>\n"
        html += "\t\t\t\t</table>\n"
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
    navStr = "\t\t\t<!--Old school navigation widget-->\n"
    navStr += "\t\t\t<div style=\"display: flex; flex-wrap: wrap; justify-content: center;\">\n"

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
fileEnd = []

with open("../../common/elements/template.shtml", 'r') as t:
    doNotAppend = False
    targetArray = "fileStart"
    for line in t:
        if "Blog post generator start flag" in line:
            doNotAppend = True
            targetArray = "fileEnd"
        elif "Blog post generator end flag" in line:
            doNotAppend = False

        if doNotAppend == False:
            eval(f"{targetArray}.append(line)")

## Append title
fileStart[3] = "\t\t<title>Blog - Bad64's Domain</title>\n"

## And blog header
fileStart.append("\n\t\t\t<div class=\"heading\">Blog</div>\n")
fileStart = ''.join(fileStart)
fileEnd = ''.join(fileEnd)

for lang in [ "en", "fr" ]:
    print(f"Working on the \"{lang}\" blog")
    # Seek all posts
    posts = []
    files = glob.glob(f"posts/{lang}/*/*/*/*.shtml", recursive=True)

    print(f"Found {len(files)} posts")

    # Sort posts by date
    for file in files:
        posts.append(Post(file))
    posts = list(reversed(sorted(posts, key=Post.get_publication_time)))

    # Clear the working dir
    print(f"Clearing the workdir: ../../{lang}/blog/*.shtml")
    for file in glob.glob("../../{lang}/blog/*.shtml"):
        os.remove(file)

    # Create pages
    maxPages = int(ceil((len(posts) / 5)))

    print(f"Creating a total of {maxPages} pages")
    for i in range(1, maxPages + 1):
        print(f"Creating page {lang}/blog/{i}.shtml (out of {maxPages})")
        with open(f"../../{lang}/blog/{i}.shtml", "w") as f:
            f.write(fileStart)
            f.write(navigationWidget(i, maxPages+1))
            for j in range(len(posts)):
                print(f"\tWriting blog post {posts[0].title}")
                f.write(posts.pop(0).generate())
                if j + 1 == 5:
                    break
            f.write(navigationWidget(i, maxPages+1))
            f.write(fileEnd)