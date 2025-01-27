/**
 ************************=> Operators <=***************************
 * 
 * 0: We use these to perform different types of mathematical and logical computations. An "operand" is the data being 
 * operated on. The "operand" combined with the "operator" makes the "operatrion".
 * 
 * 1. Assignment Operators: "assigns" values. These include the basic initializing "=" sign.
 * 
 * 2. Arithmetic Operators: perform "arithemtic" to return a single value. These include traditional mathematical operators
 * such as +, -, *, / (add, subtract, multiply, divide, respectively). 
 * 
 * ==> Remainder: % (typically used to check if number is odd or even: "i % 2 === 0" would test for an even value). The remainder
 * operator is used to divide a number to see if there is a remainder, or if the number divides evenly. 
 * 
 * ==> Increment: ++ (typically used as incremental indicator in looping: "i++")
 * 
 * ==> Decrement: -- (typically used as decremental indicator in looping: "i--")
 * 
 * ==> Exponentiation: ** (calculates the base to the exponent power)
 * 
 * 3. Comparison Operators: "compares" values. These include the traditional "greater than", "less than", "greater or equal to", 
 * and the "less or equal to" operators. 
 * 
 * ==> == (loosely equal to)
 * 
 * ==> === (strictly equal to)
 * 
 * ==> != (not equal)
 * 
 * ==> !== (not equal value && not equal data type)
 * 
 * 4. Logical Operators: used in boolean contexts to test for true/false. 
 *
 * ==> && (and)
 * 
 * ==> || (or)
 * 
 * ==> ! (Logical Not)
 * 
 * 
 * 5. Unary Operators (!, typeOf, -): These require only one operand for operation
 * 
 * ==> ! (the bang operator): a unary logical operator, this negates a truthy boolean value
 * 
 * ==> typeOf (the "type of" operator): returns the data type of a value
 */

 typeof "hello" //string
 typeof true //boolean
 
  /*
  * ==> - (the unary negative): used to convert operand to negative number, if it isn't already negative. 
  * 
  * 6. Ternary Operators (a ? b: c): this is the only operator in Javascript that has three operands. 
  * The ternary operator's syntax corresponds to a conditional "if", "if-else", "else" statement, first presenting 
  * the conditional statement, and then including what to log if true, and what to log if false. 
  * 
  * Here is the ternary syntax, as it corresponds to the following: a condition is followed by a question mark (?), 
  * then an expression to execute if the condition is truthy, and then a second expression for falsy values. These last two
  * parts are separated by a colon (:), as such:
  */ 
 
 function getFee(isMember){ //function that checks if club members have already paid annual fees.
 return isMember ? "$2.00" : "$10.00" //logs 2$ if user is a member; logs 10$ otherwise.
 }
 
  /* 
  The shortened syntax that the ternary operator offers aligns to the DRY concept: Do not repeat yourself, as is
  typically the case with lengthy if-else statemets. 
  */