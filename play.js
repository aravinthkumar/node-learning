const person = {
    name: "Aravinth",
    age: 20,
    getPerson() {
        console.log("Hi this is " + this.name);
    }
}

person.getPerson();