// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great!');
        // magicians[i] = magicians[i] + ' the great!';
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians3 = ["AR.Rehman", "Sonu Nigam", "Noor Jehan"];
var greatMagicians2 = make_great2(magicians3);
console.log("Original Magicians:");
show_magicians(magicians3);
console.log("\n Great Magicians:");
show_magicians(greatMagicians2);
