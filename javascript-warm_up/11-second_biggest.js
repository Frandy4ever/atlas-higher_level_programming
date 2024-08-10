function secondBiggest(array) {
    if (array.length < 2 ) {
        console.log(0)
        return
    }
   const sortedArray = array.map(Number).sort((a, b) => b - a);

   console.log(sortedArray[1]);
}

const arg = process.argv.slice(2);
secondBiggest(arg);
