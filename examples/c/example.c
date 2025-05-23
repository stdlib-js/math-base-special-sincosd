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
