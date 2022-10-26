const deleteDuplicates = (head) => {
    let arr = []
    let n = head.length
    let currentIndex = 0
    for (let i = 0; i < n; i++) {
        if (head[i] != head[currentIndex]) {
            currentIndex++
            head[currentIndex] = head[i]
        }
    }
    for (let i = 0; i < currentIndex+1; i++) {
        arr.push(head[i])
    }
    return arr
}
//Cach 2 nhung bi TLE
const temp = (array) => {
    let result = [];
    result = array.filter(function(element){
        return result.includes(element) ? '' : result.push(element)
    });
    return result
}
let array = [0,1,1,2,3,3,4,5,5,5,6]
console.log(temp(array))
console.log(deleteDuplicates(array))
