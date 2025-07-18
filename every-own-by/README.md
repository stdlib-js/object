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

# everyOwnBy

> Test whether all own propertes of an object pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var everyOwnBy = require( '@stdlib/object/every-own-by' );
```

#### everyOwnBy( object, predicate\[, thisArg ] )

Tests whether all `own` properties of an object pass a test implemented by a `predicate` function.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var bool = everyOwnBy( obj, isPositive );
// returns true
```

If a `predicate` function returns a non-truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3,
    'd': 4
};

var bool = everyOwnBy( obj, isPositive );
// returns false
```

The invoked `function` is provided three arguments:

-   **value**: property value.
-   **key**: property key.
-   **obj**: input object.

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return false;
    }
    this.sum += value;
    this.count += 1;
    return true;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = everyOwnBy( obj, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the 1st argument is not an [`object`][mdn-object] or the second argument is not a function, the function throws a Type Error.

-   If provided an empty object, the function returns `true`.

    ```javascript
    function untrue() {
        return false;
    }
    var bool = everyOwnBy( {}, untrue );
    // returns true
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var everyOwnBy = require( '@stdlib/object/every-own-by' );

function isPositive( value ) {
    return ( value > 0 );
}

var obj = {};
var i;

// Populate object with random values
for ( i = 0; i < 100; i++ ) {
    obj[ 'prop_' + i ] = randu();
}

var bool = everyOwnBy( obj, isPositive );
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

-   <span class="package-name">[`@stdlib/utils/any-own-by`][@stdlib/utils/any-own-by]</span><span class="delimiter">: </span><span class="description">test whether whether any 'own' property of a provided object satisfies a predicate function.</span>
-   <span class="package-name">[`@stdlib/object/every-in-by`][@stdlib/object/every-in-by]</span><span class="delimiter">: </span><span class="description">test whether all properties (own and inherited) of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/none-own-by`][@stdlib/utils/none-own-by]</span><span class="delimiter">: </span><span class="description">tests whether every own property of an object fails a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/some-own-by`][@stdlib/utils/some-own-by]</span><span class="delimiter">: </span><span class="description">test whether some `own` properties of a provided object satisfy a predicate function for at least `n` properties.</span>
-   <span class="package-name">[`@stdlib/utils/every-by`][@stdlib/utils/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/any-own-by]: https://github.com/stdlib-js/utils-any-own-by

[@stdlib/object/every-in-by]: https://github.com/stdlib-js/object/tree/main/every-in-by

[@stdlib/utils/none-own-by]: https://github.com/stdlib-js/utils-none-own-by

[@stdlib/utils/some-own-by]: https://github.com/stdlib-js/utils-some-own-by

[@stdlib/utils/every-by]: https://github.com/stdlib-js/utils-every-by

<!-- </related-links> -->

</section>

<!-- /.links -->
