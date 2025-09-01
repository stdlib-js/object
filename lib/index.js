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
* @name Object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/ctor}
*/
setReadOnly( ns, 'Object', require( './../ctor' ) );

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
* @name noneInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/none-in-by}
*/
setReadOnly( ns, 'noneInBy', require( './../none-in-by' ) );

/**
* @name someInBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/object/some-in-by}
*/
setReadOnly( ns, 'someInBy', require( './../some-in-by' ) );


// EXPORTS //

module.exports = ns;
