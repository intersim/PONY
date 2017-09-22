var express = require('express');
var path = require('path');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/bananas', (req, res, next) => {
	req.banana = false;
	console.log('req', req)
	next();
})


app.get('/', function(req, res, next){
	console.log('res', res)
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/bananas/', function(req, res, next){
	
	if(!req.banana) {
		res.send('<h1>No banana</h1>')
		
	} else {
		res.sendFile(path.join(__dirname + '/bananas.html'))
		
	}
	
})
app.get('/bananas/:grapefruit', function(req, res, next){
	let value = req.params.grapefruit
	res.send(`<h1>You send ${value}`)
	
})



app.listen(8080)