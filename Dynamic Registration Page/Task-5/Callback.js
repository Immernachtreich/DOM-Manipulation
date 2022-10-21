// var time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

const posts = [
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()},

    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()}
];

let interval = 0;

function getPost() {

    clearInterval(interval);

    interval = setInterval( () => {

        let output = '';

        posts.forEach((post) => {

            let created = Math.floor(((new Date().getTime()) - post.createdAt)/1000);

            output += `<li> ${post.title} : created at ${created} seconds ago </li>`;
        })

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {

    setTimeout( () => {

        post.createdAt = new Date().getTime();

        posts.push(post);
        callback();

    }, 2000)
}

function create4thPost(post4, callback) {

    setTimeout( () => {
        callback(post4, getPost);
    }, 3000);
}

createPost({title: 'Post Three', body: 'This is Post Three'}, getPost);

create4thPost({title: 'Post Four', body: 'This is Post Four'}, createPost);

