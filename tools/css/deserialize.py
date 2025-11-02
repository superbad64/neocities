#!/usr/bin/python3

# Takes stringified CSS. Outputs (mostly) normal CSS. Straightforward.

import sys
from copy import deepcopy

#DEBUG = True
DEBUG = False

RED = "\033[41m"
DEFAULT = "\033[49m"

argcopy = deepcopy(sys.argv[1])

if (DEBUG):
    print("Stage 1")
    print(argcopy.replace("{ ", "".join(RED + "{ " + DEFAULT)))
    print("")
argcopy = argcopy.replace("{ ", "{\n\t")

if (DEBUG):
    print("Stage 2")
    print(argcopy.replace("; } ", "".join(RED + "; } " + DEFAULT)))
    print("")
argcopy = argcopy.replace("; } ", ";\n}\n\n")
argcopy = argcopy.replace("; }", ";\n}\n\n")

if (DEBUG):
    print("Stage 3")
    print(argcopy.replace("; ", "".join(RED + "; " + DEFAULT)))
    print("")
argcopy = argcopy.replace("; ", ";\n\t")

argcopy = argcopy[:-2]

print(argcopy)