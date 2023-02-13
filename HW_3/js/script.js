'use strict';

let a = 8;
console.log ('1. variable "a"');
console.log (a);
console.log (typeof a);
let str1 = "Hello!";
console.log ('2. variable "str1"');
console.log (str1);
console.log (typeof str1);
let type = typeof (str1);
console.log ('3. variable "type"');
console.log (type);
console.log (typeof type)
let b = a/Infinity
console.log ('4. variable "b"');
console.log (b);
console.log (typeof (b));
let c = Infinity/Infinity
console.log ('5. variable "c"');
console.log (c);
console.log (typeof (c));
let d;
console.log ('6. variable "d"');
console.log (d);
console.log (typeof d);
d = 5;
console.log (typeof d);

console.log (typeof 3);
console.log (typeof 12n);
console.log (typeof true);
console.log (typeof null);
console.log (typeof "Fagot");
console.log (typeof undefined);

let bus = `Остановка маршрутного`;
let bus1 = "автобуса";
console.log (`${bus} ${bus1}`);
console.log ('${bus} ${bus1}');
console.log ("${bus} ${bus1}");