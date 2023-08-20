const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = 0;
let result = 0;

while (cnt < input[0]) {
    result += 1;
    if (String(result).includes('666')) {
        cnt += 1;
    }
}

console.log(result);