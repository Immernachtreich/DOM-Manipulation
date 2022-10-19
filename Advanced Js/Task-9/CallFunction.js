/*
* --- Using call to call a function ---
*/

let student1 = {
    name: "Barkley",
    rollNo: 57
}

let student2 = {
    name: "Henry",
    rollNo: 58
}

function addLastName(lname) {
    return this.name + " " + lname;
}

// Using call on addLastName

let fullNameStudent1 = addLastName.call(student1, "Smith");
let fullNameStudent2 = addLastName.call(student2, "Mason");

console.log(fullNameStudent1);
console.log(fullNameStudent2);

