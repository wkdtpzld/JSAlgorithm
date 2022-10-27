function solution(n) {
  const arr = String(n).split("").reverse();
  const IntArr = arr.map(Number);
  return IntArr;
}