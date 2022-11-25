function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;
  const cache = [];
  let answer = 0;

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city)
      answer++;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}