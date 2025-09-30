#!/bin/bash

# Quick and dirty script to switch visual styles on the fly

cd ../common/styles

if [ "$1" == "9x" ]; then
	rm styles.css
	echo "Switching style to 9x"
	ln -s styles_9x.css styles.css
elif [ "$1" == "xp" ]; then
	rm styles.css
	echo "Switching style to XP"
	ln -s styles_xp.css styles.css
else
	echo "Invalid style sheet"
fi
