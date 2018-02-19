const express = require('express');
const React = require('react');
const { renderToString }  = require('react-dom/server');
const App  = require('./App');
const Html  = require('./Html');
const { ServerStyleSheet }  = require('styled-components');

const port = 3001;
const server = express();

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles

  res.send(
    Html({
      body
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);