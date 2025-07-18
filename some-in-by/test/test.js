/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var someInBy = require( './../lib' );


// FUNCTIONS //

function isNegative( value ) {
	return ( value < 0 );
}

function isPositive( value ) {
	return ( value > 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someInBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws a type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someInBy( value, 2, noop );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws a type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someInBy( {
				'a': 1,
				'b': 2,
				'c': 3
			}, value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws a type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someInBy( {
				'a': 1,
				'b': 2,
				'c': 3
			}, 2, value );
		};
	}
});

tape( 'if provided an empty object, the function returns `false`', function test( t ) {
	var bool;
	var obj;

	function foo() {
		t.fail( 'should not be invoked' );
	}
	obj = {};
	bool = someInBy( obj, 1, foo );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if an object contains at least `n` properties which pass a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 1,
		'b': -2,
		'c': 3,
		'd': -1
	};

	bool = someInBy( obj, 2, isNegative );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if an object does not contain at least `n` properties which pass a test (case: at least 1)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': -1,
		'b': -2,
		'c': -3
	};

	bool = someInBy( obj, 1, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if an object does not contain at least `n` properties which pass a test (case: at least 2)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': -1,
		'b': -2,
		'c': -3
	};

	bool = someInBy( obj, 2, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var bool;
	var ctx;
	var obj;

	function sum( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
		return ( value < 0 );
	}

	ctx = {
		'sum': 0,
		'count': 0
	};
	obj = {
		'a': 1.0,
		'b': -2.0,
		'c': 3.0,
		'd': -1.0
	};

	bool = someInBy( obj, 2, sum, ctx );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( ctx.sum/ctx.count, 0.25, 'expected result' );

	t.end();
});

tape( 'the function provides basic support for dynamic objects', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};

	function isNegative( value, key, collection ) {
		if ( key === 'c' ) {
			collection[ 'd' ] = value-1;
		}
		return ( value < 0 );
	}

	bool = someInBy( obj, 1, isNegative );

	t.deepEqual( obj, {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 2
	}, 'expected result' );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function does not skip undefined properties', function test( t ) {
	var expected;
	var bool;
	var obj;

	obj = {
		'a': 1,
		'b': void 0,
		'c': void 0,
		'd': 4,
		'e': -1
	};
	expected = {
		'a': 1,
		'b': void 0,
		'c': void 0,
		'd': 4,
		'e': -1
	};

	function verify( value, key ) {
		t.strictEqual( value, expected[ key ], 'provides expected value' );
		return ( value < 0 );
	}

	bool = someInBy( obj, 1, verify );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a regular expression or a date object with no properties passing the test', function test( t ) {
	var values;
	var i;

	values = [
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( someInBy( values[ i ], 1, threshold ), false, 'returns false when provided ' + values[ i ] );
	}
	t.end();

	function threshold( value ) {
		return ( typeof value === 'number' );
	}
});
