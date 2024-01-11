// HTML:
// <input type="text" id="display" readonly>
// <button onclick="clearDisplay()">C</button>
// <button onclick="appendToDisplay('1')">1</button>
// <button onclick="appendToDisplay('2')">2</button>
// <button onclick="appendToDisplay('+')">+</button>
// <button onclick="calculate()">=</button>

let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
