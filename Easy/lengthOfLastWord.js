const lengthOfLastWord = (s) => {
    const arr = s.trim().split(' ')
    return arr[arr.length - 1].length
}

console.log(lengthOfLastWord("Hello World!! This is not a test"))