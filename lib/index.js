/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name anyInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/any-in-by}
*/
setReadOnly( ns, 'anyInBy', require( './../any-in-by' ) );

/**
* @name anyOwnBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/any-own-by}
*/
setReadOnly( ns, 'anyOwnBy', require( './../any-own-by' ) );

/**
* @name assign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/assign}
*/
setReadOnly( ns, 'assign', require( './../assign' ) );

/**
* @name assignIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/assign-in}
*/
setReadOnly( ns, 'assignIn', require( './../assign-in' ) );

/**
* @name bifurcateIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/bifurcate-in}
*/
setReadOnly( ns, 'bifurcateIn', require( './../bifurcate-in' ) );

/**
* @name bifurcateOwn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/bifurcate-own}
*/
setReadOnly( ns, 'bifurcateOwn', require( './../bifurcate-own' ) );

/**
* @name capitalizeKeys
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/capitalize-keys}
*/
setReadOnly( ns, 'capitalizeKeys', require( './../capitalize-keys' ) );

/**
* @name commonKeys
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/common-keys}
*/
setReadOnly( ns, 'commonKeys', require( './../common-keys' ) );

/**
* @name commonKeysIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/common-keys-in}
*/
setReadOnly( ns, 'commonKeysIn', require( './../common-keys-in' ) );

/**
* @name Object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/ctor}
*/
setReadOnly( ns, 'Object', require( './../ctor' ) );

/**
* @name deepGet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/deep-get}
*/
setReadOnly( ns, 'deepGet', require( './../deep-get' ) );

/**
* @name deepSet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/deep-set}
*/
setReadOnly( ns, 'deepSet', require( './../deep-set' ) );

/**
* @name everyInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/every-in-by}
*/
setReadOnly( ns, 'everyInBy', require( './../every-in-by' ) );

/**
* @name everyOwnBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/every-own-by}
*/
setReadOnly( ns, 'everyOwnBy', require( './../every-own-by' ) );

/**
* @name forIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/for-in}
*/
setReadOnly( ns, 'forIn', require( './../for-in' ) );

/**
* @name forOwn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/for-own}
*/
setReadOnly( ns, 'forOwn', require( './../for-own' ) );

/**
* @name inverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/inverse}
*/
setReadOnly( ns, 'inverse', require( './../inverse' ) );

/**
* @name inverseBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/inverse-by}
*/
setReadOnly( ns, 'inverseBy', require( './../inverse-by' ) );

/**
* @name lowercaseKeys
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/lowercase-keys}
*/
setReadOnly( ns, 'lowercaseKeys', require( './../lowercase-keys' ) );

/**
* @name moveProperty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/move-property}
*/
setReadOnly( ns, 'moveProperty', require( './../move-property' ) );

/**
* @name noneInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/none-in-by}
*/
setReadOnly( ns, 'noneInBy', require( './../none-in-by' ) );

/**
* @name noneOwnBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/none-own-by}
*/
setReadOnly( ns, 'noneOwnBy', require( './../none-own-by' ) );

/**
* @name someInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/some-in-by}
*/
setReadOnly( ns, 'someInBy', require( './../some-in-by' ) );

/**
* @name someOwnBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/some-own-by}
*/
setReadOnly( ns, 'someOwnBy', require( './../some-own-by' ) );

/**
* @name uncapitalizeKeys
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/uncapitalize-keys}
*/
setReadOnly( ns, 'uncapitalizeKeys', require( './../uncapitalize-keys' ) );

/**
* @name uppercaseKeys
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/uppercase-keys}
*/
setReadOnly( ns, 'uppercaseKeys', require( './../uppercase-keys' ) );


// EXPORTS //

module.exports = ns;
