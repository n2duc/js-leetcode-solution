const mapping = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
    "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "Â": ".--.-", "Ê": "-..-.", "Ô": "---.",

    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    " ": "/",

    ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
    "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
    ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
    "\"": ".-..-.", "$": "...-..-", "@": ".--.-."
}
const textToMorse = () => {
    let text = document.getElementById("text").value
    let morse = document.querySelector(".morse")
    text = text.toUpperCase()

    let arr1 = text.split("")
    let arr2 = arr1.map(x => {
        if (mapping[x]) {
            return mapping[x]
        } else {
            return x
        }
    })
    let morseCode = arr2.join(" ")
    morse.innerHTML = `${morseCode}`
    console.log(morseCode)
    return morseCode
}
//Copy to clipboard
const copyClipboard = (idText) => {
    if (!idText) return

    let elementText = idText.innerText
    let inputElement = document.createElement('input')

    inputElement.setAttribute('value', elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy') //stupid
    inputElement.parentNode.removeChild(inputElement)
}
//Trigger a button click on enter
window.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        document.getElementById('convertBtn').click()
    }
})