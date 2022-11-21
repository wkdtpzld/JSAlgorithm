function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      answer++;
      n -= 1;
    } else {
      n /= 2;
    }
  }
  return answer;
}

// 제한 사항
// 숫자 N: 1 이상 10억 이하의 자연수
// 숫자 K: 1 이상의 자연수

// BFS로 할려했었는데 N의 최대 수가 10억임 ;;;;;;;;;;;;;;;