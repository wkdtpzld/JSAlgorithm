function solution(n) {
  const arr = [];

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  };

  const result = arr.reduce((p, c) => p + c, 0);
  return result;
}