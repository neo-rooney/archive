const str = 'abcde';

for (const ele in str) {
  if (ele == '3') break;
  console.log(`key : ${ele}, value : ${str[ele]}`);
}
