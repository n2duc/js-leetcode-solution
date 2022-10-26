console.log("Merge Sort")

const merge = (leftArr, rightArr) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]

        if (leftEl < rightEl) {
            output.push(leftEl)
            leftIndex++
        } else {
            output.push(rightEl)
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}
// console.log(merge([1, 3, 4], [2, 5]))

const mergeSort = (array) => {
    if ( array.length <= 1) {
        return array;
    }

    const midleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, midleIndex)
    const rightArr = array.slice(midleIndex)

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

// mergeSort([3, 2, 5, 1, 7])
const newArray = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
console.log(newArray)