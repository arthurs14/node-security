// IMPORTS
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');

require('dotenv').config();

// START OF FILE
const PORT = 8000;

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const app = express();

// MIDDLEWARE
app.use(helmet());
app.use((req, res, next) => {
  const isLoggedIn = true; // TODO

  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must log in!' });
  }

  next();
});

// FUNCTIONS

/**
 * Checks to see if user is authorized
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; // TODO

  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must log in!' });
  }

  next();
}

// ROUTES - use functions to restrict endpoint calls for authorized users only
app.get('/auth/google', (req, res) => {});

app.get('/auth/google/callback', (req, res) => {});

app.get('/auth/logout', (req, res) => {});

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// START SERVER
https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app
  )
  .listen(PORT, () => console.log(`Listening on port ${PORT}...`));
