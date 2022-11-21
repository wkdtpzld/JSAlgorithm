function solution(n, a, b) {
  let x = a;
  let y = b;
  let answer = 1
  while (n > 1) {
    if (Math.ceil(x / 2) === Math.ceil(y / 2)) {
      break;
    } else {
      x /= 2;
      y /= 2;
    }
    n /= 2;
    answer++;
  }

  return answer
}
