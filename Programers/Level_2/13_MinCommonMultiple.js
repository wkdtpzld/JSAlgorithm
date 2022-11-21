function solution(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  let maxNum = sortArr[sortArr.length - 1];
  while (true) {
    let flag = true;

    sortArr.forEach(element => {
      if (maxNum % element !== 0) {
        flag = false;
      }
    });

    if (flag) {
      break;
    } else {
      maxNum++;
    }
  }

  return maxNum;
}