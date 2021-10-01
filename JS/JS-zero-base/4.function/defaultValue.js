function print_add(x, y = 20) {
  console.log(x + y);
}

print_add(); //NaN
print_add(10); //30
print_add(10, 20); //30
print_add(10, 20, 30); //30
