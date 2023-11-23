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

export const rand = (param1: number, param2?: number) => {
    if (param2 === undefined) {
        const randomArray = [];
        for (let i = 0; i < param1; i++) {
            randomArray.push(Math.random());
        }
        return randomArray;
    } else if (param2 !== undefined) {
        const rows = param1;
        const cols = param2;
        const randomMatrix = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(Math.random());
            }
            randomMatrix.push(row);
        }
        return randomMatrix;
    } else {
        throw new Error("Invalid number of parameters. Use 1 or 2 parameters.");
    }
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

export const randInt = (min: number, max: number, rows?: number, cols?: number) => {
    if (rows === undefined && cols === undefined) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (rows !== undefined && cols === undefined) {
        const randomArray = [];
        for (let i = 0; i < rows; i++) {
            const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            randomArray.push(randomInt);
        }
        return randomArray;
    }
    else if (rows !== undefined && cols !== undefined) {
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
    else {
        throw new Error("Invalid number of parameters. Use 1 or 2 parameters.");
    }
}