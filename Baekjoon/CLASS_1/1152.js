const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = input[0].split(" ");
let max = 0;

const result = list.map((item, index) => {
    if (item.length === 0) return max;
    max += 1;
    return max;
});

console.log(result.at(-1));