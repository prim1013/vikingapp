'use strict';

var mongoose = require( 'mongoose' );

module.exports = mongoose.model( 'Contact', {
    email: String
} );