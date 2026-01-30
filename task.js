let students = {
    name : "first name",
    email: "USER@GMAIL.COM",
    course: "JavaScript , ReactJS, NodeJS",
    marks: [45,78,60,90,33],
    hobbies: ["music", "cricket", "reading"],
    address: ["india",["gujarat","junagadh"]]
};

//string oprations
console.log("Name after removing extra spaces and converting to uppercase:", students.name.trim().toUpperCase());
console.log("Email in lowercase:", students.email.toLowerCase());
console.log("Course includes 'ReactJS':", students.course.includes("ReactJS"));
console.log("Index of 'NodeJS' in course:", students.course.indexOf("NodeJS"));
console.log("Replaced 'JavaScript' with 'JS':", students.course.replace("JavaScript", "JS"));

let courseArray = students.course.split(", ");
console.log("Course Array:", courseArray);

let lengthOfname = students.name.length;
console.log("Length of Name:", lengthOfname);



// array operations

students.hobbies.push("swimming");
console.log("Hobbies after adding 'swimming':", students.hobbies);


students.hobbies.pop();
console.log("Hobbies after removing last hobby:", students.hobbies);

students.hobbies.unshift("drawing");
console.log("Hobbies after adding 'drawing' at the beginning:", students.hobbies);

students.hobbies.shift();
console.log("Hobbies after removing first hobby:", students.hobbies);

let mergedArray = students.hobbies.concat(courseArray);
console.log("Merged Array of Hobbies and Course:", mergedArray);

let courseIncludesReact = courseArray.includes("React");
console.log("Course array includes React:", courseIncludesReact);

let jsIndex = courseArray.indexOf("JS");
console.log("Index of JS in course array:", jsIndex);

let firstTwoMarks = student.marks.slice(0, 2);
console.log("First two marks:", firstTwoMarks);

let failedIndex = student.marks.findIndex(mark => mark < 40);
if (failedIndex !== -1) {
    student.marks.splice(failedIndex, 1);
}

console.log("Marks after removing first failed mark:", student.marks);
 
let hobbiesString = student.hobbies.join(", ");
console.log("Hobbies String:", hobbiesString);

// ARRAY ITERATION METHODS
let bonusMarks = student.marks.map(mark => mark + 5);
console.log("Marks after adding bonus:", bonusMarks);

let passedMarks = student.marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);
 
let highMark = student.marks.find(mark => mark > 80);
console.log("First mark above 80:", highMark);

console.log("Student Hobbies:");
student.hobbies.forEach(hobby => console.log(hobby));

let sortedMarks = [...student.marks].sort((a, b) => a - b);
console.log("Sorted Marks (Ascending):", sortedMarks);

let reversedHobbies = [...student.hobbies].reverse();
console.log("Reversed Hobbies:", reversedHobbies);

let flattenedAddress = student.address.flat();
console.log("Flattened Address:", flattenedAddress);

// OBJECT HANDLING
let allPassed = student.marks.every(mark => mark >= 40);
student.result = allPassed ? "pass" : "fail";
console.log("Student Result:", student.result);

console.log("Final Student Object:", student);