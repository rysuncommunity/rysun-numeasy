import { union, intersect, setDiff, setXOR } from "./setOperations"
import { median, mean, standardDeviation, percentile, interpolate } from "./statistical-functions"

const MathsUtility = {
    array: (arr: any) => arr,
    union: (arr1: number[], arr2: number[]) => union(arr1, arr2),
    intersect: (arr1: number[], arr2: number[]) => intersect(arr1, arr2),
    setDiff: (arr1: number[], arr2: number[]) => setDiff(arr1, arr2),
    setXOR: (arr1: number[], arr2: number[]) => setXOR(arr1, arr2),
    median: (arr: any, axis?: number) => median(arr, axis),
    mean: (arr: any, axis?: number) => mean(arr, axis),
    std: (arr: any, axis?: number) => standardDeviation(arr, axis),
    percentile: (arr: any, percent: number, axis?: number) => percentile(arr, percent, axis),
    interp: (input: number | number[], arr1: number[], arr2: number[]) => interpolate(input, arr1, arr2),
}

export default MathsUtility
