'use strict';

viking.factory( 'contactService', function ( $http ) {
    var addContact = function ( emailAddress ) {
        return $http( {
            method: 'POST',
            url: '/api/contacts',
            data: {email: emailAddress}
        } ).then( function ( data ) {
            console.log( 'email added ', data );
        } )
    };

    return {
        addContact: addContact
    }
} );