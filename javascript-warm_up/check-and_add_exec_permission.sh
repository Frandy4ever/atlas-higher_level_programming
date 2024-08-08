#!/bin/bash

file=$1

if [-z "$file"]; then
    echo "Usage: $0 <file>"
    echo "0-javascript_is_amazing.js"
    echo "1-multi_languages.js"
    echo "2-arguments.js"
    echo "3-value_argument.js"
    echo "4-concat.js"
    echo "5-to_integer.js"
    echo "6-multi_languages_loop.js"    
    exit 1
fi

mode=$(git ls-files --stage "$file" | awk '{print $1}')
if [ "$mode" == "100755" ]; then
    echo "File '$file' has executable permissions."
    echo "Adding executable permissions to '$file'."
    chmod +u "$file"
    git add "$file"
    echo "Executable permissions added and file staged."
fi
