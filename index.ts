import { union, intersect, setDiff, setXOR, eleConcat, repeatEle, centerEle, upperCase } from "./setOperations"
import { median, mean, standardDeviation, percentile, interpolate } from "./statistical-functions"
import { arange, zeros, ones, full, random, rand, randInt } from "./array-utility"
import { eye, transpose, add, matrixMultiply, determinant } from "./matrix-operations"

const MathsUtility = {
    array: (arr: any) => arr,
    union: (arr1: number[], arr2: number[]) => union(arr1, arr2),
    intersect: (arr1: number[], arr2: number[]) => intersect(arr1, arr2),
    setDiff: (arr1: number[], arr2: number[]) => setDiff(arr1, arr2),
    setXOR: (arr1: number[], arr2: number[]) => setXOR(arr1, arr2),
    eleConcat: (arr1: string[], arr2: string[]) => eleConcat(arr1, arr2),
    repeatEle: (arr: string[], repeatCount: number) => repeatEle(arr, repeatCount),
    centerEle: (arr: string[], width: number, padChar: string) => centerEle(arr, width, padChar),
    upperCase: (arr: string[]) => upperCase(arr),
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