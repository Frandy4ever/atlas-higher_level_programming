#!/usr/bin/node

const firstArg = parseInt(process.argv[2]);
console.log(
    (!firstArg)
    ? 'Not a number'
    : `My number: ${firstArg}`
);
