
// Primitive variables
let name = "Aravind";
let age = 30
let hasHobbies = true;
// Function are defined 
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return "User is " + userName + " Age is " + userAge + " Has Hobbies " + userHasHobbies;
    // The input is not available outside the scope of the function
}
const addNumber = (a, b) => a + b


console.log(addNumber(10, 2));

console.log(summarizeUser(name, age, hasHobbies));