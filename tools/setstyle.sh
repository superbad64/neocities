#!/bin/bash

# Quick and dirty script to switch visual styles on the fly

cd ../common/styles

rm styles.css 2>/dev/null
case $1 in
	9x_standard)
		echo "Switching style to 9x Standard"
		cp styles_9x_standard.css styles.css
		;;
	9x_plum)
		echo "Switching style to 9x Plum"
		cp styles_9x_plum.css styles.css
		;;
	9x_darkplum)
		echo "Switching style to 9x Dark Plum"
		cp styles_9x_darkplum.css styles.css
		;;
	9x_storm)
		echo "Switching style to 9x Storm"
		cp styles_9x_storm.css styles.css
		;;
	xp_luna)
		echo "Switching style to XP Luna"
		cp styles_xp_luna.css styles.css
		;;
	xp_olive)
		echo "Switching style to XP Olive"
		cp styles_xp_olive.css styles.css
		;;
	xp_silver)
		echo "Switching style to XP Silver"
		cp styles_xp_silver.css styles.css
		;;
	xp_royale_noir)
		echo "Switching style to XP Royale Noir"
		cp styles_xp_royale_noir.css styles.css
		;;
	*)
		echo "Invalid style"
		;;
esac
