#!/usr/bin/python3

# Blog post creator tool

import datetime
import os
from pathlib import Path
import sys

now = datetime.datetime.now()
lang = input("Blog language: ").lower()
if lang not in [ "en", "fr" ]:
    while lang not in [ "en", "fr" ]:
        print("Unknown language; only accepting \"en\" and \"fr\"")
        lang = input("Blog language: ").lower()
f = input("Blog post name: ") + ".shtml"

outputFolder = f"posts/{lang}/{now.year}/{now.month:02}/{now.day:02}"

Path(outputFolder).mkdir(parents=True, exist_ok=True)
print(f"Creating {outputFolder}/{f}")
print("Press Ctrl+D when you're done !")
body = ""

for line in sys.stdin:
    body += line

body += "<div class=\"signature\">- Bad64</div>"
body = body.replace('\n', "<br>\n")

with open(f"{outputFolder}/{f}", "w") as outFile:
    for line in body:
        outFile.write(line)

print("Done ! Don't forget to ./generate !")
