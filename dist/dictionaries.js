"use strict";
// The key of a dictionary must be 'string', 'number', 'symbol', or a template literal type.
let a;
let b;
a = { a: 'car', b: 'train', c: 'plane', d: 'boat' };
b = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' };
// and can be retrieved as such
console.log(a['a']);
console.log(b[2]);
// Since Dictionaries are really just objects. You can also retrieve
// a dictionary's value using object notation if the keys are strings
console.log(a.c);
// console.log(b.2) // this doesn't work when the key is a number
// you can add items to a dictionary
a['e'] = 'go-cart';
console.log(a);
// you can delete
delete b[2];
console.log(b);
// The values of a dictionary can be of any type, even an n-dimension array.
let c;
c = { 1: [[1, 2, 3], [3, 2, 1], [0, 3, 4]], 2: [[4, 5, 6], [5, 4, 6]], 3: [[7, 8, 9],], 4: [[10, 11, 12]] };
console.log(c);
