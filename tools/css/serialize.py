#!/usr/bin/python3

# Takes CSS. Prints it in a single line. Straightforward.

import sys

args = ""

with open(sys.argv[1]) as f:
    for line in f.readlines():
        args += line

args = args.replace('\n', ' ')
args = args.replace('\t', ' ')
args = args.replace("  ", ' ')
args = args.replace('\"', "\\\"")
print(f"extrastyle.innerHTML = \"{args[:-1]}\";")