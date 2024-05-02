"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_Fruits = ["Mango", "Strawberry", "PineApple"];
if (favorite_Fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (favorite_Fruits.includes("Strawberry")) {
    console.log("You really like Strawberries!");
}
if (favorite_Fruits.includes("PineApple")) {
    console.log("You really like PineApple!");
}
if (favorite_Fruits.includes("Orange")) {
    console.log("You really like Orange!");
}
else {
    console.log("Orange are not in your favorite fruits list.");
}
if (favorite_Fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
else {
    console.log("Grapes are not in your favorite fruits list.");
}
