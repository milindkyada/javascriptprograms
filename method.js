//string methods 
    /*ength()
    trim()
    toUpperCase()
    toLowerCase()
    includes()
    indexof()
    slice()
    replace()
    substring()
    concat()
    split()*/

let str ="Hello, Milind Kyada"
console.log(str)
console.log("length():",str.length)

let trimText=str.trim();
console.log("trim():",trimText)
console.log("Uppercase:", trimText.toUpperCase())
console.log("Lowercase:", trimText.toLowerCase())

console.log("Includes 'Milind':", trimText.includes("Milind"))
console.log("Index of 'Kyada':", trimText.indexOf("Kyada"))
console.log("slice:" ,trimText.slice(7,13))
console.log("substring :",trimText.substring(7,13))
console.log("Replace :", trimText.replace("Milind", "Kyada"))
console.log("Concat :", trimText.concat(" Welcome!"))
console.log("Split :", trimText.split(" "))