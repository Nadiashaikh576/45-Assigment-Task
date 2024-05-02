"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Governor sindh kamran khan tessori";
//in lowerCase
console.log("toLowerCase:", personName.toLowerCase());
//in upperCase
console.log("toUpperCase:", personName.toUpperCase());
//in titleCase
console.log("titleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
