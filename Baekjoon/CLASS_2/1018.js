const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const MN = input[0].split(" ");

const list = [];

for (let i = 1; i < input.length; i++) {
    list.push(input[i]);
}

let min = 64;

for (let i = 0; i < parseInt(MN[0]) - 7; i++) {
    for (let j = 0; j < parseInt(MN[1]) - 7; j++) {
        let tempBlack = 0;
        let tempWhite = 0;
        const isEven = (i + j) % 2 === 0;
        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                const isEven2 = ((i + k) + (j + l)) % 2 === 0;
                if ((isEven2 === isEven) && list[i + k][j + l] !== "B") {
                    tempBlack += 1;
                } else if (!isEven2 === isEven && list[i + k][j + l] === "B") {
                    tempBlack += 1;
                }

                if ((isEven2 === isEven) && list[i + k][j + l] !== "W") {
                    tempWhite += 1;
                } else if (!isEven2 === isEven && list[i + k][j + l] === "W") {
                    tempWhite += 1;
                }

            }
        }

        const tempMin = Math.min(tempWhite, tempBlack);
        min = Math.min(min, tempMin);
    }
}

console.log(min);

