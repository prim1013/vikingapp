var Contact = require( './models/contact' );

module.exports = function ( app ) {

    // get all contacts
    app.get( '/api/contacts', function ( req, res ) {
        Contact.find( function ( err, contacts ) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if ( err ) {
                res.send( err );
            }

            res.json( contacts );
        } );
    } );

    // create favorite and send back after creation
    app.post( '/api/contacts', function ( req, res ) {

        // create a favorite, information comes from AJAX request from Angular
        Contact.create( {
            email: req.body.email
        }, function ( err, contact ) {
            if ( err ) {
                res.send( err );
            }

            res.json( contact );
        } );
    } );

    app.delete( '/api/contacts/:id', function ( req, res ) {
        Contact.remove( {
            _id: req.params.id
        }, function ( err ) {
            if ( err )
                res.send( err );

            Contact.find( function ( err, favorites ) {
                if ( err ) {
                    res.send( err );
                }
                res.json( favorites );
            } );
        } );
    } );

    // application -------------------------------------------------------------
    app.get( '*', function ( req, res ) {
        res.sendfile( './public/index.html' ); // load the single view file (angular will handle the page changes on the front-end)
    } );
};