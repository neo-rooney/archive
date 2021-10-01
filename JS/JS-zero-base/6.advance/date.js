let date_new = new Date();
let date_str = Date();

console.log(date_new); //2021-09-28T14:04:55.734Z
console.log(typeof date_new); //object
console.log(date_str); //Tue Sep 28 2021 23:04:55 GMT+0900 (GMT+09:00)
console.log(typeof date_str); //string

let date_ms_1 = new Date(0);
console.log(date_ms_1); //1970-01-01T00:00:00.000Z

let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2); //1970-01-02T00:00:00.000Z

let date_string = new Date('2020-09-28');
console.log(date_string); //2020-09-28T00:00:00.000Z

//month : 0(1월) - 12월(11)
let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1); //2020-12-31T15:00:00.000Z
let date_params_2 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_2); //2021-01-01T00:00:00.000Z
