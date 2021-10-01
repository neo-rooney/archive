let ms_parse = Date.parse('2020-03-21T00:00:00.000');
console.log(ms_parse); //1584716400000

console.log(new Date(ms_parse)); //2020-03-20T15:00:00.000Z

//Z 붙이는 경우 UTC+0 기준으로 시간 설정, 붙이지 않는 경우 현재 로컬 기준 UTC로 설정
console.log(new Date(Date.parse('2020-03-21T00:00:00.000Z'))) //2020-03-21T00:00:00.000Z