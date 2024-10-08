#!/bin/bash

files=(
    "0-javascript_is_amazing.js"
    "1-multi_languages.js"
    "2-arguments.js"
    "3-value_argument.js"
    "4-concat.js"
    "5-to_integer.js"
    "6-multi_languages_loop.js"
    "7-multi_c.js"
    "8-square.js"
    "9-add.js"
)

# Add files to the index
git add "${files[@]}"

# Set executable permissions using git update-index
git update-index --chmod=+x "${files[@]}"

# Commit the changes
git commit -m "Add executable permissions to JavaScript files"
