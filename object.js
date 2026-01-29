// object is the collection of any type of data
const person = {
    name: "Milind",
    age: 21,
    hobbies: ["cricket", "gaming", "reading"],
    greet: function() {
        console.log("Hello" );
    }
};

//access values from object
console.log("Name:", person.name);


// adding or modifying property
person.job = "Developer";
person.salary = 50000;
console.log("Updated Person Object:", person);

delete person.salary;
console.log("After Deleting Salary:", person);

//nested object
const person1 = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};
console.log("City:", person1.address.city);
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));