// set up ======================================================================
var express = require( 'express' );
var app = express(); 								// create our app w/ express
var compression = require( 'compression' );
var logger = require( 'morgan' );                     // logging
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' ); 					// mongoose for mongodb
var port = process.env.PORT || 3000; 				// set the port
var database = require( './config/database' ); 			// load the database config

// configuration ===============================================================
mongoose.connect( database.url ); 	// connect to mongoDB database on modulus.io

app.use( express.static( __dirname + '/public' ) ); 		// set the static files location
app.use( logger( 'combined' ) ); 						// log every request to the console
app.use( compression() );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

// routes ======================================================================
require( './app/routes.js' )( app );

// listen (start app with node server.js) ======================================
app.listen( port );
console.log( "App listening on port " + port );