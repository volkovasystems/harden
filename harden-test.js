"use strict";

const harden = require( "./harden.js" );

harden( "STRING", "string" );
console.log( global.STRING );

let test = { };
harden( "test", undefined, test );
console.log( require( "util" ).inspect( test, { "showHidden": true } ) );
console.log( require( "util" ).inspect( harden( "test", undefined, test ), { "showHidden": true } ) );
