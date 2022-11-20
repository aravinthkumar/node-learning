const person = {
    name: "Aravinth",
    age: 20,
    getPerson() {
        console.log("Hi this is " + this.name);
    }
}
const hobbies = ["Sports", "Swimming"];
const newHobbies = [...hobbies];
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));