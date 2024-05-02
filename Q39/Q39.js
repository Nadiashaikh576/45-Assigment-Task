"use strict";
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// // Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
let c1 = city_country('Moscow', 'Russia');
let c2 = city_country('Mumbai', 'India');
let c3 = city_country('New York City', 'United States');
console.log(c1);
console.log(c2);
console.log(c3);
