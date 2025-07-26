/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var enumerablePropertiesIn = require( '@stdlib/utils/enumerable-properties-in' );
var Object = require( './../../ctor' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Copies own and inherited enumerable properties from source objects to a target object.
*
* ## Notes
*
* -   If a property key is present in multiple sources, the property from the last source that defines the key prevails.
* -   The target object is mutated.
* -   Both string and symbol properties are copied.
*
* @param {Object} target - target object
* @param {...Object} source - source object(s)
* @throws {TypeError} first argument must not be null or undefined
* @returns {Object} target object
*
* @example
* function Foo() {
*     this.a = 1;
*     return this;
* }
*
* Foo.prototype.b = 2;
*
* function Bar() {
*     this.c = 3;
*     return this;
* }
*
* Bar.prototype.d = 4;
*
* var out = assignIn( {}, new Foo(), new Bar() );
* // returns { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
*/
function assignIn( target ) {
	var source;
	var keys;
	var key;
	var len;
	var to;
	var i;
	var j;
	if ( target === void 0 || target === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be a non-null object. Value: `%s`.', target ) );
	}
	to = Object( target );
	for ( i = 1; i < arguments.length; i++ ) {
		source = arguments[ i ];
		if ( source === void 0 || source === null ) {
			continue;
		}
		keys = enumerablePropertiesIn( Object( source ) );
		len = keys.length;
		for ( j = 0; j < len; j++ ) {
			key = keys[ j ];
			to[ key ] = source[ key ];
		}
	}
	return to;
}


// EXPORTS //

module.exports = assignIn;
