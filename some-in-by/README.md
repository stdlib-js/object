<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# someInBy

> Test whether an object contains at least `n` properties which pass a test implemented by a predicate function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var someInBy = require( '@stdlib/object/some-in-by' );
```

#### someInBy( obj, n, predicate\[, thisArg ] )

Tests whether an `obj` contains at least `n` properties which pass a test implemented by a `predicate` function.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3,
    'd': -1
};

var bool = someInBy( obj, 2, isNegative );
// returns true
```

Once the function finds `n` successful properties, the function **immediately** returns `true`.

```javascript
function isPositive( value ) {
    if ( value < 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': -3,
    'd': 4
};

var bool = someInBy( obj, 2, isPositive );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: object property value.
-   **key**: object property key.
-   **obj**: input object.

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': -5
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = someInBy( obj, 1, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty `obj`, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = someInBy( {}, 1, alwaysTrue );
    // returns false
    ```

-   The function does **not** skip `undefined` properties.

    ```javascript
    function log( value, key ) {
        console.log( '%s: %s', key, value );
        return ( value < 0 );
    }

    var obj = {
        'a': 1,
        'b': void 0,
        'c': void 0,
        'd': 4,
        'e': -1
    };

    var bool = someInBy( obj, 1, log );
    // logs
    // a: 1
    // b: void 0
    // c: void 0
    // d: 4
    // e: -1
    ```

-   The function provides limited support for dynamic objects (i.e., objects whose properties change during execution).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var randu = require( '@stdlib/random/base/randu' );
var someInBy = require( '@stdlib/object/some-in-by' );

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var obj = {};
var i;

for ( i = 0; i < 100; i++ ) {
    obj[ 'key' + i ] = randu();
}

bool = someInBy( obj, 5, threshold );
// returns <boolean>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/any-in-by`][@stdlib/utils/any-in-by]</span><span class="delimiter">: </span><span class="description">test whether at least one property in an object passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/object/every-in-by`][@stdlib/object/every-in-by]</span><span class="delimiter">: </span><span class="description">test whether all properties (own and inherited) of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/some-by`][@stdlib/utils/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/some-own-by`][@stdlib/utils/some-own-by]</span><span class="delimiter">: </span><span class="description">test whether some `own` properties of a provided object satisfy a predicate function for at least `n` properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/any-in-by]: https://github.com/stdlib-js/utils-any-in-by

[@stdlib/object/every-in-by]: https://github.com/stdlib-js/object/tree/main/every-in-by

[@stdlib/utils/some-by]: https://github.com/stdlib-js/utils-some-by

[@stdlib/utils/some-own-by]: https://github.com/stdlib-js/utils-some-own-by

<!-- </related-links> -->

</section>

<!-- /.links -->
