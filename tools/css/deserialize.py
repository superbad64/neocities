#!/usr/bin/python3

# Takes stringified CSS. Outputs normal CSS. Straightforward.

import sys
from copy import deepcopy

argcopy = deepcopy(sys.argv[1])
argcopy = argcopy.replace("{ ", "{\n\t")
argcopy = argcopy.replace("; }", ";\n}\n\n")
argcopy = argcopy.replace("; ", ";\n\t")

argcopy = argcopy[:-2]

print(argcopy.expandtabs(4))