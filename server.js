
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const {connectToDb} = require('./db/connect');

connectToDb();

const port = process.env.PORT || 3000;

// Setting up the view
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Parse the req.body as JSON
app.use(bodyParser.urlencoded({	extended: false }));
app.use(bodyParser.json());

// static files for react build
app.use('/public', express.static(path.join(__dirname, 'client/public')));
app.use('/assets', express.static(path.join(__dirname, 'client/assets')));

// routes
app.get('/', function (req, res) {
    res.redirect('/app/');
});
app.use('/api', require('./routes.api'));
app.use('/app', require('./routes.app'));
app.get('*', function (req, res) {
    res.render('404');
});

app.listen(port);