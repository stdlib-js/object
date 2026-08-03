<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Object

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Object namespace.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/object@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { Object, anyInBy, anyOwnBy, assign, assignIn, bifurcateIn, bifurcateOwn, capitalizeKeys, commonKeys, commonKeysIn, deepGet, deepSet, everyInBy, everyOwnBy, forIn, forOwn, inverse, inverseBy, lowercaseKeys, moveProperty, noneInBy, noneOwnBy, someInBy, someOwnBy, uncapitalizeKeys, uppercaseKeys } from 'https://cdn.jsdelivr.net/gh/stdlib-js/object@esm/index.mjs';
```

#### ns

Object namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`anyInBy( object, predicate[, thisArg ] )`][@stdlib/object/any-in-by]</span><span class="delimiter">: </span><span class="description">test whether at least one property in an object passes a test implemented by a predicate function.</span>
-   <span class="signature">[`anyOwnBy( object, predicate[, thisArg ] )`][@stdlib/object/any-own-by]</span><span class="delimiter">: </span><span class="description">test whether at least one own property of a provided object passes a test implemented by a predicate function.</span>
-   <span class="signature">[`assignIn( target, source1[, source2[,...,sourceN]] )`][@stdlib/object/assign-in]</span><span class="delimiter">: </span><span class="description">copy enumerable own and inherited properties from one or more source objects to a target object.</span>
-   <span class="signature">[`assign( target, source1[, source2[,...,sourceN]] )`][@stdlib/object/assign]</span><span class="delimiter">: </span><span class="description">copy enumerable own properties from one or more source objects to a target object.</span>
-   <span class="signature">[`bifurcateIn( obj, [options,] predicate )`][@stdlib/object/bifurcate-in]</span><span class="delimiter">: </span><span class="description">split an object's **own** and **inherited** property values into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateOwn( obj, [options,] predicate )`][@stdlib/object/bifurcate-own]</span><span class="delimiter">: </span><span class="description">split an object's **own** property values into two groups according to a predicate function.</span>
-   <span class="signature">[`capitalizeKeys( obj )`][@stdlib/object/capitalize-keys]</span><span class="delimiter">: </span><span class="description">convert the first letter of each object key to uppercase.</span>
-   <span class="signature">[`commonKeysIn( obj1, obj2[, obj3[,...,objN]] )`][@stdlib/object/common-keys-in]</span><span class="delimiter">: </span><span class="description">return the common own and inherited property names of two or more objects.</span>
-   <span class="signature">[`commonKeys( obj1, obj2[, obj3[,...,objN]] )`][@stdlib/object/common-keys]</span><span class="delimiter">: </span><span class="description">return the common own property names of two or more objects.</span>
-   <span class="signature">[`Object( value )`][@stdlib/object/ctor]</span><span class="delimiter">: </span><span class="description">object constructor.</span>
-   <span class="signature">[`deepGet( obj, path[, options] )`][@stdlib/object/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="signature">[`deepSet( obj, path, value[, options] )`][@stdlib/object/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>
-   <span class="signature">[`everyInBy( object, predicate[, thisArg ] )`][@stdlib/object/every-in-by]</span><span class="delimiter">: </span><span class="description">test whether all properties (own and inherited) of an object pass a test implemented by a predicate function.</span>
-   <span class="signature">[`everyOwnBy( object, predicate[, thisArg ] )`][@stdlib/object/every-own-by]</span><span class="delimiter">: </span><span class="description">test whether all own propertes of an object pass a test implemented by a predicate function.</span>
-   <span class="signature">[`forIn( obj, fcn[, thisArg ] )`][@stdlib/object/for-in]</span><span class="delimiter">: </span><span class="description">invoke a function for each own and inherited enumerable property of an object.</span>
-   <span class="signature">[`forOwn( obj, fcn[, thisArg ] )`][@stdlib/object/for-own]</span><span class="delimiter">: </span><span class="description">invoke a function for each own enumerable property of an object.</span>
-   <span class="signature">[`inverseBy( obj, [options,] transform )`][@stdlib/object/inverse-by]</span><span class="delimiter">: </span><span class="description">invert an object, such that keys become values and values become keys, according to a transform function.</span>
-   <span class="signature">[`inverse( obj[, options] )`][@stdlib/object/inverse]</span><span class="delimiter">: </span><span class="description">invert an object, such that keys become values and values become keys.</span>
-   <span class="signature">[`lowercaseKeys( obj )`][@stdlib/object/lowercase-keys]</span><span class="delimiter">: </span><span class="description">convert each object key to lowercase.</span>
-   <span class="signature">[`moveProperty( source, prop, target )`][@stdlib/object/move-property]</span><span class="delimiter">: </span><span class="description">move a property from one object to another object.</span>
-   <span class="signature">[`noneInBy( object, predicate[, thisArg ] )`][@stdlib/object/none-in-by]</span><span class="delimiter">: </span><span class="description">test whether every property of an object fails a test implemented by a predicate function.</span>
-   <span class="signature">[`noneOwnBy( object, predicate[, thisArg ] )`][@stdlib/object/none-own-by]</span><span class="delimiter">: </span><span class="description">tests whether every own property of an object fails a test implemented by a predicate function.</span>
-   <span class="signature">[`someInBy( obj, n, predicate[, thisArg ] )`][@stdlib/object/some-in-by]</span><span class="delimiter">: </span><span class="description">test whether an object contains at least `n` properties which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`someOwnBy( obj, n, predicate[, thisArg ] )`][@stdlib/object/some-own-by]</span><span class="delimiter">: </span><span class="description">test whether an object contains at least `n` own properties which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`uncapitalizeKeys( obj )`][@stdlib/object/uncapitalize-keys]</span><span class="delimiter">: </span><span class="description">convert the first letter of each object key to lowercase.</span>
-   <span class="signature">[`uppercaseKeys( obj )`][@stdlib/object/uppercase-keys]</span><span class="delimiter">: </span><span class="description">convert each object key to uppercase.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/object@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/object.svg
[npm-url]: https://npmjs.org/package/@stdlib/object

[test-image]: https://github.com/stdlib-js/object/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/object/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/object/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/object/tree/deno
[deno-readme]: https://github.com/stdlib-js/object/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/object/tree/umd
[umd-readme]: https://github.com/stdlib-js/object/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/object/tree/esm
[esm-readme]: https://github.com/stdlib-js/object/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/object/main/LICENSE

<!-- <toc-links> -->

[@stdlib/object/any-in-by]: https://github.com/stdlib-js/object/tree/main/any-in-by

[@stdlib/object/any-own-by]: https://github.com/stdlib-js/object/tree/main/any-own-by

[@stdlib/object/assign-in]: https://github.com/stdlib-js/object/tree/main/assign-in

[@stdlib/object/assign]: https://github.com/stdlib-js/object/tree/main/assign

[@stdlib/object/bifurcate-in]: https://github.com/stdlib-js/object/tree/main/bifurcate-in

[@stdlib/object/bifurcate-own]: https://github.com/stdlib-js/object/tree/main/bifurcate-own

[@stdlib/object/capitalize-keys]: https://github.com/stdlib-js/object/tree/main/capitalize-keys

[@stdlib/object/common-keys-in]: https://github.com/stdlib-js/object/tree/main/common-keys-in

[@stdlib/object/common-keys]: https://github.com/stdlib-js/object/tree/main/common-keys

[@stdlib/object/ctor]: https://github.com/stdlib-js/object/tree/main/ctor

[@stdlib/object/deep-get]: https://github.com/stdlib-js/object/tree/main/deep-get

[@stdlib/object/deep-set]: https://github.com/stdlib-js/object/tree/main/deep-set

[@stdlib/object/every-in-by]: https://github.com/stdlib-js/object/tree/main/every-in-by

[@stdlib/object/every-own-by]: https://github.com/stdlib-js/object/tree/main/every-own-by

[@stdlib/object/for-in]: https://github.com/stdlib-js/object/tree/main/for-in

[@stdlib/object/for-own]: https://github.com/stdlib-js/object/tree/main/for-own

[@stdlib/object/inverse-by]: https://github.com/stdlib-js/object/tree/main/inverse-by

[@stdlib/object/inverse]: https://github.com/stdlib-js/object/tree/main/inverse

[@stdlib/object/lowercase-keys]: https://github.com/stdlib-js/object/tree/main/lowercase-keys

[@stdlib/object/move-property]: https://github.com/stdlib-js/object/tree/main/move-property

[@stdlib/object/none-in-by]: https://github.com/stdlib-js/object/tree/main/none-in-by

[@stdlib/object/none-own-by]: https://github.com/stdlib-js/object/tree/main/none-own-by

[@stdlib/object/some-in-by]: https://github.com/stdlib-js/object/tree/main/some-in-by

[@stdlib/object/some-own-by]: https://github.com/stdlib-js/object/tree/main/some-own-by

[@stdlib/object/uncapitalize-keys]: https://github.com/stdlib-js/object/tree/main/uncapitalize-keys

[@stdlib/object/uppercase-keys]: https://github.com/stdlib-js/object/tree/main/uppercase-keys

<!-- </toc-links> -->

</section>

<!-- /.links -->
