function solution(citations) {
  const citationsLength = citations.length;
  const arr = [...new Array(citationsLength)].map(() => 0);
  let answer = 0;

  for (let i = 0; i < citationsLength; i++) {
    const citationsIndex = citationsLength < citations[i] ? citationsLength : citations[i];
    for (let j = 0; j < citationsIndex; j++) {
      arr[j] += 1;
    }
  }

  arr.forEach((item, index) => {
    if (item >= index + 1) {
      answer = index + 1;
    };
  });


  return answer
}

function soulution2(citations) {
  const result = (citations) => citations.sort((a, b) => b - a).filter((el, index) => el >= index + 1);
  
  return result(citations).length;
}