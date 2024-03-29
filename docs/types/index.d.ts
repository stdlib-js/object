/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import assign = require( './../../assign' );
import Object = require( './../../ctor' );

/**
* Interface describing the `object` namespace.
*/
interface Namespace {
	/**
	* Copies own enumerable properties from one or more source objects to a target object.
	*
	* ## Notes
	*
	* -   If a property key is present in multiple sources, the property from the last source that defines the key prevails.
	* -   The target object is mutated.
	*
	* @param target - target object
	* @param source - source object(s)
	* @throws first argument must not be null or undefined
	* @returns target object
	*
	* @example
	* var obj1 = {
	*     'a': 'beep'
	* };
	* var obj2 = {
	*     'b': 'boop'
	* };
	*
	* var out = ns.assign( obj1, obj2 );
	* // returns { 'a': 'beep', 'b': 'boop' }
	*/
	assign: typeof assign;

	/**
	* Returns an object.
	*
	* ## Notes
	*
	* -   If provided `null` or `undefined`, the function returns an empty object.
	* -   If provided an existing object, the function returns the input value unchanged.
	* -   Otherwise, if provided any other value (e.g., a number, string, etc), the function will return an object of the corresponding type.
	*
	* @param value - input value
	* @returns object
	*
	* @example
	* var o = new ns.Object( null );
	* // returns {}
	*
	* @example
	* var o = new ns.Object( 5.0 );
	* // returns <Number>
	*
	* @example
	* var o = new ns.Object( 'beep' );
	* // returns <String>
	*
	* @example
	* var o1 = {};
	*
	* var o2 = new ns.Object( o1 );
	* // returns {}
	*
	* var bool = ( o1 === o2 );
	* // returns true
	*/
	Object: typeof Object;
}

/**
* Object.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
