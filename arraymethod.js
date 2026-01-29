//array methods

    // length()
    // push()
    // pop()
    // shift()
    // unshift()
    // concat()
    // includes()
    // indexof()
    // splice()
    // slice()
    // join()
    // delete()
    // map()
    //filter()
    //find()
    //forEach()
    //sort()
    //reverse()
    //flat()

// let arr=['one','two','three']
// console.log("Original Array:", arr);
// console.log("Length:", arr.length);

// arr.push(60);
// console.log("After Push:", arr);

// arr.pop();
// console.log("After Pop:", arr);

// arr.unshift(5);
// console.log("After Unshift:", arr);

// arr.shift();
// console.log("After Shift:", arr);

// let arr2 = [70, 80];
// let com= arr.concat(arr2);
// console.log("Original Array:", arr);
// console.log("After Concat:", com);

// console.log("Includes 30:", arr.includes(30));

// console.log("Index of 40:", arr.indexOf(40));


// let sliced = arr.slice(1, 4);
// console.log("Sliced Array:", sliced);

// arr.splice(2, 1, 35);
// console.log("After Splice:", arr);

// console.log("Join:", arr.join("-"));

// delete arr[3];
// console.log("After Delete:", arr);

console.log("Array iteration method:")
let numbers = [10, 20, 30, 40, 50];

console.log("Map:" , numbers.map(num=> num * 2))
console.log("after Map Original Array:", numbers)

console.log("Filter:", numbers.filter(num => num > 25))
console.log("after Filter Original Array:", numbers)

console.log("forEach:")
numbers.forEach(num => console.log(num))

let num=[3,1,4,5,2]
console.log("Sorted Array:", num.sort())
console.log("Reversed Array:", num.reverse())

let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened Array:", nestedArr.flat(2));

//array destructing
let array =[1,2,3,4,5]
const [first, second, third]=array
console.log(first, second, third)

let array1 =[10,20,30,40,50]
const [a, , b, , c]=array1
console.log(a, b, c)