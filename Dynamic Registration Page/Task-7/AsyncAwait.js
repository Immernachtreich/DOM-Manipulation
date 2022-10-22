console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const preMovie = async () => {

    const wifeBringsTickets = new Promise( (resolve, reject) => {setTimeout(resolve('tickets'), 3000);});

    const getPopcorn = new Promise( (resolve, reject) => resolve('popcorn'));

    const getButter = new Promise( (resolve, reject) => resolve('Butter'));

    const getColdDrinks = new Promise( (resolve, reject) => resolve('Cold Drinks'));

    let ticket = await wifeBringsTickets;

    console.log('Wife: I have ' + ticket);
    console.log('Husband: Lets go in');
    console.log('Wife: No i am hungry');

    let popcorn = await getPopcorn;

    console.log('Husband: I got some ' + popcorn);
    console.log('Husband: Lets go in');
    console.log('Wife: No i need butter on my popcorn');

    let butter = await getButter;

    console.log('Husband: I got some ' + butter + 'on the ' + popcorn);
    console.log('Husband : Anything else?');
    console.log('Wife: Yes i need Cold Drinks');

    let coldDrinks = await getColdDrinks;

    console.log('Husband: I got ' + coldDrinks);
    console.log('Husband: Lets go in');
    console.log('Wife: Yeah Lets go');

    return ticket;
}

preMovie().then((t) => console.log('Person 3: Shows' + t));
console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');