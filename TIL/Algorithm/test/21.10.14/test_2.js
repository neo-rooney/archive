function solve(pattern, str) {
  const words = str.split(' ');
  const patterns = pattern.split('');
  const doneWords = [];
  const newMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (newMap.get(patterns[i]) === undefined) {
      if (doneWords.includes(newMap.get(patterns[i]))) {
        return false;
      } else {
        newMap.set(patterns[i], words[i]);
        doneWords.push(words[i]);
      }
    }
  }
  console.log(newMap.size);
  console.log(newMap);
  return true;
}

console.log(solve('가나다라', '바나나 드래곤 바나나 드래곤'));
