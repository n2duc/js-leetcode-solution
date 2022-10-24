const evenNumber = (a) => {
    if (a % 2 === 0) return true
    return false
}
const numberOfSteps = (num) => {
    let step = 0;
    if (num == 0) return 0
    while (num > 0) {
        if (evenNumber(num)) {
            num /= 2
        } else {
            num -= 1
        }
        step++;
    }
    return step
};
console.log(numberOfSteps(8))
//8 / 2 = 4 => 1
//4 / 2 = 2 => 2
//2 / 2 = 1 => 3
//1 - 1 = 0 => 4