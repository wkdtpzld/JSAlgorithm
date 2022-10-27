function solution(n) {
  const arr = String(n).split("");
  
  let result = 0;
  
  for (i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }

  return result;
}