function solution(board) {
  const width = board[0].length;
  const height = board.length;

  let answer = 0;

  if (width === 1 || height === 1) {
    return 1;
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (board[i][j] > 0) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;
  
        answer = Math.max(answer, board[i][j] ** 2);
      }
    }
  }

  return answer;
}


