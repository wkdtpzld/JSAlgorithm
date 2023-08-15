const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = parseInt(input[0]);

for (let i = 0; i < num; i++) {
    console.log(" ".repeat(num - (i + 1)) + "*".repeat(i + 1));
}