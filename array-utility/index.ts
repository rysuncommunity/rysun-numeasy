export const arange = (start: number, end: number, step: number) => {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (_, index) => start + index * step);
}

export const zeros = (rows: number, cols: number) => {
    const zerosArray = [];
    for (let i = 0; i < rows; i++) {
        zerosArray.push(Array(cols).fill(0));
    }
    return zerosArray;
}

export const ones = (rows: number, cols: number) => {
    const zerosArray = [];
    for (let i = 0; i < rows; i++) {
        zerosArray.push(Array(cols).fill(1));
    }
    return zerosArray;
}

export const full = (rows: number, cols: number, fillValue: number) => {
    const zerosArray = [];
    for (let i = 0; i < rows; i++) {
        zerosArray.push(Array(cols).fill(fillValue));
    }
    return zerosArray;
}

export const rand = (length: number) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.random());
    }
    return randomArray;
}

export const random = (rows: number, cols: number) => {
    const randomArray = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.random());
        }
        randomArray.push(row);
    }
    return randomArray;
}

export const randInt = (min: number, max: number, rows: number, cols: number) => {
    const randomMatrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            row.push(randomInt);
        }
        randomMatrix.push(row);
    }
    return randomMatrix;
}