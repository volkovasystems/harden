var test = require( "unit.js" );

var harden = require( "./harden.js" );

describe( "harden function",
	function tests( ){

		it( "should make the property non-configurable, non-writable and non-enumerable",
			function test( ){
				var object = { };

				harden( "property", "value", object );

				var descriptors = Object.getOwnPropertyDescriptor( object, "property" );
				
				test.assert( descriptors.writable === false &&
					descriptors.configurable === false &&
					descriptors.enumerabl == false );

			} );

	} );
