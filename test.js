
const assert = require( "assert" );
const harden = require( "./harden.js" );

let test = { };
harden( "hello", "world", test );
let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

assert.equal( test.hello, "world", "should have value 'hello'" );

assert.equal( descriptor.configurable, false, "should be false" );

assert.equal( descriptor.enumerable, false, "should be true" );

assert.equal( descriptor.writable, false, "should be false" );

harden( "hello", "value", test );

assert.equal( test.hello, "world", "should have value 'hello'" );

console.log( "ok" );
