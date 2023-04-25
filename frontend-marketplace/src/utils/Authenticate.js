import express from 'express';
import { use, initialize, authenticate } from 'passport';
import { Strategy as CASStrategy } from 'passport-cas';

const app = express();

// Configure Passport.js to use CAS authentication
use(new CASStrategy({
  version: 'CAS3.0',
  ssoBaseURL: 'https://secure.its.yale.edu/cas/login',
  serverBaseURL: 'file:///Users/ananyapuru/Desktop/Yale/Sophomore%20Year/SP23/CPSC%20419/Project/Login2.html',
}, function(profile, done) {
  // Optional: You can use this function to create or update a user in your database
  // based on the information in the CAS profile
  done(null, profile);
}));

// Initialize Passport.js
app.use(initialize());

// Create a route to authenticate with CAS
app.get('/login', authenticate('cas'));

// Create a route to handle the CAS callback
app.get('/cas/callback', authenticate('cas', { failureRedirect: '/login' }), function(req, res) {
  // The user has been authenticated with CAS, so you can do something here like
  // redirect them to another page or show them a personalized message
  res.redirect("https://chakra-ui.com/");
  //res.redirect("../../pages/market/index.js"); //project-project-group-9\market-place\src\pages\market\index.js
  //project-project-group-9\market-place\src\utils\Authenticate.js
});

// Create a route to check if the user is authenticated
app.get('/check-auth', function(req, res) {
  if (req.isAuthenticated()) {
    // The user is authenticated, so you can do something here like
    // show them a personalized message or redirect them to another page
    res.send('You are authenticated!');
  } else {
    // The user is not authenticated, so you can do something here like
    // show them a login button or redirect them to the CAS login page
    res.send('You are not authenticated.');
  }
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
