// import the array of friends objects, the 'database'
const friends = require('../data/friends');

// routes for interacting with the 'friends' database
module.exports = app => {
    // route for getting the friends object array as a json responce.
    app.get("/api/friends", (req, res) => {
        res.json('friends');
    });
    // post route to post the results of the survey and the name of the user to the database
    // also runs the matching logic on submission of the results.
    app.post('/api/friends', (req, res) => {
        
    })
}