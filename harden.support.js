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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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
		throw new Error("cannot harden property, " + property + ", error, " + error.stack);
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
			throw new Error("cannot bind harden, error, " + error.stack);
		}
	}

	return entity;
};

module.exports = harden;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhcmRlbi5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJwcm9wZXJ0eSIsInZhbHVlIiwiZW50aXR5IiwiRXJyb3IiLCJzZWxmIiwiZ2xvYmFsIiwid2luZG93IiwiZXJyb3IiLCJzdGFjayIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsUUFBakIsRUFBMkJDLEtBQTNCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUN4RDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFJRixhQUFhLEVBQWIsSUFDRCxPQUFPQSxRQUFQLElBQW1CLFFBQW5CLElBQ0QsUUFBT0EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQixRQURsQixJQUVBLE9BQU9BLFFBQVAsSUFBbUIsUUFIdEIsRUFJQTtBQUNDLFFBQU0sSUFBSUcsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPLElBQVg7QUFDQSxLQUFJLE9BQU9GLE1BQVAsSUFBaUIsV0FBckIsRUFBa0M7QUFDakNFLFNBQU9GLE1BQVA7QUFFQSxFQUhELE1BR00sSUFBSSxPQUFPRyxNQUFQLElBQWlCLFdBQWpCLElBQWdDLFNBQVNBLE1BQTdDLEVBQXFEO0FBQzFERCxTQUFPQyxNQUFQO0FBRUEsRUFISyxNQUdBLElBQUksT0FBT0MsTUFBUCxJQUFpQixXQUFqQixJQUFnQyxTQUFTQSxNQUE3QyxFQUFxRDtBQUMxREYsU0FBT0UsTUFBUDtBQUNBOztBQUVESixVQUFTQSxVQUFVRSxJQUFuQjs7QUFFQSxLQUFJLE9BQU9GLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0MsT0FBT0csTUFBUCxJQUFpQixXQUFyRCxFQUFrRTtBQUNqRUgsV0FBU0csTUFBVDtBQUVBLEVBSEQsTUFHTSxJQUFJLE9BQU9ILE1BQVAsSUFBaUIsV0FBakIsSUFBZ0MsT0FBT0ksTUFBUCxJQUFpQixXQUFyRCxFQUFrRTtBQUN2RUosV0FBU0ksTUFBVDtBQUNBOztBQUVELEtBQUksT0FBT0osT0FBUUYsUUFBUixDQUFQLElBQTZCLFdBQWpDLEVBQThDO0FBQzdDLFNBQU9FLE1BQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsZ0NBQXVCQSxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUM7QUFDeEMsaUJBQWMsS0FEMEI7QUFFeEMsbUJBQWdCLEtBRndCO0FBR3hDLGVBQVksS0FINEI7QUFJeEMsWUFBU0M7QUFKK0IsR0FBekM7QUFPQSxFQVJELENBUUMsT0FBT00sS0FBUCxFQUFjO0FBQ2QsUUFBTSxJQUFJSixLQUFKLDhCQUF1Q0gsUUFBdkMsaUJBQTZETyxNQUFNQyxLQUFuRSxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFJLE9BQU9ILE1BQVAsSUFBaUIsV0FBakIsSUFBZ0NILFdBQVdHLE1BQTdDLElBQ0gsT0FBT0MsTUFBUCxJQUFpQixXQUFqQixJQUFnQ0osV0FBV0ksTUFEMUMsS0FFSCxPQUFPSixPQUFPSCxNQUFkLElBQXdCLFdBRnpCLEVBR0E7QUFDQyxNQUFHO0FBQ0ZVLFVBQU9DLGNBQVAsQ0FBdUJSLE1BQXZCLEVBQStCLFFBQS9CLEVBQXlDO0FBQ3hDLGtCQUFjLEtBRDBCO0FBRXhDLG9CQUFnQixLQUZ3QjtBQUd4QyxnQkFBWSxLQUg0QjtBQUl4QyxhQUFTSCxPQUFPWSxJQUFQLENBQWFQLElBQWI7QUFKK0IsSUFBekM7QUFPQSxHQVJELENBUUMsT0FBT0csS0FBUCxFQUFjO0FBQ2QsU0FBTSxJQUFJSixLQUFKLGlDQUEwQ0ksTUFBTUMsS0FBaEQsQ0FBTjtBQUNBO0FBQ0Q7O0FBRUQsUUFBT04sTUFBUDtBQUNBLENBN0VEOztBQStFQVUsT0FBT0MsT0FBUCxHQUFpQmQsTUFBakIiLCJmaWxlIjoiaGFyZGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJoYXJkZW5cIixcblx0XHRcdFwicGF0aFwiOiBcImhhcmRlbi9oYXJkZW4uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImhhcmRlbi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJoYXJkZW5cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9oYXJkZW4uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJoYXJkZW4tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNYWtlcyB5b3VyIHByb3BlcnR5LXZhbHVlIG5vbi1lbnVtZXJhYmxlLCBub24tY29uZmlndXJhYmxlIGFuZCBub24td3JpdGFibGUuXG5cblx0XHRJZiBlbnRpdHkgaXMgZ2l2ZW4sIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIGJvdW5kIHRvIHRoZSBlbnRpdHkuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIHRoZSBicm93c2VyLCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIHRoZSBAY29kZTp3aW5kb3c7LlxuXG5cdFx0RWxzZSwgaWYgdGhpcyBtb2R1bGUgaXMgdXNlZCBpbiBhIE5vZGVKUyBlbnZpcm9ubWVudCwgdGhlIGVudGl0eSBkZWZhdWx0cyB0byBAY29kZTpnbG9iYWw7LlxuXG5cdFx0Tm90ZSB0aGF0IGlmIHRoZSBlbnRpdHkgaXMgaGFyZGVuZWQsIHlvdSBjYW5ub3QgdXNlIEBjb2RlOmRlbGV0ZTsgb24gaXQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IGhhcmRlbiA9IGZ1bmN0aW9uIGhhcmRlbiggcHJvcGVydHksIHZhbHVlLCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiLFxuXHRcdFx0XHRcdFwibnVtYmVyXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJlbnRpdHk6b3B0aW9uYWxcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHByb3BlcnR5ID09PSBcIlwiIHx8XG5cdFx0KCB0eXBlb2YgcHJvcGVydHkgIT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0dHlwZW9mIHByb3BlcnR5ICE9IFwic3ltYm9sXCIgJiZcblx0XHQgXHR0eXBlb2YgcHJvcGVydHkgIT0gXCJudW1iZXJcIiApIClcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gdGhpcztcblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdHNlbGYgPSBlbnRpdHk7XG5cblx0fWVsc2UgaWYoIHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzID09PSBnbG9iYWwgKXtcblx0XHRzZWxmID0gZ2xvYmFsO1xuXG5cdH1lbHNlIGlmKCB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcyA9PT0gd2luZG93ICl7XG5cdFx0c2VsZiA9IHdpbmRvdztcblx0fVxuXG5cdGVudGl0eSA9IGVudGl0eSB8fCBzZWxmO1xuXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICl7XG5cdFx0ZW50aXR5ID0gZ2xvYmFsO1xuXG5cdH1lbHNlIGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICl7XG5cdFx0ZW50aXR5ID0gd2luZG93O1xuXHR9XG5cblx0aWYoIHR5cGVvZiBlbnRpdHlbIHByb3BlcnR5IF0gIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHR0cnl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBlbnRpdHksIHByb3BlcnR5LCB7XG5cdFx0XHRcImVudW1lcmFibGVcIjogZmFsc2UsXG5cdFx0XHRcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0fSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgaGFyZGVuIHByb3BlcnR5LCAkeyBwcm9wZXJ0eSB9LCBlcnJvciwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0fVxuXG5cdGlmKCAoICggdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICYmIGVudGl0eSAhPT0gZ2xvYmFsICkgfHxcblx0XHQoIHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbnRpdHkgIT09IHdpbmRvdyApICkgJiZcblx0XHR0eXBlb2YgZW50aXR5LmhhcmRlbiA9PSBcInVuZGVmaW5lZFwiIClcblx0e1xuXHRcdHRyeXtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggZW50aXR5LCBcImhhcmRlblwiLCB7XG5cdFx0XHRcdFwiZW51bWVyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJjb25maWd1cmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwidmFsdWVcIjogaGFyZGVuLmJpbmQoIHNlbGYgKVxuXHRcdFx0fSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGJpbmQgaGFyZGVuLCBlcnJvciwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW50aXR5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkZW47XG4iXX0=
