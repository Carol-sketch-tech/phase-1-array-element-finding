// fincding array elements 
//  finding array elements using simple condition with Array.prototype.indexOf()
// finding elements with complex condition using Array.prototype.find()
//  the above stated methods are used to locate methods that are used to locate array 
// elements or data in arrays.


// finding an element using the method Array.prototype.indexOf()
//  it is called on array and takes two arguments.the value one is looking for and an optional start position.
//  it compared each value inturn to the value one is looking fot by using the string comparison oiperator ====
// and returns the index of the first matching element.
// if the element is not contained in the array it returns -1.

//  the above is an array
const cards= ['queen of hearts','jack of clubs','ten of diamonds','ace of spades'];
// finding an element in the array with a value "jack of clubs"
console.log(cards.indexOf('ten of diamonds'));// the output s the index of the value in the array.
console.log(cards.indexOf('people of avonlea')) // the output that is logged out in the console is index -1.
// meaning that the value is not in the array.



// finding elements with complex condition we use method Array.prototype.fincd()
//  allows you to execute a function by passing it a callbackfunction.
//  the method will iterate through the array, call the callback on each value and return the first element in
//  the array that satisfies the condition defined by the function. if no matching elemnt is found, undefined is returned.
// the method iterates through the array and in each iteration passes htree arguments to the callback 
//  these arguments are the current elemnt of the array, teh index of the current element and the array itself.

function isOdd(element, index, array){
    return (element % 2 === 1);
}
console.log([2,4,5,6].find(isOdd));