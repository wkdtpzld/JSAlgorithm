const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let list = input.slice(1, Number(input[0] + 1));

list = [...new Set(list)];

const compareLength = (a, b) => a.length - b.length;
const compareString = (a, b) => {
    if (a < b) return -1;
    else if (a === b) return 0;
    else if (a > b) return 1;
}

list.sort((a,b) => {
    return compareLength(a, b) || compareString(a, b);
});

console.log(list.reduce((str, value) => {
    return str + value + '\n'
}).trim());