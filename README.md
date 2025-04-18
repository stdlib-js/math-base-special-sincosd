<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# sincosd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Simultaneously compute the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-sincosd
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sincosd = require( '@stdlib/math-base-special-sincosd' );
```

#### sincosd( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

```javascript
var v = sincosd( 0.0 );
// returns [ ~0.0, ~1.0 ]

v = sincosd( 90.0 );
// returns [ ~1.0, ~0.0 ]

v = sincosd( -30.0 );
// returns [ ~-0.5, ~0.866 ]
```

#### sincosd.assign( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees and assigns the results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = sincosd.assign( 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var sincosd = require( '@stdlib/math-base-special-sincosd' );

var x = linspace( 0.0, 180.0, 100 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = sincosd( x[ i ] );
    console.log( 'sincosd(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/sincosd.h"
```

#### stdlib_base_sincosd( x, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

```c
double cosine;
double sine;

stdlib_base_sincosd( 4.0, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **sine**: `[out] double*` destination for the sine.
-   **cosine**: `[out] double*` destination for the cosine.

```c
void stdlib_base_sincosd( const double x, double *sine, double *cosine );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/sincosd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 90.0, 180.0, 360.0 };

    double cosine;
    double sine;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_sincosd( x[ i ], &sine, &cosine );
        printf( "x: %lf => sine: %lf, cosine: %lf\n", x[ i ], sine, cosine );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sincosd.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sincosd

[test-image]: https://github.com/stdlib-js/math-base-special-sincosd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sincosd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sincosd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sincosd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sincosd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sincosd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sincosd/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-sincosd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-sincosd/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-sincosd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-sincosd/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-sincosd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-sincosd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-sincosd/main/LICENSE

[@stdlib/math/base/special/cosd]: https://github.com/stdlib-js/math-base-special-cosd

[@stdlib/math/base/special/sind]: https://github.com/stdlib-js/math-base-special-sind

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
