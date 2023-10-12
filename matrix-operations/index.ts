export const eye = (size: number) => {
  const identityMatrix: any[] = [];
  for (let i = 0; i < size; i++) {
    const row: number[] = Array(size).fill(0);
    row[i] = 1;
    identityMatrix.push(row);
  }
  return identityMatrix;
}

export const transpose = (matrix: any[]) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize an empty matrix to store the transpose
  const transposed = new Array(numCols);

  for (let col = 0; col < numCols; col++) {
    // Initialize each column in the transposed matrix
    transposed[col] = new Array(numRows);

    for (let row = 0; row < numRows; row++) {
      // Swap rows and columns
      transposed[col][row] = matrix[row][col];
    }
  }

  return transposed;
}

export const add = (matrix1: any[],matrix2: any[]) => {
  const numRows = matrix1.length;
  const numCols = matrix1[0].length;

  // Initialize a result matrix with the same dimensions
  const result = new Array(numRows);

  for (let row = 0; row < numRows; row++) {
    result[row] = new Array(numCols);

    for (let col = 0; col < numCols; col++) {
      // Add corresponding elements from both matrices
      result[row][col] = matrix1[row][col] + matrix2[row][col];
    }
  }

  return result;
}

export const matrixMultiply = (matrix1: any[],matrix2: any[]) => {
  const numRows1 = matrix1.length;
  const numCols1 = matrix1[0].length;
  const numRows2 = matrix2.length;
  const numCols2 = matrix2[0].length;

  if (numCols1 !== numRows2) {
    throw new Error('Matrix dimensions are not compatible for multiplication.');
  }

  const result = new Array(numRows1);

  for (let i = 0; i < numRows1; i++) {
    result[i] = new Array(numCols2);

    for (let j = 0; j < numCols2; j++) {
      result[i][j] = 0;

      for (let k = 0; k < numCols1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

export const determinant = (matrix: any[]) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  if (numRows !== numCols) {
    throw new Error('The matrix must be square to calculate the determinant.');
  }

  if (numRows === 2 && numCols === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let col = 0; col < numCols; col++) {
    const minorMatrix = new Array(numRows - 1);
    for (let i = 0; i < numRows - 1; i++) {
      minorMatrix[i] = new Array(numCols - 1);
    }

    for (let row = 1; row < numRows; row++) {
      for (let j = 0, k = 0; j < numCols; j++) {
        if (j !== col) {
          minorMatrix[row - 1][k++] = matrix[row][j];
        }
      }
    }

    const sign = col % 2 === 0 ? 1 : -1;
    det += sign * matrix[0][col] * determinant(minorMatrix);
  }

  return det;
}