"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhcmRlbi5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJwcm9wZXJ0eSIsInZhbHVlIiwiZW50aXR5IiwiRXJyb3IiLCJzZWxmIiwiZ2xvYmFsIiwid2luZG93IiwiZXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBLElBQU1BLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsUUFBakIsRUFBMkJDLEtBQTNCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUN4RDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFJRixhQUFhLEVBQWIsSUFDRCxPQUFPQSxRQUFQLElBQW1CLFFBQW5CLElBQ0QsUUFBT0EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQixRQURsQixJQUVBLE9BQU9BLFFBQVAsSUFBbUIsUUFIdEIsRUFJQTtBQUNDLFFBQU0sSUFBSUcsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPLElBQVg7QUFDQSxLQUFJLE9BQU9GLE1BQVAsSUFBaUIsV0FBckIsRUFBa0M7QUFDakNFLFNBQU9GLE1BQVA7QUFFQSxFQUhELE1BR00sSUFBSSxPQUFPRyxNQUFQLElBQWlCLFdBQWpCLElBQWdDLFNBQVNBLE1BQTdDLEVBQXFEO0FBQzFERCxTQUFPQyxNQUFQO0FBRUEsRUFISyxNQUdBLElBQUksT0FBT0MsTUFBUCxJQUFpQixXQUFqQixJQUFnQyxTQUFTQSxNQUE3QyxFQUFxRDtBQUMxREYsU0FBT0UsTUFBUDtBQUNBOztBQUVESixVQUFTQSxVQUFVRSxJQUFuQjs7QUFFQSxLQUFJLE9BQU9GLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0MsT0FBT0csTUFBUCxJQUFpQixXQUFyRCxFQUFrRTtBQUNqRUgsV0FBU0csTUFBVDtBQUVBLEVBSEQsTUFHTSxJQUFJLE9BQU9ILE1BQVAsSUFBaUIsV0FBakIsSUFBZ0MsT0FBT0ksTUFBUCxJQUFpQixXQUFyRCxFQUFrRTtBQUN2RUosV0FBU0ksTUFBVDtBQUNBOztBQUVELEtBQUksT0FBT0osT0FBUUYsUUFBUixDQUFQLElBQTZCLFdBQWpDLEVBQThDO0FBQzdDLFNBQU9FLE1BQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsZ0NBQXVCQSxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUM7QUFDeEMsaUJBQWMsS0FEMEI7QUFFeEMsbUJBQWdCLEtBRndCO0FBR3hDLGVBQVksS0FINEI7QUFJeEMsWUFBU0M7QUFKK0IsR0FBekM7QUFPQSxFQVJELENBUUMsT0FBT00sS0FBUCxFQUFjO0FBQ2QsUUFBTSxJQUFJSixLQUFKLDhCQUF1Q0gsUUFBdkMsaUJBQTZETyxLQUE3RCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFJLE9BQU9GLE1BQVAsSUFBaUIsV0FBakIsSUFBZ0NILFdBQVdHLE1BQTdDLElBQ0gsT0FBT0MsTUFBUCxJQUFpQixXQUFqQixJQUFnQ0osV0FBV0ksTUFEMUMsS0FFSCxPQUFPSixPQUFPSCxNQUFkLElBQXdCLFdBRnpCLEVBR0E7QUFDQyxNQUFHO0FBQ0ZTLFVBQU9DLGNBQVAsQ0FBdUJQLE1BQXZCLEVBQStCLFFBQS9CLEVBQXlDO0FBQ3hDLGtCQUFjLEtBRDBCO0FBRXhDLG9CQUFnQixLQUZ3QjtBQUd4QyxnQkFBWSxLQUg0QjtBQUl4QyxhQUFTSCxPQUFPVyxJQUFQLENBQWFOLElBQWI7QUFKK0IsSUFBekM7QUFPQSxHQVJELENBUUMsT0FBT0csS0FBUCxFQUFjO0FBQ2QsU0FBTSxJQUFJSixLQUFKLGlDQUEwQ0ksS0FBMUMsQ0FBTjtBQUNBO0FBQ0Q7O0FBRUQsUUFBT0wsTUFBUDtBQUNBLENBN0VEOztBQStFQVMsT0FBT0MsT0FBUCxHQUFpQmIsTUFBakIiLCJmaWxlIjoiaGFyZGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiaGFyZGVuL2hhcmRlbi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiaGFyZGVuLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaGFyZGVuLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiaGFyZGVuLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TWFrZXMgeW91ciBwcm9wZXJ0eS12YWx1ZSBub24tZW51bWVyYWJsZSwgbm9uLWNvbmZpZ3VyYWJsZSBhbmQgbm9uLXdyaXRhYmxlLlxuXG5cdFx0SWYgZW50aXR5IGlzIGdpdmVuLCB0aGUgcHJvcGVydHkgd2lsbCBiZSBib3VuZCB0byB0aGUgZW50aXR5LlxuXG5cdFx0RWxzZSwgaWYgdGhpcyBtb2R1bGUgaXMgdXNlZCBpbiB0aGUgYnJvd3NlciwgdGhlIGVudGl0eSBkZWZhdWx0cyB0byB0aGUgQGNvZGU6d2luZG93Oy5cblxuXHRcdEVsc2UsIGlmIHRoaXMgbW9kdWxlIGlzIHVzZWQgaW4gYSBOb2RlSlMgZW52aXJvbm1lbnQsIHRoZSBlbnRpdHkgZGVmYXVsdHMgdG8gQGNvZGU6Z2xvYmFsOy5cblxuXHRcdE5vdGUgdGhhdCBpZiB0aGUgZW50aXR5IGlzIGhhcmRlbmVkLCB5b3UgY2Fubm90IHVzZSBAY29kZTpkZWxldGU7IG9uIGl0LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG4qL1xuXG5jb25zdCBoYXJkZW4gPSBmdW5jdGlvbiBoYXJkZW4oIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIixcblx0XHRcdFx0XHRcIm51bWJlclwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwiZW50aXR5Om9wdGlvbmFsXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBwcm9wZXJ0eSA9PT0gXCJcIiB8fFxuXHRcdCggdHlwZW9mIHByb3BlcnR5ICE9IFwic3RyaW5nXCIgJiZcblx0XHRcdHR5cGVvZiBwcm9wZXJ0eSAhPSBcInN5bWJvbFwiICYmXG5cdFx0IFx0dHlwZW9mIHByb3BlcnR5ICE9IFwibnVtYmVyXCIgKSApXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHRoaXM7XG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwidW5kZWZpbmVkXCIgKXtcblx0XHRzZWxmID0gZW50aXR5O1xuXG5cdH1lbHNlIGlmKCB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcyA9PT0gZ2xvYmFsICl7XG5cdFx0c2VsZiA9IGdsb2JhbDtcblxuXHR9ZWxzZSBpZiggdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMgPT09IHdpbmRvdyApe1xuXHRcdHNlbGYgPSB3aW5kb3c7XG5cdH1cblxuXHRlbnRpdHkgPSBlbnRpdHkgfHwgc2VsZjtcblxuXHRpZiggdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdGVudGl0eSA9IGdsb2JhbDtcblxuXHR9ZWxzZSBpZiggdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdGVudGl0eSA9IHdpbmRvdztcblx0fVxuXG5cdGlmKCB0eXBlb2YgZW50aXR5WyBwcm9wZXJ0eSBdICE9IFwidW5kZWZpbmVkXCIgKXtcblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0dHJ5e1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggZW50aXR5LCBwcm9wZXJ0eSwge1xuXHRcdFx0XCJlbnVtZXJhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XCJjb25maWd1cmFibGVcIjogZmFsc2UsXG5cdFx0XHRcIndyaXRhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHRcdH0gKTtcblxuXHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGhhcmRlbiBwcm9wZXJ0eSwgJHsgcHJvcGVydHkgfSwgZXJyb3IsICR7IGVycm9yIH1gICk7XG5cdH1cblxuXHRpZiggKCAoIHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbnRpdHkgIT09IGdsb2JhbCApIHx8XG5cdFx0KCB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgZW50aXR5ICE9PSB3aW5kb3cgKSApICYmXG5cdFx0dHlwZW9mIGVudGl0eS5oYXJkZW4gPT0gXCJ1bmRlZmluZWRcIiApXG5cdHtcblx0XHR0cnl7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgXCJoYXJkZW5cIiwge1xuXHRcdFx0XHRcImVudW1lcmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcIndyaXRhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcInZhbHVlXCI6IGhhcmRlbi5iaW5kKCBzZWxmIClcblx0XHRcdH0gKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBiaW5kIGhhcmRlbiwgZXJyb3IsICR7IGVycm9yIH1gICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZGVuO1xuIl19
