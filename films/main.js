
var express = require('express'),
	app = express();

	app.use(express.static('./film'));

	app.listen(8090,function(){
		console.log('listen 8090...')
	})
