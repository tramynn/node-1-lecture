const express = require('express');
const app = express();
const users = require('./users');

// receiving data from a url and using a cb function
// app represents entire application, we want the ability to handle a git request
// if it matches, then i want you to run this function 
app.get('/api/users', (request, response, next) => {
    // request.query is an empty object
    console.log(request.query);
    if (request.query.first_name) {
        //find only users with that first name
        const filteredUsers = users.filter(user => user.first_name.toLowerCase() === request.query.first_name.toLowerCase());
        response.json(filteredUsers);
    } else {
        response.json(users);
    }
    // takes in any information you want sent back
    //response.send
    // response.json guarantees and sends back to the users that gets it
});


//handle a get request to "/api/users/10"
// whatever we put in our url becomes the parameter for the :id
// :userId = route parameter >> expecting 1 and only 12
// query -- ? >> means its not its own route
// queries are used to search for something and youre expecting 0, 1, 1+ results
// app.get('/api/users/:userId', (request, response, next) => {
//     // get an array
//     // response.json(users.filter(user => user.id === 10));
//     console.log(request.params);
//     // find works by -- if it doesn't find a matching value then it's a falsy value
//     const user = users.find(el => el.id == +request.params.userId);
//     // if theres no find then its undefined
//     if (!user) {
//         response.status(404).json("No user found");
//     } else {
//         response.json(user);
//     }
// });

// app is a gigantic object that listens for a port number and a cb function
// prints a message to notify that the app is running
app.listen(5050, () => {
    console.log("Listening on port 5050");
});

