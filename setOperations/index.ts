export const union = <T>(arrA: T[], arrB: T[]): T[] => {  
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
        throw new Error('Union operation requires both inputs to be arrays.');
    }  

    try{
    const normalize = (value: T): T | number => {
        if (value === 0 || value === false) return 0;
        if (value === 1 || value === true) return 1;
        return value;
    };
   
    const arr1 = arrA.map(normalize).flat();
    const arr2 = arrB.map(normalize).flat();
    const resultSet = new Set([...arr1, ...arr2]);
  
    return Array.from(resultSet).sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else {
            return typeof a === 'number' ? -1 : 1;
        }
    }) as T[];
} catch (error) {
    throw new Error(`Failed to compute union: ${(error as Error).message}`);
}
}


export const intersect = <T>(arrA: T[], arrB: T[]): T[] => {    

    try {
            if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
                throw new TypeError('Both arguments must be arrays');
            }
        // Flatten both arrays to handle any level of nesting
        const arr1 = flatten(arrA);
        const arr2 = flatten(arrB);

        // Custom includes logic to handle 0/false and 1/true equivalence
        const customIncludes = (array: any[], element: any): boolean => {
            return array.some(item => {
                if ((item === 0 && element === false) || (item === false && element === 0) ||
                    (item === 1 && element === true) || (item === true && element === 1)) {
                    return true;
                }
                return item === element;
            });
        };

        // Filter elements from arr1 that are present in arr2 using custom comparison
        const result = arr1.filter((element) => customIncludes(arr2, element));

        // Remove duplicate elements from the result
        return [...new Set(result)];
    } catch (error) {
        console.error('Error in intersect function:', error);
        return [];
    }
};


export const setDiff = <T>(arrA: T[], arrB: T[]): T[] => {    
    try {
        if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
            throw new TypeError('Both arguments must be arrays');
        }
        // Flatten both arrays to handle any level of nesting
        const arr1 = flatten(arrA);
        const arr2 = flatten(arrB);
        // Filter elements from array arr1 that are present in array arr2
        const result = arr1.filter((element: any) => !arr2.includes(element));

        // Remove duplicate elements from the result
        return [...new Set(result)];
    } catch (error) {
        console.error('Error in setDiff function:', error);
        return [];
    }
}

export const setXOR = <T>(arrA: T[], arrB: T[]): T[] => {  
    try {
        if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
            throw new TypeError('Both arguments must be arrays');
        }
        // This Flatten both arrays to handle any level of nesting
        const arr1 = flatten(arrA);
        const arr2 = flatten(arrB);
        /* This Filter elements from arr1 that are not present in arr2,
        / and filter elements from arr2 that are not present in arr1 */
        const diff1 = arr1.filter((item: any) => !arr2.includes(item));
        const diff2 = arr2.filter((item: any) => !arr1.includes(item));

        // This Combine the differences and sort the result
        const result = [...diff1, ...diff2].sort((a, b) => a - b);

        return result
    } catch (error) {
        console.error('Error in setXOR function:', error);
        return [];
    }
}

// This is Helper function to recursively flatten arrays to any depth
const flatten = (arr: any[]): any[] => {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};