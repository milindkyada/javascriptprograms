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

//

const user={
    name: "user",
    role:"admin",
    designation:"developer",
    age:25,
    address:{
        city:"junagadh",
        state:"gujarat",
        zipcode:362001,
    }

}
const {name,role,address:{city}}=user;
console.log(name);
console.log(role);
console.log(city);

const {name:username,role:position}=user;
console.log(username);
console.log(position);

const array =[1,2,3,4,5]
const moreElements=[... array,6,7,8,9]
console.log(moreElements);

const orignalArray=[10,20,30];
const copiedArray=[...orignalArray];
console.log("Copied Array:", copiedArray);

const arr1=[1,2,3];
const arr2=[4,5,6];
const mergedArray=[...arr1,...arr2];
console.log("Merged Array:", mergedArray);

//spread in object
const user1={
    name:"Milind",
    city:"Junagadh"
};
console.log("Original User1:", user1);
const newObj={
    ...user1,
    role:"React Developer"
};
console.log("New Object with Spread:", newObj);

// copying object
const user2={
    name:"John",
    age:30
};
const user3={
    ...user2
};
console.log("Copied User3:", user3);


//merge object
const obj1={
    name:"milind",
    age:21
};  
const obj2={
    city:"junagadh",
    role:"developer"    
};
const mergedObj={
    ...obj1,
    ...obj2
};
console.log("Merged Object:", mergedObj);

