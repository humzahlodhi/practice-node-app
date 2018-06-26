const express = require('express');
const app = express();
//const jwt = require('jsonwebtoken');


// Turns on node server
app.listen(3000, function () {
  console.log('Node app listening on port 3000!');
});

// Mount middleware.
app.use.get([
    // Contains all of the routes.
    require('./lib/routes')
]);
/*
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else{
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user: user},'secretkey', (err, token ) => {
    res.json({
      token: token
    });
  });
});

//Format of Token
//Authorization: Bearer <access_token>

//verify token
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers['authorization'];
//Check if bearer is undefined
if (typeof bearerHeader !== 'undefined') {
  //Split at the space
  const bearer = bearerHeader.split(' ');
  //Get token from array
  const bearerToken = bearer[1];
  //Set the Token
  req.token = bearerToken;
  //Next middleware
  next();
} else {
  //Forbidden
  res.sendStatus(403);
}
function wordWide (enter) {
}
*/
