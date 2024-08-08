#!/usr/bin/node

const numberArg = process.argv.slice(2).length;
console.log(
    (numberArg === 0)
    ? 'No argument'
    : (numberArg === 1)
    ? 'Argument found'
    : 'Arguments found'
);
