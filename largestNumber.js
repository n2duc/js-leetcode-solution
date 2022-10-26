const largestNumber = (nums) => {
    let sorted = nums.sort((a, b) => {
        const ab = a.toString() + b.toString()
        console.log(ab)
        const ba = b.toString() + a.toString()
        console.log(ba)
        console.log(ba - ab)
        return ba - ab
    })

    const joined = sorted.join('')
    if(parseInt(joined) == 0) {
        return '0'
    } else {
        return joined
    }
}
let exp = [3, 9, 12, 5, 23]
console.log(largestNumber(exp))
console.log(typeof(largestNumber(exp)))