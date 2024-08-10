#!/usr/bin/node

function factorial(n) {
    const nInteger = Number(n);
    return (!Number.isInteger(nInteger) || nInteger <= 1)
    ? 1
    : nInteger * factorial(nInteger - 1);
}

const arg = process.argv[2];
console.log(factorial(arg));
