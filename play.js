
const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 1000);
};

const data = () => {
    setTimeout(() => {
        console.log('Time is done!');
        fetchData(text => {
            console.log(text);
        });
    }, 1000);
};

console.log('Log once')
data();

const person = {
    name: "Aravinth",
    age: 20,
    getPerson: function () {
        console.log("Hi this is " + this.name);
    }
}

const { name, age } = person;

