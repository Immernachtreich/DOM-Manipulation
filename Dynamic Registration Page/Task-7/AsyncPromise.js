console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const wifeBringsTickets = new Promise( (resolve, reject) => {

    setTimeout(resolve('Tickets'), 3000);
});

const getPopcorn = wifeBringsTickets    .then((t) => {

    console.log('Wife: I have tickets');
    console.log('Husband: Lets go in');
    console.log('Wife: No i am hungry');
    return new Promise( (resolve, reject ) => resolve(t + ' Popcorn'));
});

const getButter = getPopcorn.then( (t) => {

    console.log('Husband: Lets go in');
    console.log('Wife: No i need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(t + ' Butter'));
});

const getColdDrinks = getButter.then((t) => {

    console.log('Husband: I got some butter on the popcorn');
    console.log('Husband : Anything else?');
    console.log('Wife: Yes i need Cold Drinks');
    return new Promise((resolve, reject) => resolve(t + ' Cold Drinks'));
});

getColdDrinks.then((t) => console.log(t));

console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');