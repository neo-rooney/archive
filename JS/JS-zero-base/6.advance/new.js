function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = 'flour';
}

let bread_1 = new FishBread('cream', 1000);

console.log(bread_1);
  