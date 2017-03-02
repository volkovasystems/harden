"use strict";

const harden = require( "./harden.js" );

console.log( harden( "STRING", "string" ) );

let test = { };
harden( "test", undefined, test );
console.log( require( "util" ).inspect( test, { "showHidden": true } ) );
console.log( require( "util" ).inspect( harden( "test", undefined, test ), { "showHidden": true } ) );
