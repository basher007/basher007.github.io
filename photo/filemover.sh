#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Illegal number of parameters"
    echo "Usage: filemover.sh folder start_index"
    else
	PREFIX=$1
	INDEX=$2
	CONVERTED_DIR="${PREFIX}_converted"
	echo $CONVERTED_DIR
	#echo $PREFIX $INDEX
	I=1001
	echo "Renaming files in $PREFIX directory. Start index is $INDEX."
	mkdir $CONVERTED_DIR
	for file in $PREFIX/*; do
	        convert "$file" -resize 40% "$CONVERTED_DIR/DSCN$INDEX.small.jpg"
	        convert "$file" -resize 10% "$CONVERTED_DIR/DSCN$INDEX.tbl.jpg"
	        let "INDEX++"
	done
	#####################
fi
