"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "harden",
			"path": "harden/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/harden.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"harden": "harden"
		}
	@end-include
*/

const assert = require( "assert" );

//: @server:
const harden = require( "./harden.js" );
//: @end-server

//: @client:
const harden = require( "./harden.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "harden", ( ) => {


} );


//: @end-server


//: @client:
describe( "harden", ( ) => {


} );


//: @end-client


//: @bridge:

describe( "harden", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "harden( 'hello','world', test )", ( ) => {

		it( "should be equal to 'world'", ( ) => {

			let result = browser.url( bridgeURL ).execute(
				function( ){
					let test = { };
					harden( "hello", "world", test );
					return test.hello;
				}
			).value;

			assert.equal( result, "world" );

		} );

	} );

	describe( "Property descriptor configurable", ( ) => {

		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );

	} );


	describe( "Property descriptor enumerable", ( ) => {

		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

				}

			).value;

			assert.equal( result, false );
			//: @end-ignore
		} );

	} );


	describe( "Property descriptor writable", ( ) => {

		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );

	} );

} );

//: @end-bridge
