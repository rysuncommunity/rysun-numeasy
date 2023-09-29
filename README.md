# @rysun/numeasy

# Introduction

@rysun/numeasy is a comprehensive NPM package that helps in performing a wide range of mathematical and statistical operations using JavaScript. This document gives a complete overview of its installation, usage, core modules, etc.

# Package Overview

@rysun/numeasy offers a robust set of modules, each tailored to address specific mathematical and statistical requirements. Here is an overview of the core modules:

1. Array Creation: It comprises single and multi-dimensional arrays. A single-dimensional array stores data sequentially in a linear structure, while a multi-dimensional array arranges data in a nested structure with multiple indices.

2. Mathematical Set Operations: This module equips users with the tools to perform essential set operations, including union, intersection, and difference, among others.

3. Statistical Operations: Starting from calculating measures such as mean, median, and percentile, to assessing data variability through standard deviation; this module is crucial for in-depth data analysis.

4. Interpolation: This module facilitates the interpolation of data points, enabling users to represent and analyze data, especially when dealing with irregularly spaced data sets.

# Licensing

@rysun/numeasy is distributed under the MIT license. This open-source license ensures that users have the freedom to use, modify, and distribute the package in their projects, fostering a vibrant and collaborative development community.

# Installation & Usage

To incorporate the @rysun/numeasy package into the project, follow the installation instructions below:

1. By using NPM:
   ```bash
   npm install @rysun/numeasy
   ```
2. By using yarn:
   ```bash
   yarn add @rysun/numeasy
   ```
   These commands need to be executed within your terminal. Once you have successfully installed the package, you will gain full access to @rysun/numeasy.

# Core Modules

## 1. Array Creation:

#### A. Single Dimensional Array

```javascript
import mu from ‘@rysun/numeasy’

let A = mu.array([1,2,3]);

console.log(A)
```

Output:

```bash
[1, 2, 3]
```

#### B. Multidimensional Array

```javascript
let A = mu.array([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(A);
```

Output:

```bash
[[1,2,3],[4,5,6]]
```

## 2. Set Operations

Sets are collections of unique data, that ensure no elements are repeated. The @rysun/numeasy package facilitates fundamental set operations like Union, Intersection, Difference, and Symmetric Difference on arrays.

#### A. Union

The union of two sets A and B includes all the elements of sets A and B.

##### Example

```javascript
import ms from ‘@rysun/numeasy’

let A = ms.array([1,2,3]);
let B = ms.array([7,8,3]);

let Result = ms.union(A,B)

console.log (Result)
```

##### Output

```bash
[1,2,3,7,8]
```

#### B. Intersection

The intersection of two sets A and B includes the common elements between sets A and B.

##### Example

```javascript
import mu from "numeasy";

const arr1 = mu.array([
  [1, 2, 3],
  [9, 7, 6],
]);
const arr2 = mu.array([
  [3, 4, 5],
  [6, 7, 8],
]);

const result = mu.intersect(arr1, arr2);

console.log("intersect of two 2D arrays:", result);
```

##### Output

```bash
[3, 7, 6]
```

#### C. Difference

The difference between two sets A and B includes elements of set A that are not present in set B.

##### Example

```javascript
//Set Difference for 1D array
import mu from "numeasy";

const arr1 = mu.array([1, 2, 3]);
const arr2 = mu.array([3, 4, 5]);

const result = mu.setDiff(arr1, arr2);

console.log("setDiff of two arrays:", result);
```

##### Output

```bash
[1, 2]
```

```javascript
//Set Difference for 2D array
import mu from "numeasy";

const arr1 = mu.array([
  [1, 2, 3],
  [9, 7, 6],
]);
const arr2 = mu.array([
  [3, 4, 5],
  [6, 7, 8],
]);

const result = mu.setDiff(arr1, arr2);

console.log("setDiff of two  2D arrays:", result);
```

##### Output

```bash
[1, 2, 9]
```

#### D. Symmetric Difference

The symmetric difference between two sets A and B includes all elements of A and B without the common elements.

##### Example

```javascript
//Set Symmetric Difference for 1D array
import mu from "numeasy";

const arr1 = mu.array([1, 2, 3]);
const arr2 = mu.array([3, 4, 5]);

const result = mu.setXOR(arr1, arr2);

console.log("Symmetric Difference of two arrays:", result);
```

##### Output

```bash
[1, 2, 4, 5]
```

```javascript
//Set Symmetric Difference for 2D array
import mu from "numeasy";

const arr1 = mu.array([
  [1, 2, 3],
  [9, 7, 6],
]);
const arr2 = mu.array([
  [3, 4, 5],
  [6, 7, 8],
]);

const result = mu.setXOR(arr1, arr2);

console.log("setXOR of two 2D arrays:", result);
```

##### Output

```bash
[1, 2, 4, 5, 8, 9]
```

## 3. Statistical Operations

Statistical operations within the @rysun/numeasy package enable complete data analysis. This package provides essential statistical functions such as Median, Mean, Standard Deviation, and Percentile.

#### A. Median

The median is the middle value in a sorted array. For odd-sized arrays, it's the middle element; for even-sized arrays, it's the average of the two middle elements.

##### Example

```javascript
// Find Median from 1D array
import ms from "numeasy";

const arr = ms.array([1, 2, 3, 4, 5]);

const result = ms.median(arr);

console.log("median:", result);
```

##### Output

```bash
3
```

```javascript
// Find Median from 2D array
import ms from "numeasy";

const arr = ms.array([
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
]);

// compute median along horizontal axis
const res1 = ms.median(arr, 1);
console.log("Median along horizontal axis :", res1);

// compute median along vertical axis
const res2 = ms.median(arr, 0);
console.log("Median along vertical axis :", res2);

// compute median of entire array
const res3 = ms.median(arr);
console.log("Median of entire array :", res3);
```

##### Output

```bash
Median along horizontal axis : [ 4, 10, 16 ]
Median along vertical axis : [ 8, 10, 12 ]
Median of entire array : 10
```

#### B. Mean

The mean value of an array is the average value of all the elements in the array. It is calculated by adding all elements in the array and then dividing the result by the total number of elements in the array.

##### Example

```javascript
// Find Mean from 1D array
import ms from "numeasy";

const arr = ms.array([1, 2, 3, 4, 5]);

const result = ms.mean(arr);

console.log("mean:", result);
```

##### Output

```bash
3
```

```javascript
// Find Mean from 2D array
import ms from "numeasy";

const arr = ms.array([
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
]);

// compute mean along horizontal axis
const res1 = ms.mean(arr, 1);
console.log("Mean along horizontal axis :", res1);

// compute mean along vertical axis
const res2 = ms.mean(arr, 0);
console.log("Mean along vertical axis :", res2);

// compute mean of entire array
const res3 = ms.mean(arr);
console.log("Mean of entire array :", res3);
```

##### Output

```bash
Mean along horizontal axis : [ 4, 10, 16 ]
Mean along vertical axis : [ 8, 10, 12 ]
Mean of entire array : 10
```

#### C. Standard Deviation

The standard deviation is a measure of the spread of data in an array. It gives the degree to which the data points deviate from the mean. A smaller standard deviation indicates that data points are closer to the mean and a larger standard deviation indicates that data points are more spread out.

##### Example

```javascript
// Standard Deviation of 1D array
import ms from "numeasy";

const arr = ms.array([1, 2, 3, 4, 5]);

const result = ms.std(arr);

console.log(result);
```

##### Output

```bash
1.4142135623730951
```

```javascript
// Standard Deviation of 2D array
import ms from "numeasy"

const arr = ms.array([[2, 4, 6], [8, 10, 12], [14, 16, 18]])

// compute standard deviation along horizontal axis
const res1 = ms.std(arr,1)
console.log("Standard deviation along horizontal axis:", res1);

// compute standard deviation along vertical axis
const res2 = ms.std(arr,0)
console.log("Standard deviation along vertical axis:", res2);

// compute standard deviation of entire array
const res3 = ms.std(arr)
console.log("Standard deviation of entire array:", res3);
```
##### Output
```bash
Standard deviation along horizontal axis: [ 1.632993161855452, 1.632993161855452, 1.632993161855452 ] 
Standard deviation along vertical axis: [ 4.898979485566356, 4.898979485566356, 4.898979485566356 ] 
Standard deviation of entire array: 5.163977794943222 
```

#### D. Percentile
The Percentile function is used to calculate the nth percentile of a given array. 
##### Example
```javascript
// Compute Percentile of 1D array 
import ms from "numeasy" 

const arr = ms.array([1, 2, 3, 4, 5]) 

const result = ms.percentile(arr, 25) 

console.log("percentile:", result); 
```
##### Output
```bash
2
```

```javascript
// Compute Percentile of 2D array 
import ms from "numeasy" 

const arr = ms.array([[2, 4, 6], [8, 10, 12], [14, 16, 18]]) 

// compute percentile along horizontal axis  
const res1 = ms.percentile(arr, 25, 1) 
console.log("25th Percentile along horizontal axis :", res1); 

// compute percentile along vertical axis  
const res2 = ms.percentile(arr, 25, 0) 
console.log("25th Percentile along vertical axis :", res2); 

// compute percentile of entire array  
const res3 = ms.percentile(arr, 25) 
console.log("25th Percentile of entire array :", res3);
```
##### Output
```bash
25th Percentile along horizontal axis : [3, 9, 15] 
25th Percentile along vertical axis : [5, 7, 9] 
25th Percentile of entire array : 6 
```

## 4. Interpolation
Interpolation estimates the value of a function at points where the value is not known. 
##### Example
```javascript
import ms from "numeasy" 

const day = ms.array([2, 4, 7]) 
const gold_price = ms.array([55, 58, 65]) 

// find the value of gold on day 3 
const day3_value = ms.interp(3, day, gold_price) 
console.log ("The value of gold on day 3 is", day3_value) 
```
##### Output
```bash
The value of gold on day 3 is 56.5 
```

# Leverage @rysun/numeasy Today! 
Discover the endless possibilities that @rysun/numeasy offers. Dive into the world of mathematics and statistics in JavaScript like never before.  

Are you ready? 

Install @rysun/numeasy now and unlock the true potential of your data! 
