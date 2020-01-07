'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const app = express()

//DB stuff
require('./server/utils/mongoose');

//Start customized middleware
require('./server/utils/middleware')(app)

// Route and route logic
require('./server/utils/routes')(app)


app.listen(8200, function () {
	console.log('Running on the 4200 port!');
})
