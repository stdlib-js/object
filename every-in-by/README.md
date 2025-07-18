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

# everyInBy

> Test whether all properties (own and inherited) of an object pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var everyInBy = require( '@stdlib/object/every-in-by' );
```

#### everyInBy( object, predicate\[, thisArg ] )

Tests whether all properties (own and inherited) of an `object` pass a test implemented by a `predicate` function.

```javascript
var o;
var bool;

function isPositive( v ) {
    return ( v > 0 );
}

o = {
    'a': 1,
    'b': 2,
    'c': 3
};

bool = everyInBy( o, isPositive );
// returns true
```

If provided an empty `object`, the function returns `true`.

```javascript
function isPositive( v ) {
    return ( v > 0 );
}

var bool = everyInBy( {}, isPositive );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var everyInBy = require( '@stdlib/object/every-in-by' );

var bool;
var o;
var i;

function isPositive( v ) {
    return ( v > 0 );
}

o = {};
for ( i = 0; i < 100; i++ ) {
    o[ i ] = ( randu() < 0.95 );
}

bool = everyInBy( o, isPositive );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/object/none-in-by`][@stdlib/object/none-in-by]</span><span class="delimiter">: </span><span class="description">test whether every property in an object fails a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/object/some-in-by`][@stdlib/object/some-in-by]</span><span class="delimiter">: </span><span class="description">test whether an object contains at least n properties (own and inherited) which pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/object/every-own-by`][@stdlib/object/every-own-by]</span><span class="delimiter">: </span><span class="description">test whether all own properties of an object pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/object/none-in-by]: https://github.com/stdlib-js/object/tree/main/none-in-by

[@stdlib/object/some-in-by]: https://github.com/stdlib-js/object/tree/main/some-in-by

[@stdlib/object/every-own-by]: https://github.com/stdlib-js/object/tree/main/every-own-by

<!-- </related-links> -->

</section>

<!-- /.links -->
