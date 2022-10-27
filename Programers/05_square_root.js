function solution(n) {
  const sqrt = Math.sqrt(n);

  if (sqrt !== parseInt(sqrt)) {
    return -1;
  } 

  return (sqrt + 1) ** 2; 
}