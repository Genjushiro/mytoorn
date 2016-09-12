var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api_login'); // connect to our database
var Login     = require('./login');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   

});

router.route('/login')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var login = new Login();      // create a new instance of the Bear model
        login.login = req.body.login;  // set the bears name (comes from the request)

        login.password = req.body.password;

        login.email = req.body.email;

        // save the bear and check for errors
        login.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Login created!' });
        });
        
    })


   .get(function(req, res) {
        Login.find(function(err, login) {
            if (err)
                res.send(err);

            res.json(login);
        });
    });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
