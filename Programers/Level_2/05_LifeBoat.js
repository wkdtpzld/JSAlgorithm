function solution(people, limit) {
  people.sort((a, b) => a - b).reverse();

  let start = 0;
  let end = people.length - 1;
  let count = people.length

  while (start < end) {
    
    if (people[start] + people[end] <= limit) {
      end -= 1;
      count -= 1;
    }
    start += 1;
  }

  return count;
}

// [80, 70, 50, 50]