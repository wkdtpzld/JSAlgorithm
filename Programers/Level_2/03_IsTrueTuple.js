function solution(s) {
  let count = 0;
  const length = s.length;
  console.log(length);

  for (let i = 0; i < length; i++) {
    count += s[i] === '(' ? 1 : -1;
    if (count < 0) {
      return false;
    }
  }

  return count === 0 ? true : false
}