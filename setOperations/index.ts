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
