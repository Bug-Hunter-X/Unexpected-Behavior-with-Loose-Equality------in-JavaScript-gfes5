function foo(x) {
  if (x == null) {
    return 0;
  } else if (typeof x === 'string') {
    return x.length;
  } else {
    return x + 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo('hello')); // Output: 5
console.log(foo(5)); // Output: 6
console.log(foo(NaN)); // Output: NaN + 1 which is NaN