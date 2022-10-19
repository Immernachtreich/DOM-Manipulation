/*
* --- Using bind to bind a function with a new variable ---
*/

let student1 = {
    name: "Barkley",
    rollNo: 57,
    fees: 500
}

let student2 = {
    name: "Henry",
    rollNo: 58,
    fees: 300
}

function addAdditionalFees(extraFees1, extraFees2, extraFees3, extraFees4) {
    return this.fees + extraFees1 + extraFees2 + extraFees3 + extraFees4; 
}

// Binding addAdditonalFees to both students
let student1Bound = addAdditionalFees.bind(student1);
let student2Bound = addAdditionalFees.bind(student2);

console.log(student1Bound(100, 500, 400, 100));
console.log(student2Bound(100, 500, 400, 100));