//Q.2 Calculate the area of Triangle?
let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3);
let area = Math.sqrt(s*((s - side1)* (s - side2)* (s - side3)));
console.log(area);