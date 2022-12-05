function solve(bj, one, two) {
  let winner;
  const newMap = new Map();
  let price = 0;
  for (let i = 0; i < one.length; i++) {
    newMap.set(one[i], 1);
  }
  for (let i = 0; i < two.length; i++) {
    newMap.set(two[i], 2);
  }
  for (let i = 0; i < bj.length; i++) {
    if (!newMap.has(bj[i])) {
      winner = bj[i];
    }
  }
  price = 150 * one.length + 300 * two.length + 450;

  return `${price}만원(${winner})`;
}
let bj = ['혁준', '하밥', '양상', '심심이', '소스왕'];
let one = ['혁준'];
let two = ['소스왕', '심심이', '양상'];
console.log(solve(bj, one, two));
