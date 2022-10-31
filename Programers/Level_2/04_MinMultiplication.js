function solution(A, B) {
  const sorted_A = A.sort((a, b) => a - b);
  const reverse_B = B.sort((a, b) => a - b).reverse();
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += sorted_A[i] * reverse_B[i];
  }

  return result;
}
