const outputResultDisplay = document.getElementById("output-result-display");
const clearOutput = document.getElementById("clearOutput");
const equal = document.getElementById("equal");
const btns = document.querySelectorAll(".btn");

let textOutput1 = Number();

btns.forEach(btn => {
    btn.addEventListener('click', output);
    function output() {

        //numbers
        if (btn.value == "1") {
            outputResultDisplay.textContent += Number(1);
            textOutput1 += Number(1);
            console.log(btn.value);
        }
        if (btn.value == "2") {
            outputResultDisplay.textContent += Number(2);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "3") {
            outputResultDisplay.textContent += Number(3);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "4") {
            outputResultDisplay.textContent += Number(4);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "5") {
            outputResultDisplay.textContent += Number(5);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "6") {
            outputResultDisplay.textContent += Number(6);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "7") {
            outputResultDisplay.textContent += Number(7);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "8") {
            outputResultDisplay.textContent += Number(8);
            textOutput1 = Number(2)
            console.log(btn.value);
        }
        if (btn.value == "9") {
            outputResultDisplay.textContent += Number(9);
            textOutput1 = Number(2)
            console.log(btn.value);
        }

        //oparators
        // if (btn.value == "+") {
        //     outputResultDisplay.textContent += "+";
        //     textOutput1 += ;
        //     console.log(btn.value);
        // }
        // if (btn.value == "-") {
        //     outputResultDisplay.textContent += "-";
        //     textOutput1 =
        //         console.log(btn.value);
        // }
        // if (btn.value == "*") {
        //     outputResultDisplay.textContent += "*";
        //     textOutput1 =
        //         console.log(btn.value);
        // }
        // if (btn.value == "/") {
        //     outputResultDisplay.textContent += "/";
        //     textOutput1 =
        //         console.log(btn.value);
        // }

        // console.log(testOutput);
    }

});

clearOutput.addEventListener('click', clearOutputText);
function clearOutputText() {
    outputResultDisplay.textContent = Number(0);
}

equal.addEventListener('click', equalOutputText);
function equalOutputText() {
    console.log(typeof (textOutput1));


}