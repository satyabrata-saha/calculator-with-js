const outputResultDisplay = document.getElementById("output-result-display");
const outputResultDisplaySpan = document.getElementById("output-result-display-span");
const clearOutput = document.getElementById("clearOutput");
const equal = document.getElementById("equal");
const btns = document.querySelectorAll(".btn");

let textOutput1 = "";
let textOutput2 = "";
let dotoparetor = "";
let inputoparator = "";

let outputDisplaySpan = "";


btns.forEach(btn => {
    btn.addEventListener('click', output);
    function output() {

        if (inputoparator) {
            //numbers
            if (btn.value == "0") {
                textOutput2 += "0";
                outputResultDisplay.textContent += "0";
                outputDisplaySpan += "0";
            }
            if (btn.value == "1") {
                textOutput2 += "1"
                outputResultDisplay.textContent += "1";
                outputDisplaySpan += "1";
            }
            if (btn.value == "2") {
                textOutput2 += "2"
                outputResultDisplay.textContent += "2";
                outputDisplaySpan += "2";
            }
            if (btn.value == "3") {
                textOutput2 += "3"
                outputResultDisplay.textContent += "3";
                outputDisplaySpan += "3";
            }
            if (btn.value == "4") {
                textOutput2 += "4"
                outputResultDisplay.textContent += "4";
                outputDisplaySpan += "4";
            }
            if (btn.value == "5") {
                textOutput2 += "5"
                outputResultDisplay.textContent += "5";
                outputDisplaySpan += "5";
            }
            if (btn.value == "6") {
                textOutput2 += "6"
                outputResultDisplay.textContent += "6";
                outputDisplaySpan += "6";
            }
            if (btn.value == "7") {
                textOutput2 += "7"
                outputResultDisplay.textContent += "7";
                outputDisplaySpan += "7";
            }
            if (btn.value == "8") {
                textOutput2 += "8"
                outputResultDisplay.textContent += "8";
                outputDisplaySpan += "8";
            }
            if (btn.value == "9") {
                textOutput2 += "9"
                outputResultDisplay.textContent += "9";
                outputDisplaySpan += "9";
            }
            if (btn.value == ".") {
                if (dotoparetor) {
                    return
                } else {
                    dotoparetor = ".";
                    textOutput2 += ".";
                    outputResultDisplay.textContent += ".";
                    outputDisplaySpan += ".";
                }
            }

            outputResultDisplaySpan.textContent = outputDisplaySpan;
            // console.log("text 2 -> " + textOutput2);
        } else {
            //numbers
            if (btn.value == "0") {
                textOutput1 += "0"
                outputResultDisplay.textContent += "0";
                outputDisplaySpan += "0";
            }
            if (btn.value == "1") {
                textOutput1 += "1"
                outputResultDisplay.textContent += "1";
                outputDisplaySpan += "1";
            }
            if (btn.value == "2") {
                textOutput1 += "2"
                outputResultDisplay.textContent += "2";
                outputDisplaySpan += "2";
            }
            if (btn.value == "3") {
                textOutput1 += "3"
                outputResultDisplay.textContent += "3";
                outputDisplaySpan += "3";
            }
            if (btn.value == "4") {
                textOutput1 += "4"
                outputResultDisplay.textContent += "4";
                outputDisplaySpan += "4";
            }
            if (btn.value == "5") {
                textOutput1 += "5"
                outputResultDisplay.textContent += "5";
                outputDisplaySpan += "5";
            }
            if (btn.value == "6") {
                textOutput1 += "6"
                outputResultDisplay.textContent += "6";
                outputDisplaySpan += "6";
            }
            if (btn.value == "7") {
                textOutput1 += "7"
                outputResultDisplay.textContent += "7";
                outputDisplaySpan += "7";
            }
            if (btn.value == "8") {
                textOutput1 += "8"
                outputResultDisplay.textContent += "8";
                outputDisplaySpan += "8";
            }
            if (btn.value == "9") {
                textOutput1 += "9"
                outputResultDisplay.textContent += "9";
                outputDisplaySpan += "9";
            }
            if (btn.value == ".") {

                if (dotoparetor) {
                    return
                } else {
                    dotoparetor = ".";
                    textOutput1 += ".";
                    outputResultDisplay.textContent += ".";
                    outputDisplaySpan += ".";
                }
            }

            outputResultDisplaySpan.textContent = outputDisplaySpan;
            // console.log("text 1 -> " + textOutput1);
        }

        //oparators
        if (btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/") {

            if (inputoparator) {
                alert("you already add operator " + inputoparator);

            } else {
                inputoparator = btn.value;
                outputResultDisplay.textContent = Number(0);
                dotoparetor = "";
                outputDisplaySpan += btn.value;
                outputResultDisplaySpan.textContent = outputDisplaySpan;
                // console.log(inputoparator);
            }

        }

        if (textOutput1.toString().length <= 8) {
            outputResultDisplay.style.fontSize = "48px";
        }
        if (textOutput1.toString().length > 8 && textOutput1.toString().length <= 21) {
            outputResultDisplay.style.fontSize = "40px";
        }
        if (textOutput1.toString().length > 21 && textOutput1.toString().length <= 28) {
            outputResultDisplay.style.fontSize = "30px";
        }
        if (textOutput1.toString().length > 28 && textOutput1.toString().length <= 36) {
            outputResultDisplay.style.fontSize = "24px";
        }
        if (textOutput1.toString().length > 36 && textOutput1.toString().length <= 55) {
            outputResultDisplay.style.fontSize = "20px";
        }
        if (textOutput1.toString().length > 55) {
            outputResultDisplay.style.fontSize = "14px";
        }

    }

});

clearOutput.addEventListener('click', clearOutputText);
function clearOutputText() {
    outputResultDisplay.textContent = Number(0);
    textOutput1 = "";
    textOutput2 = "";
    dotoparetor = "";
    inputoparator = "";
    outputDisplaySpan = "";
    outputResultDisplaySpan.textContent = outputDisplaySpan;
    outputResultDisplay.style.fontSize = "48px";
}

equal.addEventListener('click', equalOutputText);
function equalOutputText() {

    let result;

    // console.log(textOutput1);
    // console.log(textOutput2);
    // console.log(inputoparator);

    if (inputoparator == "+") {
        result = Number(textOutput1) + Number(textOutput2);
    } if (inputoparator == "-") {
        result = Number(textOutput1) - Number(textOutput2);
    } if (inputoparator == "*") {
        result = Number(textOutput1) * Number(textOutput2);
    } if (inputoparator == "/") {
        result = Number(textOutput1) / Number(textOutput2);
    }


    if (result.toString().length <= 9) {
        outputResultDisplay.style.fontSize = "48px";
    }
    if (result.toString().length > 9 && result.toString().length <= 18) {
        outputResultDisplay.style.fontSize = "40px";
    }
    if (result.toString().length > 18) {
        outputResultDisplay.style.fontSize = "36px";
    }

    outputResultDisplay.textContent = result;
    outputDisplaySpan = result;
    outputResultDisplaySpan.textContent = outputDisplaySpan;



    textOutput1 = result;
    textOutput2 = "";
    inputoparator = "";

}