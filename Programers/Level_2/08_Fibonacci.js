// 재귀보다는 반복문이 빠름 
function solution(n) {
  let arr = [0, 1]
  
  const fc = (n) => {
    if (arr[n] !== undefined) {
      return arr[n];
    }
    arr[n] = (fc(n - 1) + fc(n - 2)) % 1234567;
    return arr[n];
  }

  return fc(n);
}

function solution2(n) {

  let arr = [0, 1];

  for (let i = 0; i <= n; i++) {
    if (arr[i] === undefined) {
      arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567
    }
  }

  return arr[n];
}