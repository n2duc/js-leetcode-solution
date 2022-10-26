const rotateImage = (matrix) => {
    let n = matrix.length
    let mid = n/2
    let temp
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n && i != j; j++) {
            temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
    console.log(matrix)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < mid; j++) {
            temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-j-1]
            matrix[i][n-j-1] = temp
        }
    }
}
const matrix = [[1,2,3], [4,5,6], [7,8,9]]
rotateImage(matrix)
//1,2,3 -> 1,4,7 -> 7,4,1
//4,5,6 -> 2,5,8 -> 8,5,2
//7,8,9 -> 3,6,9 -> 9,6,3
console.log(matrix)