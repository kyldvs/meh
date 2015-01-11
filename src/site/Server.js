/**
 * @providesModule Server
 */
'use strict';

var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('working on something to put here :D... stay tuned');
});

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});
