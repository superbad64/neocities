#!/bin/bash

# Takes CSS. Prints it in a single line. Straightforward.

cat $1 | sed "/\/\*/d" | tr -d '\t' | tr -s '\n' ' ' ; echo ""