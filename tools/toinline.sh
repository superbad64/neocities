#!/bin/bash

cat $1 | sed "/\/\*/d" | tr -d '\t' | tr -s '\n' ' ' ; echo ""
