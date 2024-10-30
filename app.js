const outputResultDisplay = document.getElementById("output-result-display");
const clearOutput = document.getElementById("clearOutput");
const equal = document.getElementById("equal");
const btns = document.querySelectorAll(".btn");

let textOutput1;
let textOutput2;

let numOutput = Number(textOutput1) + Number(textOutput2);


btns.forEach(btn => {
    btn.addEventListener('click', output);
    function output() {

        //oparators
        if (btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/") {
            outputResultDisplay.textContent = Number(0);
            //numbers
            if (btn.value == "1") {
                outputResultDisplay.textContent += 1;
                textOutput2 += 1
            }
            if (btn.value == "2") {
                outputResultDisplay.textContent += 2;
                textOutput2 += 2
            }
            if (btn.value == "3") {
                outputResultDisplay.textContent += 3;
                textOutput2 += 3
            }
            if (btn.value == "4") {
                outputResultDisplay.textContent += 4;
                textOutput2 += 4
            }
            if (btn.value == "5") {
                outputResultDisplay.textContent += 5;
                textOutput2 += 5
            }
            if (btn.value == "6") {
                outputResultDisplay.textContent += 6;
                textOutput2 += 6
            }
            if (btn.value == "7") {
                outputResultDisplay.textContent += 7;
                textOutput2 += 7
            }
            if (btn.value == "8") {
                outputResultDisplay.textContent += 8;
                textOutput2 += 8
            }
            if (btn.value == "9") {
                outputResultDisplay.textContent += 9;
                textOutput2 += 9
            }
            if (btn.value == ".") {
                if (textOutput1.match(".")) {
                    console.log(" . clicked");
                } else {
                    outputResultDisplay.textContent += ".";
                    textOutput2 = ".";
                }
            }
            console.log(btn.value);
            console.log(textOutput2);
        } else {
            //numbers
            if (btn.value == "1") {
                outputResultDisplay.textContent += 1;
                textOutput1 += 1
            }
            if (btn.value == "2") {
                outputResultDisplay.textContent += 2;
                textOutput1 += 2
            }
            if (btn.value == "3") {
                outputResultDisplay.textContent += 3;
                textOutput1 += 3
            }
            if (btn.value == "4") {
                outputResultDisplay.textContent += 4;
                textOutput1 += 4
            }
            if (btn.value == "5") {
                outputResultDisplay.textContent += 5;
                textOutput1 += 5
            }
            if (btn.value == "6") {
                outputResultDisplay.textContent += 6;
                textOutput1 += 6
            }
            if (btn.value == "7") {
                outputResultDisplay.textContent += 7;
                textOutput1 += 7
            }
            if (btn.value == "8") {
                outputResultDisplay.textContent += 8;
                textOutput1 += 8
            }
            if (btn.value == "9") {
                outputResultDisplay.textContent += 9;
                textOutput1 += 9
            }
            if (btn.value == ".") {
                if (textOutput1.match(".")) {
                    console.log(" . clicked");
                } else {
                    outputResultDisplay.textContent += ".";
                    textOutput1 = ".";
                }
            }
            console.log(btn.value);
            console.log(textOutput1);
        }

    }

});

clearOutput.addEventListener('click', clearOutputText);
function clearOutputText() {
    outputResultDisplay.textContent = Number(0);
}

equal.addEventListener('click', equalOutputText);
function equalOutputText() {
    outputResultDisplay.textContent = numOutput;
    console.log(textOutput1);
    console.log(textOutput2);
    console.log(numOutput);
}