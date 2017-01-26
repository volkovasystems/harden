"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "harden",
			"path": "harden/harden.js",
			"file": "harden.js",
			"module": "harden",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/harden.git",
			"test": "harden-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Makes your property-value non-enumerable, non-configurable and non-writable.

		If entity is given, the property will be bound to the entity.

		Else, if this module is used in the browser, the entity defaults to the @code:window;.

		Else, if this module is used in a NodeJS environment, the entity defaults to @code:global;.

		Note that if the entity is hardened, you cannot use @code:delete; on it.
	@end-module-documentation
*/

const harden = function harden( property, value, entity ){
	/*;
		@meta-configuration:
			{
				"property:required": [
					"string",
					"symbol",
					"number"
				],
				"value:required": "*",
				"entity:optional": "object"
			}
		@end-meta-configuration
	*/

	if( property === "" ||
		( typeof property != "string" &&
			typeof property != "symbol" &&
		 	typeof property != "number" ) )
	{
		throw new Error( "invalid property" );
	}

	let self = this;
	if( typeof entity != "undefined" ){
		self = entity;

	}else if( typeof global != "undefined" && this === global ){
		self = global;

	}else if( typeof window != "undefined" && this === window ){
		self = window;
	}

	entity = entity || self;

	if( typeof entity == "undefined" && typeof global != "undefined" ){
		entity = global;

	}else if( typeof entity == "undefined" && typeof window != "undefined" ){
		entity = window;
	}

	if( typeof entity[ property ] != "undefined" ){
		return entity;
	}

	try{
		Object.defineProperty( entity, property, {
			"enumerable": false,
			"configurable": false,
			"writable": false,
			"value": value
		} );

	}catch( error ){
		throw new Error( `cannot harden property, ${ property }, error, ${ error }` );
	}

	if( ( ( typeof global != "undefined" && entity !== global ) ||
		( typeof window != "undefined" && entity !== window ) ) &&
		typeof entity.harden == "undefined" )
	{
		try{
			Object.defineProperty( entity, "harden", {
				"enumerable": false,
				"configurable": false,
				"writable": false,
				"value": harden.bind( self )
			} );

		}catch( error ){
			throw new Error( `cannot bind harden, error, ${ error }` );
		}
	}

	return entity;
};

module.exports = harden;
