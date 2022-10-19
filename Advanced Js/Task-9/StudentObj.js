let student = {
    age: 20
}

function printAge() {
    console.log(this.age);
}

let studentBound = printAge.bind(student);

studentBound();