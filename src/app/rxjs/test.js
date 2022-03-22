"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// const nums = of(1,2,3,4)
// const squareValues = map((n:number)=>n*n)
// const squaredNumber = squareValues(nums)
// squaredNumber.subscribe(data => console.log(data))
//* Pipe
var nums = (0, rxjs_1.of)(1, 2, 3, 4, 5);
var squareOddValues = (0, rxjs_1.pipe)((0, rxjs_1.filter)(function (n) { return n % 2 !== 0; }), (0, rxjs_1.map)(function (val) { return val * val; }));
var squaredOddNumber = squareOddValues(nums);
squaredOddNumber.subscribe(function (data) { return console.log(data); });
