// IMPORTS
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');

// START OF FILE
const PORT = 8000;
const app = express();

// MIDDLEWARE
app.use(helmet());

// ROUTES
app.get('/secret', (req, res) => {
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
