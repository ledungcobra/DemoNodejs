'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser);
app.post('/updatestate', (req, res) => {
    res.json({ message: 'Hello' });
});

module.exports.handler = serverless(app);