// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

//task 1
let guestArr : string[] = ["Hira", "kashaf", "Ahmed", "Ebaad", "Wahaj"];

let canNotAttend : string = "kashaf"

let newGuest : string  = "Zohra";

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
 console.log(guestArr)

//  guestArr.map ((item) => (
//   console.log(`Dear ${item}, I found a bigger dinner table so I am invited more peoples. `)
//   ));
 //task 2 begin
 let guestBegin : string = "Eimaan";
 guestArr.unshift(guestBegin);
 console.log(guestArr);

 //task 3 middle
let middleGuest : string = "Rafay";

let middleIndex = guestArr.length/3

guestArr.splice(middleIndex,3,middleGuest)
console.log(guestArr);

//task 4 append
guestArr.push("Kiran");
console.log(guestArr);

//task 5
 guestArr.map ((item) => (
 console.log(`Dear ${item}, You are cordinally invited in the more people list on dinner.`)
 ));