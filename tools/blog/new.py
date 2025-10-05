#!/usr/bin/python3

# Blog post creator tool

import datetime
import os
from pathlib import Path
import sys

now = datetime.datetime.now()
f = input("Blog post name: ") + ".shtml"

outputFolder = f"posts/{now.year}/{now.month:02}/{now.day:02}"

Path(outputFolder).mkdir(parents=True, exist_ok=True)
print(f"Creating {outputFolder}/{f}")
print("Press Ctrl+D when you're done !")
body = ""

for line in sys.stdin:
    body += line

body = body.replace('\n', "<br>\n")

with open(f"{outputFolder}/{f}", "w") as outFile:
    for line in body:
        outFile.write(line)

print("Done ! Don't forget to ./generate !")
