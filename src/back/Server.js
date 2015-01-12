/**
 * @providesModule Server
 */
'use strict';

var express = require('express');
var path = require('path');

var app = express();

var ROOT = path.join(__dirname, '..');
var STATIC = path.join(ROOT, 'static');

app.get('/', (req, res) => {
  res.sendFile(path.join(STATIC, 'index.html'));
});

app.use(express.static(STATIC));

var server = app.listen(
  3000,
  () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
  }
);
