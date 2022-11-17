function solution(n) {
  const length = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === length) return n;
  }
}