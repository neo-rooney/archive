let obj = {
  name: 'rooney',
  func: function () {
    console.log(`${this.name} hello!!`);
  },
};

obj.func();
