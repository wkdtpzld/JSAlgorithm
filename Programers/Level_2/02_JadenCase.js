function solution(s) {
  const arr = s.split(" ");

  const result = arr.map((str) => {
    const firstStr = str.slice(0, 1).toUpperCase();
    const AfterStr = str.slice(1).toLowerCase();

    return firstStr + AfterStr;
  })

  return result.join(' ');
}