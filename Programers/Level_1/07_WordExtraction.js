function solution(s){
  const check_p = (s.match(/p/gi) ? s.match(/p/gi).length : 0);
  const check_y = (s.match(/y/gi) ? s.match(/y/gi).length : 0);

  if (check_p === check_y) {
    return true;
  }
  return false;
}