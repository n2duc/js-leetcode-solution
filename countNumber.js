//Method 1 - Simple method
const countNumer = (arr) => {
    let n = arr.length
    let tempArr = []
    let max = arr[0]
    //Tim phan tu lon nhat trong mang de khoi tao do dai cua mang tempArr[]
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    //Gan gia tri bang 0 cho cac phan tu cua mang tempArr[]
    for (let i = 0; i <= max; i++) {
        tempArr[i] = 0;
    }
    //Neu arr[i] co trong tempArr[] thi cong them 1
    for (let i = 0; i < n; i++) {
        tempArr[arr[i]] += 1
    }
    for (let i = 0; i <= max; i++) {
        if (tempArr[i] > 0) {
            console.log(i + ' - ' + tempArr[i])
        }
    }
}
const arr = [1,1,2,2,2,3,4,4,5]
countNumer(arr)
