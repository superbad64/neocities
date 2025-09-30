#!/usr/bin/python3

# NeoCities doesn't support SSI. Time to get creative with some JS !

import glob
import os

src = "../../common/elements/html/*"
dst = "../../common/elements/js/"
files = glob.glob(src)

for f in files:
    basename = os.path.basename(f).rsplit('/')[0].split('.')[0]
    buf = []
    with open(f, 'r') as srcFile:
        print(f"Reading {f}")
        for line in srcFile:
            buf.append("document.write('" + line.rstrip('\n') + "');\n")

    print(f"Writing to {dst}{basename}.js")
    with open(f"{dst}{basename}.js", "w") as dstFile:
        for line in buf:
            dstFile.write(line)
