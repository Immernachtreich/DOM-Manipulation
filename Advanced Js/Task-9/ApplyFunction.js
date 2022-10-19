/*
* --- Using apply to call a function with arrays ---
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

let additionalFees = [100, 500, 400, 100];

function addAdditionalFees(extraFees1, extraFees2, extraFees3, extraFees4) {
    return this.fees + extraFees1 + extraFees2 + extraFees3 + extraFees4; 
}

// Using apply to add all the additional fees from the array to the function

console.log("Total Fees of " + student1.name + ": " + addAdditionalFees.apply(student1, additionalFees));
console.log("Total Fees of " + student2.name + ": " + addAdditionalFees.apply(student2, additionalFees));

