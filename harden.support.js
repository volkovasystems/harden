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

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var harden = function harden(property, value, entity) {
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

	if (property === "" || typeof property != "string" && (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) != "symbol" && typeof property != "number") {
		throw new Error("invalid property");
	}

	var self = this;
	if (typeof entity != "undefined") {
		self = entity;
	} else if (typeof global != "undefined" && this === global) {
		self = global;
	} else if (typeof window != "undefined" && this === window) {
		self = window;
	}

	entity = entity || self;

	if (typeof entity == "undefined" && typeof global != "undefined") {
		entity = global;
	} else if (typeof entity == "undefined" && typeof window != "undefined") {
		entity = window;
	}

	if (typeof entity[property] != "undefined") {
		return entity;
	}

	try {
		(0, _defineProperty2.default)(entity, property, {
			"enumerable": false,
			"configurable": false,
			"writable": false,
			"value": value
		});
	} catch (error) {
		throw new Error("cannot harden property, " + property + ", error, " + error);
	}

	if ((typeof global != "undefined" && entity !== global || typeof window != "undefined" && entity !== window) && typeof entity.harden == "undefined") {
		try {
			Object.defineProperty(entity, "harden", {
				"enumerable": false,
				"configurable": false,
				"writable": false,
				"value": harden.bind(self)
			});
		} catch (error) {
			throw new Error("cannot bind harden, error, " + error);
		}
	}

	return entity;
};

module.exports = harden;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhcmRlbi5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJwcm9wZXJ0eSIsInZhbHVlIiwiZW50aXR5IiwiRXJyb3IiLCJzZWxmIiwiZ2xvYmFsIiwid2luZG93IiwiZXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDeEQ7Ozs7Ozs7Ozs7Ozs7O0FBY0EsS0FBSUYsYUFBYSxFQUFiLElBQ0QsT0FBT0EsUUFBUCxJQUFtQixRQUFuQixJQUNELFFBQU9BLFFBQVAsdURBQU9BLFFBQVAsTUFBbUIsUUFEbEIsSUFFQSxPQUFPQSxRQUFQLElBQW1CLFFBSHRCLEVBSUE7QUFDQyxRQUFNLElBQUlHLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBTyxJQUFYO0FBQ0EsS0FBSSxPQUFPRixNQUFQLElBQWlCLFdBQXJCLEVBQWtDO0FBQ2pDRSxTQUFPRixNQUFQO0FBRUEsRUFIRCxNQUdNLElBQUksT0FBT0csTUFBUCxJQUFpQixXQUFqQixJQUFnQyxTQUFTQSxNQUE3QyxFQUFxRDtBQUMxREQsU0FBT0MsTUFBUDtBQUVBLEVBSEssTUFHQSxJQUFJLE9BQU9DLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0MsU0FBU0EsTUFBN0MsRUFBcUQ7QUFDMURGLFNBQU9FLE1BQVA7QUFDQTs7QUFFREosVUFBU0EsVUFBVUUsSUFBbkI7O0FBRUEsS0FBSSxPQUFPRixNQUFQLElBQWlCLFdBQWpCLElBQWdDLE9BQU9HLE1BQVAsSUFBaUIsV0FBckQsRUFBa0U7QUFDakVILFdBQVNHLE1BQVQ7QUFFQSxFQUhELE1BR00sSUFBSSxPQUFPSCxNQUFQLElBQWlCLFdBQWpCLElBQWdDLE9BQU9JLE1BQVAsSUFBaUIsV0FBckQsRUFBa0U7QUFDdkVKLFdBQVNJLE1BQVQ7QUFDQTs7QUFFRCxLQUFJLE9BQU9KLE9BQVFGLFFBQVIsQ0FBUCxJQUE2QixXQUFqQyxFQUE4QztBQUM3QyxTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBRztBQUNGLGdDQUF1QkEsTUFBdkIsRUFBK0JGLFFBQS9CLEVBQXlDO0FBQ3hDLGlCQUFjLEtBRDBCO0FBRXhDLG1CQUFnQixLQUZ3QjtBQUd4QyxlQUFZLEtBSDRCO0FBSXhDLFlBQVNDO0FBSitCLEdBQXpDO0FBT0EsRUFSRCxDQVFDLE9BQU9NLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUosS0FBSiw4QkFBdUNILFFBQXZDLGlCQUE2RE8sS0FBN0QsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBSSxPQUFPRixNQUFQLElBQWlCLFdBQWpCLElBQWdDSCxXQUFXRyxNQUE3QyxJQUNILE9BQU9DLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0NKLFdBQVdJLE1BRDFDLEtBRUgsT0FBT0osT0FBT0gsTUFBZCxJQUF3QixXQUZ6QixFQUdBO0FBQ0MsTUFBRztBQUNGUyxVQUFPQyxjQUFQLENBQXVCUCxNQUF2QixFQUErQixRQUEvQixFQUF5QztBQUN4QyxrQkFBYyxLQUQwQjtBQUV4QyxvQkFBZ0IsS0FGd0I7QUFHeEMsZ0JBQVksS0FINEI7QUFJeEMsYUFBU0gsT0FBT1csSUFBUCxDQUFhTixJQUFiO0FBSitCLElBQXpDO0FBT0EsR0FSRCxDQVFDLE9BQU9HLEtBQVAsRUFBYztBQUNkLFNBQU0sSUFBSUosS0FBSixpQ0FBMENJLEtBQTFDLENBQU47QUFDQTtBQUNEOztBQUVELFFBQU9MLE1BQVA7QUFDQSxDQTdFRDs7QUErRUFTLE9BQU9DLE9BQVAsR0FBaUJiLE1BQWpCIiwiZmlsZSI6ImhhcmRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInBhdGhcIjogXCJoYXJkZW4vaGFyZGVuLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJoYXJkZW4uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9oYXJkZW4uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJoYXJkZW4tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNYWtlcyB5b3VyIHByb3BlcnR5LXZhbHVlIG5vbi1lbnVtZXJhYmxlLCBub24tY29uZmlndXJhYmxlIGFuZCBub24td3JpdGFibGUuXG5cblx0XHRJZiBlbnRpdHkgaXMgZ2l2ZW4sIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIGJvdW5kIHRvIHRoZSBlbnRpdHkuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIHRoZSBicm93c2VyLCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIHRoZSBAY29kZTp3aW5kb3c7LlxuXG5cdFx0RWxzZSwgaWYgdGhpcyBtb2R1bGUgaXMgdXNlZCBpbiBhIE5vZGVKUyBlbnZpcm9ubWVudCwgdGhlIGVudGl0eSBkZWZhdWx0cyB0byBAY29kZTpnbG9iYWw7LlxuXG5cdFx0Tm90ZSB0aGF0IGlmIHRoZSBlbnRpdHkgaXMgaGFyZGVuZWQsIHlvdSBjYW5ub3QgdXNlIEBjb2RlOmRlbGV0ZTsgb24gaXQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IGhhcmRlbiA9IGZ1bmN0aW9uIGhhcmRlbiggcHJvcGVydHksIHZhbHVlLCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiLFxuXHRcdFx0XHRcdFwibnVtYmVyXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJlbnRpdHk6b3B0aW9uYWxcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHByb3BlcnR5ID09PSBcIlwiIHx8XG5cdFx0KCB0eXBlb2YgcHJvcGVydHkgIT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0dHlwZW9mIHByb3BlcnR5ICE9IFwic3ltYm9sXCIgJiZcblx0XHQgXHR0eXBlb2YgcHJvcGVydHkgIT0gXCJudW1iZXJcIiApIClcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gdGhpcztcblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdHNlbGYgPSBlbnRpdHk7XG5cblx0fWVsc2UgaWYoIHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzID09PSBnbG9iYWwgKXtcblx0XHRzZWxmID0gZ2xvYmFsO1xuXG5cdH1lbHNlIGlmKCB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcyA9PT0gd2luZG93ICl7XG5cdFx0c2VsZiA9IHdpbmRvdztcblx0fVxuXG5cdGVudGl0eSA9IGVudGl0eSB8fCBzZWxmO1xuXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICl7XG5cdFx0ZW50aXR5ID0gZ2xvYmFsO1xuXG5cdH1lbHNlIGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICl7XG5cdFx0ZW50aXR5ID0gd2luZG93O1xuXHR9XG5cblx0aWYoIHR5cGVvZiBlbnRpdHlbIHByb3BlcnR5IF0gIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHR0cnl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBlbnRpdHksIHByb3BlcnR5LCB7XG5cdFx0XHRcImVudW1lcmFibGVcIjogZmFsc2UsXG5cdFx0XHRcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0fSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgaGFyZGVuIHByb3BlcnR5LCAkeyBwcm9wZXJ0eSB9LCBlcnJvciwgJHsgZXJyb3IgfWAgKTtcblx0fVxuXG5cdGlmKCAoICggdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICYmIGVudGl0eSAhPT0gZ2xvYmFsICkgfHxcblx0XHQoIHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbnRpdHkgIT09IHdpbmRvdyApICkgJiZcblx0XHR0eXBlb2YgZW50aXR5LmhhcmRlbiA9PSBcInVuZGVmaW5lZFwiIClcblx0e1xuXHRcdHRyeXtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggZW50aXR5LCBcImhhcmRlblwiLCB7XG5cdFx0XHRcdFwiZW51bWVyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJjb25maWd1cmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwidmFsdWVcIjogaGFyZGVuLmJpbmQoIHNlbGYgKVxuXHRcdFx0fSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGJpbmQgaGFyZGVuLCBlcnJvciwgJHsgZXJyb3IgfWAgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW50aXR5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkZW47XG4iXX0=
