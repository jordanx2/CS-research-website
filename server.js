const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');

let currentUse = app.get('/', (req, res, next) => {
	// res.get(`${req.protocol}://${req.get('host')}/${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
	console.log(req.accepts('applications/json')); 
	next();
});



// Set a static folder 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 1010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 