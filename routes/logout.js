// 3rd party library express that implements our http server
const express = require('express')
const server = express.Router();

// Define route handler for the GET '/login' path
server.post('/logout', (req, res) => {
    
    // Clear the authentication cookie
    res.clearCookie('webAppCookie');
    
    // Redirect the user to the login page or another appropriate location
    res.redirect('/');

});

module.exports = server
