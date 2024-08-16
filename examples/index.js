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

var array = require( '@stdlib/ndarray-array' );
var ndarraylike2ndarray = require( './../lib' );

// Create an ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

// Convert to a "base" ndarray:
var out = ndarraylike2ndarray( x );
// returns <ndarray>

// Print various properties:
console.log( 'dtype: %s', out.dtype );
console.log( 'ndims: %d', out.shape.length );
console.log( 'length: %d', out.length );
console.log( 'shape: [ %s ]', out.shape.join( ', ' ) );
console.log( 'strides: [ %s ]', out.strides.join( ', ' ) );
console.log( 'offset: %d', out.offset );
console.log( 'order: %s', out.order );