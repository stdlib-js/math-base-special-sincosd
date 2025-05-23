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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var sincosd = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sincosd instanceof Error )
};


// FIXTURES //

var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sincosd, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sine and cosine (for -256*180.0 < x < 0)', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	sine = mediumNegative.sine;
	cosine = mediumNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = 1.01 * EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine and cosine (for 0 < x < 256*180.0)', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	sine = mediumPositive.sine;
	cosine = mediumPositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = 1.01 * EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine and cosine (for -2**60 (180.0/2) < x < -2**20 (180.0/2))', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	sine = largeNegative.sine;
	cosine = largeNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine and cosine (for 2**20 (180.0/2) < x < 2**60 (180.0/2))', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = largePositive.x;
	sine = largePositive.sine;
	cosine = largePositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine and cosine (for x <= -2**60 (180.0/2))', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	sine = hugeNegative.sine;
	cosine = hugeNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine and cosine (for x >= 2**60 (180.0/2))', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	sine = hugePositive.sine;
	cosine = hugePositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = sincosd( x[i] );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'x: '+x[i]+'. Expected: '+sine[i] );
		} else {
			delta = abs( y[0] - sine[i] );
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === cosine[ i ] ) {
			t.strictEqual( y[1], cosine[ i ], 'x: '+x[i]+'. Expected: '+cosine[i] );
		} else {
			delta = abs( y[1] - cosine[i] );
			tol = EPS * abs( cosine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v = sincosd( NaN );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', opts, function test( t ) {
	var v = sincosd( PINF );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', opts, function test( t ) {
	var v = sincosd( NINF );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});
