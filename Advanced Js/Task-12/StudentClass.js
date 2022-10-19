class Students {

    static studentCounter = 0;

    constructor(name, age, phoneNumber, boardMarks) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        Students.studentCounter++;
    }

    checkEligibility() {
        if(this.boardMarks >= 40) {
            return 'Eligible';
        } else {
            return 'Not Eligible';
        }
    }
}

function eligibleForPlacements(minBoardMarks) {

    return (minAge) => {

        if((this.boardMarks > minBoardMarks) && (this.age > minAge)) {
            console.log(this.name + ': Eligible for Placement');
        } else {
            console.log(this.name + ': Not Eligible for Placement');
        }
    }
}

let stutent1 = new Students('Alpha', 23, '123', 80);
let stutent2 = new Students('Beta', 19, '123', 30);
let stutent3 = new Students('Gamma', 20, '123', 60);
let stutent4 = new Students('Delta', 19, '123', 10);
let stutent5 = new Students('Theta', 18, '123', 90);

console.log(stutent1.checkEligibility());

console.log(Students.studentCounter);


// console.log(`Name: ${stutent1.name}
// Age: ${stutent1.age}
// Phone Number: ${stutent1.phoneNumber}
// Board Marks: ${stutent1.boardMarks}`);

eligibleForPlacements.call(stutent1, 40)(18);
eligibleForPlacements.call(stutent2, 40)(18);
eligibleForPlacements.call(stutent3, 40)(18);
eligibleForPlacements.call(stutent4, 40)(18);
eligibleForPlacements.call(stutent5, 40)(18);
