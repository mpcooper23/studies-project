/**
 * 
 *  ***********************=> Data Types <=***************************
 * 
 * 0: Variable declarations bind data. There are simple and complex data types.
 * Simple are static and complex can mutate. 
 * 
 * 1. Number: intergers, which include those that use decimals 
 */

let num = 23;

/* 2. String: characters bracketed by quotations. You may use either single or 
 * double quotes, but be consistent with your usage. 
 */

let string = 'string'

/* 3. Boolean: true or false values. Think of this type of data as a sort of 
 * light switch, whereby you can instruct the computer to take different paths
 * depending on specific boolean conditions. 
 */ 

let bool = true;

 /* 4. Array: zero-indexed, bucket-like container. This complex data type stores other 
 * simple data types, as well as functions. We use bracket notation to access each element. 
 * Elements start at the 0 index. We use for loops to iterate through array elements.
 */

 let array = [1, 'two', {firstName: 'Bobby', lastName: 'Brown'}, true]

 //=> Think of array indexes as filing cabinet slots; for instance, using bracket notation, you
 //can add an element to the fifth index even if there isn't an element in the fourth. In this case the fourth
 //element would be undefined. 

 /* 5. Object: unlike arrays, which are zero-indexed based, objects store key:value pairs,
 * which can be accessed using dot notation or bracket notation. We use for-in loops to access
 * each key in the object. 
 */ 

let obj = {
artist: 'Cinderella',
album: 'Long Cold Winter',
year: '1988',
genre: 'Hair Metal'
}

//=> dot notation only works with literal keys. For example, Javascript reads object.key as an 
//object containing a literal key named "key". (The code typed on the right side of the dot is 
//interpreted literally.) To avoid this error, simply use bracket notation (object[key]) instead 
//of dot (object.key).

object.key = value; //Javascript reads this as a literal key and will create a key named "key".
object[key] = value; //Javascript reads this as a general key and will create a key named after the value.

//=> instead of array methods such as .pop, .unshift, .slice, to remove key:values from objects,
//we can use dot notation and the delete keyword:

delete user.age //will delete the key "age" from user object.

 /* 6. Function: block-scoped and first-class objects in that they can be plugged into other 
 * functions (i.e. higher-order functions) and set as a value to a variable. 
 */ 

//example of a function that has two parameters 
 function beginsWith(string, char) {
    if (string[0].toLowerCase() === char.toLowerCase()){//conditional if statement to check if first 
        return true;//character on input string is strictly equal to the inputted char;
    }else {//used toLowerCase() to account for case insensitivity 
        return false;
    }
}
 
 /* 7. undefined: a primitive data type that indicates that a variable has not been initialized with a value. Undefined can also 
 indicate that a variable hasn't been declared at all, or that a function does not explicity 
 return a value (in which case, the "return" defaults to "undefined"). Essentially, "undefined" indicates an absense of value. 
 */ 

 let val; // uninitialized values return "undefined"
 
 /* 8. null: a primitive data type and a "special" value in Javascript that represents the deliberate absence of any object value.
 Null is treated as falsy for boolean operations. Essentially, it indicates a lack of identification, indicating that a variable 
 points to no object.

 * 
 * 9. NAN: "Not a Number", a property of the global object, meaning it's part of the global scope; the isNan() function checks if
 * a value is NaN. NaN is a falsy data type.
 * 
 * 10. Infinity and -Infinity: Infinity is a number that represents positive infinity.
 * -Infinity represents a number of negative infinity.
 * 
 * 11. What is the difference between primitive/simple and complex data types?
 * 
 * Simple: represent single, "pre-defined" values and are not mutable. These include numbers, strings, booleans, undefined, null, bigInt, and symbol.
 * 
 * Complex: objects and arrays are complex data types because they are mutable. Program developers create these (i.e. they are NOT 'pre-defined")
 * to store and manipulate data.
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 * What does that mean, and how are they different?
 * 
 * ---> "Copy by Value": creates distinct copies of simple/primitive data types
 *
 */ 

let x = 100;
let y = x; 
let y = 10;
 
 /* //=> here, y is a COPY of x; once y is reassigned, it has no effect on x. This occurs with PRIMITIVE VALUES.
 * 
 * ---> "Copy by Reference": when two or more variables point to the same piece of complex data
 */ 
 let x = {};
 let y = x;
 let y = {firstName: 'Iggy', lastName: 'Pop};
 /* //=> here, both x and y REFERENCE the same object. Thus, when y is mutated, x "refers" to the same object, so x's 
 *    // values are also mutated in the exact same fashion.
 *//