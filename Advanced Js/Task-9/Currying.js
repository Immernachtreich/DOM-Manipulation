// let mulitply = function (x) {
//     console.log(x * y);
// }

let mulitply = function (x) {
    return function (y) {
        console.log(x * y);
    } 
}
let mulitplybyTwo = mulitply(2);
mulitplybyTwo(6);

let mulitplybyThree = mulitply(3);
mulitplybyThree(10);