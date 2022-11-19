function solution(n, words) {
  const wordLength = words.length;

  for (let i = 1; i < wordLength; i++) {
    if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
      return [
        Math.ceil((words.lastIndexOf(words[i]) + 1) % n) === 0
          ? n
          : Math.ceil((words.lastIndexOf(words[i]) + 1) % n),
        Math.ceil((words.lastIndexOf(words[i]) + 1) / n)];
    };

    const previousWord = words[i - 1];
    const lastChar = words[i - 1][previousWord.length - 1];
    const firstChar = words[i][0];

    if (lastChar !== firstChar) {
      const targetPeople = Math.ceil((i + 1) % n) === 0 ? n : Math.ceil((i + 1) % n);
      const targetTurn = Math.ceil((i + 1) / n);
      return [targetPeople, targetTurn];
    }
  }

  return [0, 0];
}
