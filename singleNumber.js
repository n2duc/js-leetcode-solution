const singleNumber = (nums) => {
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        num ^= nums[i]
        console.log(i+'. '+num)
    }
    return num
}

const nums = [4,1,2,1,2]
console.log(singleNumber(nums))
let a = 5
let b = 3
//5 => 00000101
//3 => 00000011
// ----00000110 = 6 (0x2^0 + 1x2^1 + 1x2^2)
console.log(a^b) // result = 6
