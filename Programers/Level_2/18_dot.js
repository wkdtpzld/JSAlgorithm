function solution(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    const height = Math.sqrt(d ** 2 - i ** 2);
    answer += Math.floor(height / k) + 1;
  }

  return answer;
}