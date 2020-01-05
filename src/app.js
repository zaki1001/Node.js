const express = require('express')
const path = require('path')
const hbs = require('hbs')
const session = require('express-session')
const http = require('http')
const app = express()
const cookieParser = require('cookie-parser')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const bodyParser = require("body-parser");
var ejs = require('ejs');

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
app.set('port', process.env.PORT || 8080);
app.set('views', viewsPath)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(express.static(publicDirectoryPath));
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('partials', __dirname + '/views');
/*const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName = 'task'*/

/*MongoClient.connect(connectionUrl,{useNewUrlParser: true} ,(error,client) => {
	if(error) {
		return cons.log('Unable to connect to database!')
	}
	else {
		console.log('you are connected fag')
	}

	const db = client.db(databaseName)

	db.collection('tasks').insertMany([
 {
 description: 'Clean the house',
 completed: true
 },{
 description: 'Renew inspection',
 completed: false
 }
], (error, result) => {
 if (error) {
 return console.log('Unable to insert tasks!')
 }
 console.log(result.ops)
})
})*/

app.get('/', (req, res) => {
	res.render('index')

})

app.get('/data', (req, res) => {
	res.render('rendering')
})

app.get('/home', (req, res) => {
	res.render('home')
})

app.get('/photo', (req, res) => {
	res.render('phto')
})
app.listen(3000, () => {
	console.log('Server is up on port 3000.')
})