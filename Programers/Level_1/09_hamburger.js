function solution(ingredient) {
  let newArr = [];
  let result = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (newArr.length === 0) {
      if (ingredient[i] === 1) {
        newArr.push(ingredient[i]);
      }
    } else {
      if (newArr[newArr.length - 1] === 1) {
        if (ingredient[i] === 1 || ingredient[i] === 2) {
          newArr.push(ingredient[i]);
        } else {
          newArr = [];
        }
      } else if (newArr[newArr.length - 1] === 2) {
        if (ingredient[i] === 3) {
          newArr.push(ingredient[i]);
        } else if (ingredient[i] === 1) {
          newArr.push(ingredient[i]);
        } else {
          newArr = [];
        }
      } else if (newArr[newArr.length - 1] === 3) {
        if (ingredient[i] === 1) {
          newArr.push(ingredient[i]);
        } else {
          newArr = [];
        }
      }
    }

    if (newArr.length >= 4) {
      const Extraction = newArr.slice(newArr.length - 4, newArr.length);
      const CompareTarget = [1, 2, 3, 1];
      if (CompareTarget.every((value, index) => value === Extraction[index])) {
        for (let index = 0; index < 4; index++) {
          newArr.pop();
        }
        result += 1;
      }
    }
  }

  return result;
}

function solution2(ingredient) {
  let burgers = 0;

  for (let i = 3; i < ingredient.length; i += 1) {
    if (i < 3) i + 2;

    if (
      ingredient[i - 3] === 1 &&
      ingredient[i - 2] === 2 &&
      ingredient[i - 1] === 3 &&
      ingredient[i] === 1
    ) {
      ingredient.splice(i - 3, 4);

      burgers += 1;

      i -= 4;
    }
  }

  return burgers;
}