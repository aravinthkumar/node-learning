const person = {
    name: "Aravinth",
    age: 20,
    getPerson() {
        console.log("Hi this is " + this.name);
    }
}

const hobbies = ["Sports", "Swimming"];
console.log(hobbies);
console.log(hobbies.map(hobby => "Hobby:" + hobby));
