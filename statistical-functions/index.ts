export const median = (array: any, axis = -1) => {
    const calculateMedian = (raw: any) => {
        const sortedArray = raw.slice().sort((a: number, b: number) => a - b);
        const middleIndex = Math.floor(sortedArray.length / 2);

        if (sortedArray.length % 2 === 0) {
            return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2.0;
        } else {
            return parseFloat(sortedArray[middleIndex]);
        }
    }
    if (axis === 0) {
        // Calculate median along the vertical axis (columns)
        const numCols = array[0].length;
        const result = [];

        for (let col = 0; col < numCols; col++) {
            const column = array.map((row: any[]) => row[col]);
            const median = calculateMedian(column);
            result.push(median);
        }

        return result;
    } else if (axis === 1) {
        // Calculate median along the horizontal axis (rows)
        return array.map((row: any) => {
            const median = calculateMedian(row);
            return median;
        });
    } else {
        // Calculate the median of the entire array
        const flatArr = array.flat()
        const median = calculateMedian(flatArr);
        return median
    }
}

export const mean = (array: any[], axis = -1) => {
    const calculateMean = (raw: any[]) => {
        const sum = raw.reduce((acc: any, val: any) => acc + val, 0);
        return sum / raw.length;
    };

    if (axis === 0) {
        // Calculate mean along the vertical axis (columns)
        const numCols = array[0].length;
        const result = [];

        for (let col = 0; col < numCols; col++) {
            const column = array.map((row: any[]) => row[col]);
            const mean = calculateMean(column);
            result.push(mean);
        }

        return result;
    } else if (axis === 1) {
        // Calculate mean along the horizontal axis (rows)
        return array.map((row: any) => {
            const mean = calculateMean(row);
            return mean;
        });
    } else {
        // Calculate the mean of the entire array
        const flatArr = array.flat();
        const mean = calculateMean(flatArr);
        return mean;
    }
};

export const standardDeviation = (array: any[], axis = -1) => {
    const calculateMean = (raw: any[]) => {
        const sum = raw.reduce((acc: any, val: any) => acc + val, 0);
        return sum / raw.length;
    };

    const calculateVariance = (raw: any[], mean: number) => {
        const squaredDifferences = raw.map((val: number) => Math.pow(val - mean, 2));
        const sumSquaredDifferences = squaredDifferences.reduce((acc: any, val: any) => acc + val, 0);
        return sumSquaredDifferences / raw.length;
    };

    if (axis === 0) {
        // Calculate standard deviation along the vertical axis (columns)
        const numCols = array[0].length;
        const result = [];

        for (let col = 0; col < numCols; col++) {
            const column = array.map((row: any[]) => row[col]);
            const mean = calculateMean(column);
            const variance = calculateVariance(column, mean);
            const stdDev = Math.sqrt(variance);
            result.push(stdDev);
        }

        return result;
    } else if (axis === 1) {
        // Calculate standard deviation along the horizontal axis (rows)
        return array.map((row: any) => {
            const mean = calculateMean(row);
            const variance = calculateVariance(row, mean);
            const stdDev = Math.sqrt(variance);
            return stdDev;
        });
    } else {
        // Calculate the standard deviation of the entire array
        const flatArr = array.flat();
        const mean = calculateMean(flatArr);
        const variance = calculateVariance(flatArr, mean);
        const stdDev = Math.sqrt(variance);
        return stdDev;
    }
};

export const percentile = (array: any[], percentile: any, axis = -1) => {

    const calculatePercentile = (array: any[], percentile: number) => {
        const sortedArray = array.slice().sort((a: number, b: number) => a - b);
        const index = (percentile / 100) * (sortedArray.length - 1);
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);

        if (lowerIndex === upperIndex) {
            return sortedArray[lowerIndex];
        } else {
            const lowerValue = sortedArray[lowerIndex];
            const upperValue = sortedArray[upperIndex];
            const fractionalPart = index - lowerIndex;
            return lowerValue + (upperValue - lowerValue) * fractionalPart;
        }
    };
    if (axis === 0) {
        // Calculate percentile along the vertical axis (columns)
        const numCols = array[0].length;
        const result = [];

        for (let col = 0; col < numCols; col++) {
            const column = array.map((row: any[]) => row[col]);
            const perc = calculatePercentile(column, percentile);
            result.push(perc);
        }

        return result;
    } else if (axis === 1) {
        // Calculate percentile along the horizontal axis (rows)
        return array.map((row: any) => calculatePercentile(row, percentile));
    } else {
        // Calculate percentile of the entire array
        const flatArr = array.flat();
        return calculatePercentile(flatArr, percentile);
    }
};

export const interpolate = (x: number | number[], xData: number[], yData: number[]) => {

    if (Array.isArray(x)) {
        // If x is an array, calculate interpolated values for each element
        const interpolatedValues = [];

        for (const element of x) {
            const xValue = element;

            if (xValue <= xData[0]) {
                // If x is less than or equal to the first element of xData
                interpolatedValues.push(yData[0]);
            } else if (xValue >= xData[xData.length - 1]) {
                // If x is greater than or equal to the last element of xData
                interpolatedValues.push(yData[yData.length - 1]);
            } else {
                // Perform linear interpolation for values within xData bounds
                let index = -1;

                // Find the index where x should be inserted in xData to maintain sorted order
                for (let j = 0; j < xData.length - 1; j++) {
                    if (xValue >= xData[j] && xValue <= xData[j + 1]) {
                        index = j;
                        break;
                    }
                }

                if (index !== -1) {
                    // Perform linear interpolation
                    const x0 = xData[index];
                    const x1 = xData[index + 1];
                    const y0 = yData[index];
                    const y1 = yData[index + 1];
                    const interpolatedValue = y0 + ((xValue - x0) * (y1 - y0)) / (x1 - x0);
                    interpolatedValues.push(interpolatedValue);
                }
            }
        }

        return interpolatedValues;
    } else {
        // If x is a single value, calculate the interpolated value for it
        const xValue = x
        if (xValue <= xData[0]) {
            // If x is less than or equal to the first element of xData
            return yData[0];
        } else if (xValue >= xData[xData.length - 1]) {
            // If x is greater than or equal to the last element of xData
            return yData[yData.length - 1];
        } else {

            let index = -1;

            // Find the index where x should be inserted in xData to maintain sorted order
            for (let i = 0; i < xData.length - 1; i++) {
                if (x >= xData[i] && x <= xData[i + 1]) {
                    index = i;
                    break;
                }

            }

            if (index !== -1) {
                // Perform linear interpolation
                const x0 = xData[index];
                const x1 = xData[index + 1];
                const y0 = yData[index];
                const y1 = yData[index + 1];
                return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
            }
        }
    }
};