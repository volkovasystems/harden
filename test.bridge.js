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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("harden", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`harden( 'hello', 'world', { } )`", function () {

		it("should be equal to 'world'", function () {

			var result = browser.url(bridgeURL).execute(
			function () {
				var test = {};
				harden("hello", "world", test);
				return test.hello;
			}).
			value;

			assert.equal(result, "world");

		});

	});


	describe("`Property descriptor configurable`", function () {

		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = { };
   					harden( "hello", "world", test );
   					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
   					return descriptor.configurable;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, false);

		});

	});


	describe("`Property descriptor enumerable`", function () {

		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = { };
   					harden( "hello", "world", test );
   					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
   					return descriptor.enumerable;
   				}
   
   			).value;
   
   			assert.equal( result, false );
   			//: @end-ignore
		});

	});


	describe("`Property descriptor writable`", function () {

		it("should be equal to false", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = { };
   					harden( "hello", "world", test );
   					let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
   					return descriptor.writable;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, false);

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInRlc3QiLCJoYXJkZW4iLCJoZWxsbyIsInZhbHVlIiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxtQ0FBVixFQUErQyxZQUFPOztBQUVyREksS0FBSSw0QkFBSixFQUFrQyxZQUFPOztBQUV4QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCO0FBQ1osZUFBVztBQUNWLFFBQUlDLE9BQU8sRUFBWDtBQUNBQyxXQUFRLE9BQVIsRUFBaUIsT0FBakIsRUFBMEJELElBQTFCO0FBQ0EsV0FBT0EsS0FBS0UsS0FBWjtBQUNBLElBTFc7QUFNWEMsUUFORjs7QUFRQWYsVUFBT2dCLEtBQVAsQ0FBY1IsTUFBZCxFQUFzQixPQUF0Qjs7QUFFQSxHQVpEOztBQWNBLEVBaEJEOzs7QUFtQkFMLFVBQVUsb0NBQVYsRUFBZ0QsWUFBTzs7QUFFdERJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNHUCxVQUFPZ0IsS0FBUCxDQUFjUixNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBakJEOztBQW1CQSxFQXJCRDs7O0FBd0JBTCxVQUFVLGtDQUFWLEVBQThDLFlBQU87O0FBRXBESSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHLEdBakJEOztBQW1CQSxFQXJCRDs7O0FBd0JBSixVQUFVLGdDQUFWLEVBQTRDLFlBQU87O0FBRWxESSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEM7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7QUFDR1AsVUFBT2dCLEtBQVAsQ0FBY1IsTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQWpCRDs7QUFtQkEsRUFyQkQ7O0FBdUJBLENBOUZEOztBQWdHQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJoYXJkZW5cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiaGFyZGVuL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9oYXJkZW4uZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcbmRlc2NyaWJlKCBcImhhcmRlblwiLCAoICkgPT4ge1xyXG5cclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBoYXJkZW4oICdoZWxsbycsICd3b3JsZCcsIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcclxuXHRcdFx0XHRcdGhhcmRlbiggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0LmhlbGxvO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIndvcmxkXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGNvbmZpZ3VyYWJsZWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB7IH07XHJcblx0XHRcdFx0XHRoYXJkZW4oIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XHJcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciBlbnVtZXJhYmxlYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcclxuXHRcdFx0XHRcdGhhcmRlbiggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcclxuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJoZWxsb1wiICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciB3cml0YWJsZWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB7IH07XHJcblx0XHRcdFx0XHRoYXJkZW4oIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XHJcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGRlc2NyaXB0b3Iud3JpdGFibGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
