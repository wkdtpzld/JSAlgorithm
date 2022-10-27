function solution(arr) {
  const average = arr.reduce((p, c) => p + c, 0) / arr.length;
  return average;
}