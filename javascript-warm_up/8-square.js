#!/usr/bin/node

const size = parseInt(process.argv[2]);
if (!size) {
    console.log('Missing size');
} else {
    for (let row = 0; row < size; row++) {
        console.log('X'.repeat(row))
    }
}
