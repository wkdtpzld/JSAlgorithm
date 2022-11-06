function solution(s) {
  let zero = 0;
  let count = 0;

  while (s.length !== 1) {
    const OriginLength = s.length
    s = s.split('').filter((num) => num === '1').join('')
    const resultLength = s.length

    zero += OriginLength - resultLength
    count++;

    s = resultLength.toString(2);
  }

  return [count, zero]
}