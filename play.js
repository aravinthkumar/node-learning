
// Primitive variables
var name = "Aravind";
var age = 30
var hasHobbies = true;
// Function are defined 
function summarizeUser(userName, userAge, userHasHobbies) {
    return "User is " + userName + " Age is " + userAge + " Has Hobbies " + userHasHobbies;
    // The input is not available outside the scope of the function
}

console.log(summarizeUser(name, age, hasHobbies));