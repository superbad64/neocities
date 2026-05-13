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
        try:
            self.lang = self.splitpath[1]
        except:
            self.lang = "en"

        try:
            self.year = self.splitpath[2]
        except:
            self.year = "1970"
        
        try:
            self.month = self.splitpath[3]
        except:
            self.month = "01"

        try:
            self.day = self.splitpath[4]
        except:
            self.day = "01"

        try:
            self.filename = self.splitpath[5].split(".shtml")[0]
        except:
            self.filename = "What."
        
        try:
            self.ctime = time.strftime("%H:%M", time.strptime(time.ctime(os.path.getctime(path))))
        except:
            self.ctime = time.strftime("%H:%M", time.strptime(datetime.datetime.now()))

        self.date = f"{self.day}/{self.month}/{self.year} {self.ctime}"
        self.title = f"{self.filename} - {self.date}"
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
        return datetime.datetime.strptime(self.date, "%d/%m/%Y %H:%M")

    def to_string(self):
        # Turns part of the post into a string. Mostly debug stuff
        buf = f"{self.title}\nDate: {self.date}"
        return buf

def navigationWidget(pageNumber, maxPages):
    # Old-style chevron based navigation widget
    navStr = "\t\t\t<!--Old school navigation widget-->\n"
    navStr += "\t\t\t<div class=\"navigationWidget\">\n"

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
        navStr += f"\t\t\t\t&nbsp;<a href=\"{maxPages-1}.shtml\">&gt;&gt;</a>&nbsp;"

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

# Append title
fileStart[3] = "\t\t<title>Home - Bad64's Domain</title>\n"

# And blog header
fileStart = ''.join(fileStart)
fileEnd = ''.join(fileEnd)

for lang in [ "en", "fr" ]:
    print(f"Working on the \"{lang}\" blog")
    # Seek all posts
    posts = [Post(f"../../common/elements/blog00_{lang}.shtml")]

    ## Manually set up post 0 to be the welcome banner
    posts[0].day = datetime.datetime.now().day
    posts[0].month = datetime.datetime.now().month
    posts[0].year = datetime.datetime.now().year
    posts[0].ctime = datetime.datetime.now().strftime("%H:%M")
    posts[0].date = f"{posts[0].day}/{posts[0].month}/{posts[0].year} {posts[0].ctime}"
    
    if lang == "en":
        posts[0].title = "Welcome to the Badlands !"
    elif lang == "fr":
        posts[0].title = "Bienvenue dans la jungle !"

    files = glob.glob(f"posts/{lang}/*/*/*/*.shtml", recursive=True)

    print(f"Found {len(files)} posts")

    # Sort posts by date
    for file in files:
        posts.append(Post(file))
    posts = list(reversed(sorted(posts, key=Post.get_publication_time)))

    # Clear the working dir
    print(f"Clearing the workdir: ../../{lang}/home/*.shtml")
    for file in glob.glob("../../{lang}/home/*.shtml"):
        os.remove(file)

    # Create pages
    maxPages = int(ceil((len(posts) / 5)))

    print(f"Creating a total of {maxPages} pages")
    for i in range(1, maxPages + 1):
        print(f"Creating page {lang}/home/{i}.shtml (out of {maxPages})")
        with open(f"../../{lang}/home/{i}.shtml", "w") as f:
            f.write(fileStart)
            for j in range(len(posts)):
                print(f"\tWriting blog post {posts[0].title}")
                f.write(posts.pop(0).generate())
                if j + 1 == 5:
                    break
            f.write(navigationWidget(i, maxPages+1))
            f.write(fileEnd)