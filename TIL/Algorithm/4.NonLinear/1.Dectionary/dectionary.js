function Dectionary(items = {}) {
  this.items = items;
}

Dectionary.prototype.getButter = function () {
  return { ...this.items };
};

Dectionary.prototype.clear = function () {
  this.items = {};
};

Dectionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

//has : 개체 존재 여부 확인 (key 정보를 배열로 반환)
Dectionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

//set() : 개체 추가
Dectionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

//get(): 개체 반환
Dectionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

//remove(): 개체 삭제
Dectionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

//key(): 모든 key 값을 배열 형태로 반환
Dectionary.prototype.key = function () {
  return Object.keys(this.items);
};

//values(): 모든 values 값을 배열 형태로 반환
Dectionary.prototype.values = function () {
  return Object.values(this.items);
};

Dectionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};

let dict = new Dectionary();

dict.set('age', 19);
dict.set('name', 'rooney');
dict.set('height', 180);
console.log(dict);
