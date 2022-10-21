const posts = [
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()},

    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()}
];

const user = {
    name: 'Gandora',
    lastUserActivity: new Date().getTime()
}

function getPost() {

    clearInterval(interval);

    var interval = setInterval( () => {

        let output = '';

        posts.forEach((post) => {

            let created = Math.floor(((new Date().getTime()) - post.createdAt)/1000);

            output += `<li> ${post.title} : created at ${created} seconds ago </li>`;
        })

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            post.createdAt = new Date().getTime();
    
            posts.push(post);
            return resolve(post);
    
        }, 2000)
    }) 
}

function deletePost() {

    return new Promise( (resolve, reject) => {

        if(posts.length > 0) {

            setTimeout( () => {
                posts.pop();
                resolve();
            },1000);
        }
        else {
            setTimeout( () => {
                reject('Array is Empty Now.');
            },1000);
        }
        
    })
}

function updateLastUserActivityTime() {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            user.lastUserActivity = new Date();
            return resolve('User was last active at: ' + user.lastUserActivity);
        }, 1000);
    })
}

createPost({title: 'Post Three', body: 'This is Post Three'})
    .then(() => {
        getPost();
        deletePost().then( () => {

            getPost();
            deletePost().then( () => {

                getPost();
                deletePost().then( () => {

                    getPost();
                    deletePost().then(createPost({title: 'Post Four', body: 'This is Post Four'})
                                        .then(deletePost))
                    .catch(err => console.log(err));
                });
            });
        });
    });


// Promise All 

// const promise1 = Promise.resolve('Hi');
// const promise2 = 20;
// const promise3 = new Promise( (resolve, reject) => setTimeout(resolve, 2000, 'Bye') );

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
    .then(([post, lastUserActivity]) => {

        getPost();
        console.log(post);
        console.log(lastUserActivity);

        deletePost().then(() => {
            setTimeout( () => {
                posts.forEach(p => {
                    console.log(p);
                })
            }, 1000);
        })
    })