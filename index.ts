import { union, intersect, setDiff, setXOR } from "./setOperations"
import { median, mean, standardDeviation, percentile, interpolate } from "./statistical-functions"
import { arange, zeros, ones, full, random, rand, randInt } from "./array-utility"
import { eye, transpose, add, matrixMultiply, determinant } from "./matrix-operations"

const MathsUtility = {
    array: (arr: any) => arr,
    union: <T>(arr1: T[], arr2: T[]): T[] => {
        try {
            return union(arr1, arr2);
        } catch (error) {
            throw new Error(`Union operation failed: ${(error as Error).message}`);
        }
    },
    intersect: <T>(arr1: T[], arr2: T[]) => {
        try {
            return intersect(arr1, arr2);
        } catch (error) {
            throw new Error(`Intersect operation failed: ${(error as Error).message}`);
        }
    },
    setDiff: <T>(arr1: T[], arr2: T[]) => {
        try {
            return setDiff(arr1, arr2);
        } catch (error) {
            throw new Error(`SetDifference operation failed: ${(error as Error).message}`);
        }
    },
    setXOR: <T>(arr1: T[], arr2: T[]) => {
        try {
            return setXOR(arr1, arr2);
        } catch (error) {
            throw new Error(`SetXOR operation failed: ${(error as Error).message}`);
        }
    },
    median: (arr: any, axis?: number) => median(arr, axis),
    mean: (arr: any, axis?: number) => mean(arr, axis),
    std: (arr: any, axis?: number) => standardDeviation(arr, axis),
    percentile: (arr: any, percent: number, axis?: number) => percentile(arr, percent, axis),
    interp: (input: number | number[], arr1: number[], arr2: number[]) => interpolate(input, arr1, arr2),
    arange: (start: number, end: number, step: number) => arange(start, end, step),
    zeros: (rows: number, cols: number) => zeros(rows, cols),
    ones: (rows: number, cols: number) => ones(rows, cols),
    full: (rows: number, cols: number, fillValue: number) => full(rows, cols, fillValue),
    random: {
        rand: (param1: number, param2?:number) => rand(param1, param2),
        random: (rows: number, cols: number) => random(rows, cols),
        randInt: (min: number, max: number, rows?: number, cols?: number) => randInt(min, max, rows, cols),
    },
    eye: (size: number) => eye(size),
    transpose: (matrix: any[]) => transpose(matrix),
    add: (matrix1: any[], matrix2: any[]) => add(matrix1, matrix2),
    dot: (matrix1: any[], matrix2: any[]) => matrixMultiply(matrix1, matrix2),
    linalg: {
        det: (matrix: any[]) => determinant(matrix),
    }
}

export default MathsUtility