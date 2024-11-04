export const union = (arrA: number[], arrB: number[]) => {
    // Combine arrays arr1 and arr2
    const arr1 = arrA.flat()
    const arr2 = arrB.flat()
    const resultSet = new Set([...arr1, ...arr2]);

    // Convert the Set back to an array and sort it
    const result = Array.from(resultSet).sort((a, b) => a - b);

    return result;
}

export const intersect = (arrA: number[], arrB: number[]) => {
    const arr1 = arrA.flat()
    const arr2 = arrB.flat()
    // Filter elements from array arr1 that are present in array arr2
    const result = arr1.filter((element: number) => arr2.includes(element));

    // Remove duplicate elements from the result
    return [...new Set(result)];
}

export const setDiff = (arrA: number[], arrB: number[]) => {
    const arr1 = arrA.flat()
    const arr2 = arrB.flat()
    // Filter elements from array arr1 that are present in array arr2
    const result = arr1.filter((element: number) => !arr2.includes(element));

    // Remove duplicate elements from the result
    return [...new Set(result)];
}

export const setXOR = (arrA: number[], arrB: number[]) => {
    const arr1 = arrA.flat()
    const arr2 = arrB.flat()
    // Filter elements from arr1 that are not present in arr2,
    // and filter elements from arr2 that are not present in arr1
    const diff1 = arr1.filter((item: number) => !arr2.includes(item));
    const diff2 = arr2.filter((item: number) => !arr1.includes(item));

    // Combine the differences and sort the result
    const result = [...diff1, ...diff2].sort((a, b) => a - b);

    return result
}

/**
 * Concatenates two arrays of strings element-wise
 * @param arrA
 * @param arrB
 * @returns
 */
export const eleConcat = (arrA: string[], arrB: string[]) => {
    return arrA.map((element, index) => element + arrB[index]);
}

/**
 * Repeats each string element in the array a specified number of times
 * @param arr
 * @param repeatCount
 * @returns
 */
export const repeatEle = (arr: string[], repeatCount: number) => {
    return arr.map(element => element.repeat(repeatCount));
}

/**
 * Centers the string in an array element and pads it with a specified character
 * @param arr
 * @param width
 * @param padChar
 * @returns
 */
export const centerEle = (arr: string[], width: number, padChar: string) => {
    const centeredArray = arr.map(element => {
        const paddingTotal = width - element.length;
        const paddingStart = Math.floor(paddingTotal / 2);  // Calculate padding on each side

        return element.padStart(element.length + paddingStart, padChar)
                      .padEnd(width, padChar);
    });

    return centeredArray;
}

/**
 * Converts each string element to uppercase
 * @param arr
 * @returns
 */
export const upperCase = (arr: string[]) => {
    return arr.map(element => element.toUpperCase());
}

/**
 * Converts each string element to lowercase
 * @param arr
 * @returns
 */
export const lowerCase = (arr: string[]) => {
    return arr.map(element => element.toLowerCase());
}

/**
 * Splits each element in the array into a list of words
 * @param arr
 * @returns
 */
export const splitEle = (arr: string[]) => {
    return arr.map(element => element.split(" "));
}

/**
 * Removes leading and trailing characters (whitespace by default) from each string in the array
 * @param arr
 * @returns
 */
export const stripEle = (arr: string[]) => {
    return arr.map(element => element.trim());
}

/**
 * Returns the lowest index in each element where the substring is found
 * @param arr
 * @param subString
 * @returns
 */
export const findIndex = (arr: string[], subString: string) => {
    return arr.map(element => element.indexOf(subString));
}

/**
 * joins the elements of each string in the array with a specified separator
 * @param arr
 * @param separator
 * @returns
 */
export const joinEle= (arr: string[], separator: string) => {
    return arr.map(element => element.split("").join(separator));
}

/**
 * compare two strings element-wise and returns a boolean array indicating whether the strings in corresponding elements of the arrays are equal
 * @param arr1
 * @param arr2
 * @returns
 */
export const isEqualEle = (arr1: string[], arr2: string[]) => {
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must have the same length");
    }

    // Compare element-wise and return a boolean array
    return arr1.map((item, index) => item === arr2[index]);
}

/**
 * Counting a substring in an array of strings
 * @param arr
 * @param subString
 * @returns
 */
export const countOccurrence = (arr: string[], subString: string) => {
    return arr.map(str => (str.split(subString).length - 1));
}

/**
 * check if strings end with a suffix
 * @param arr
 * @param suffix
 * @returns
 */
export const checkEndsWith = (arr: string[], suffix: string) => {
    return arr.map(str => str.endsWith(suffix));
}

/**
 * check if strings starts with a suffix
 * @param arr
 * @param suffix
 * @returns
 */
export const checkStartsWith = (arr: string[], suffix: string) => {
    return arr.map(str => str.startsWith(suffix));
}

/**
 * reshape array
 * @param arr
 * @param shape
 * @returns
 */
export const reshapeArr = <T>(arr: T[], shape: number[]) => {
    let totalSize = shape.reduce((a, b) => a * b);

    if (arr.length !== totalSize) {
        throw new Error("Number of elements does not match the new shape");
    }

    return helper(arr.slice(), shape);
}

const helper = <T>(arr:T[], shape:number[]): T[] | T[][] =>  {
    if (shape.length === 1) {
        return arr.splice(0, shape[0]);
    }

    let size = shape[0];
    let newArr: T[][] = [];
    for (let i = 0; i < size; i++) {
        newArr.push(helper(arr, shape.slice(1)) as T[]);
    }
    return newArr;
}

/**
 * resize matrix
 * @param matrix
 * @param row
 * @param col
 * @returns
 */
export const resizeArr = <T>(matrix: T[], row: number, col: number) => {
    const flatArray = matrix.flat(); // Flatten the original matrix

    // Resize: Create a new array and fill it with elements
    const resizedMatrix = new Array(row).fill(null).map((_, rowIndex) => {
        return new Array(col).fill(null).map((_, colIndex) => {
            // Wrap around or truncate
            return flatArray[(rowIndex * col + colIndex) % flatArray.length];
        });
    });

    return resizedMatrix;
}

/**
 * get the shape of array
 * @param arr
 * @returns
 */
export const getArrayShape = (arr: any[]) => {
    const shape: number[] = [];

    while (Array.isArray(arr)) {
        shape.push(arr.length);
        arr = arr[0];
    }

    return shape;
}

/**
 * Move axis
 * @param array
 * @param from
 * @param to
 * @returns
 */
export const moveAxis = <T>(array: T[][][], from: number, to: number): T[][][] => {
    const shape = getArrayShape(array);

    // Validate axis positions
    if (from < 0 || from >= shape.length || to < 0 || to >= shape.length) {
        throw new Error("Invalid axis positions");
    }

    // Create the new axes order
    const axes = Array.from({ length: shape.length }, (_, i) => i);
    axes.splice(to, 0, axes.splice(from, 1)[0]); // Move axis from 'from' to 'to'

    return transpose(array, axes);
}

const transpose = <T>(array: T[][][], axes: number[]): T[][][] => {
    const result: any[] = createEmptyArray(array, axes);
    const dimCount = axes.length;

    function recursiveTranspose(src: any[], dest: any[], currentAxes: number[], depth: number) {
        const axis = currentAxes[depth];

        // Iterate over the source array according to the current axis
        for (let i = 0; i < src.length; i++) {
            const index = getIndexForAxis(i, currentAxes, depth);

            if (depth === dimCount - 1) {
                // Assign the final axis values directly
                dest[index] = src[i];
            } else {
                // Ensure the destination is an array at this depth
                dest[index] = dest[index] || createEmptyArrayForAxis(array, axes, depth + 1);
                recursiveTranspose(src[i], dest[index], currentAxes, depth + 1);
            }
        }
    }

    recursiveTranspose(array, result, axes, 0);
    return result;
}

const createEmptyArray = <T>(array: T[][][], axes: number[]): T[][][] => {
    const shape = axes.map(axis => getDimensionSize(array, axis));
    return createNestedArray<T>(shape);
}

const createEmptyArrayForAxis = <T>(array: T[][][], axes: number[], depth: number): any[] => {
    const size = getDimensionSize(array, axes[depth]);
    return Array.from({ length: size }, () => createEmptyArrayForAxis(array, axes, depth + 1));
}

const getDimensionSize = (array: any[], axis: number): number => {
    return array.map(arr => Array.isArray(arr) ? arr.length : 0).reduce((max, curr) => Math.max(max, curr), 0);
}

const createNestedArray = <T>(shape: number[]): any[] => {
    let arr: any = [];
    for (let i = 0; i < shape[0]; i++) {
        arr.push(shape.length > 1 ? createNestedArray(shape.slice(1)) : null);
    }
    return arr;
}

// Get the new index for the current axis position
const getIndexForAxis = (index: number, axes: number[], depth: number): number => {
    // Determine the new index based on the original index and the new axes order
    return index; // Implement your logic to map old index to new index
}
