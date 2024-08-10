#!/usr/bin/node

function add(a, b) {
    const firstNum = parseInt(a);
    const secondNum = parseInt(b);
    console.log(firstNum + secondNum);
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];
add(firstArg, secondArg);
