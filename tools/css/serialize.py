#!/usr/bin/python3

# Takes CSS. Prints it in a single line. Straightforward.

import sys

with open(sys.argv[1]) as f:
    while True:
        c = f.read(1)
        if not c:
            break

        if c in [ '\n' ]:
            print(" ", sep="", end="")
        elif c in [ '\r', '\t' ]:
            continue
        else:
            print(c, sep="", end="")

print("")