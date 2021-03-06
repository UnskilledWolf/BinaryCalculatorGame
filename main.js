const BINARY_DISPLAY = document.getElementById("binary")
const MAIN_INPUT = document.getElementById("main-input")
var currentNumber = [0, 0, 0, 0, 0]

window.onload = () =>
{
    MAIN_INPUT.focus();
    MAIN_INPUT.select();
    updateNumber()
}

MAIN_INPUT.addEventListener('keyup', (e) =>
{
    if (e.keyCode === 13) //Only respond to enter
    {
        //Clear Animation
        BINARY_DISPLAY.classList.remove("correct")
        MAIN_INPUT.classList.remove("incorrect")
        BINARY_DISPLAY.classList.remove("incorrect")

        e.preventDefault()

        //Validate Result
        if (e.target.value == readBinary(currentNumber))
        {
            e.target.value = ""
            updateNumber()

            BINARY_DISPLAY.classList.add("correct")
        }
        else 
        {
            MAIN_INPUT.classList.add("incorrect")
            BINARY_DISPLAY.classList.add("incorrect")
        }
    }
})

//Updates currentNumber and the display
function updateNumber()
{
    currentNumber = generateNumber()
    BINARY_DISPLAY.innerHTML = currentNumber.join(" ")
}

//Returns an array of 5 numbers (1s and 0s)
function generateNumber()
{
    return [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]
}

//Reads binary from a array of 1s and 0s. Returns a number
function readBinary(inp)
{
    var counter = 0

    inp.reverse().forEach((num, index) =>
    {
        counter += num * Math.pow(2, index)
    });

    return counter
}
