


// Whole Calculator code in a variable
    let calculatorCode = `<div class="calculator">


        <div class="display">
            <input type="text" id="display" readonly placeholder="_">
        </div>

        <div class="buttons">
            <button onclick="clearDisplay()" id="ac">AC</button>
            <button onclick="addCharOperator('.')">.</button>
            <button onclick="addCharOperator('/')">/</button>
            <button onclick="deleteChar()" id="operator">⌫</button>
            <br>
            <button onclick="addCharOperator('7')">7</button>
            <button onclick="addCharOperator('8')">8</button>
            <button onclick="addCharOperator('9')">9</button>
            <button onclick="addCharOperator('+')" id="operator">+</button>
            <br>
            <button onclick="addCharOperator('4')">4</button>
            <button onclick="addCharOperator('5')">5</button>
            <button onclick="addCharOperator('6')">6</button>
            <button onclick="addCharOperator('-')" id="operator">-</button>
            <br>
            <button onclick="addCharOperator('1')">1</button>
            <button onclick="addCharOperator('2')">2</button>
            <button onclick="addCharOperator('3')">3</button>
            <button onclick="addCharOperator('*')" id="operator">x</button>
            <br>
            <button onclick="addCharOperator('0')" id="zero">0</button>
            <button onclick="someMaths()" id="operator">=</button>
            
        </div>
    </div>

    <div class="credit">
        <h3 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Made BY <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" style="text-decoration: none;color: #03313b;">lokesh
                kumawat</a></h3>
    </div>`;


// change body's innerHTML form lord icon to  calculator after 2secs
    setTimeout(() => {
        document.body.innerHTML = calculatorCode;
    }, 2000)


// Add's numbers and operators in an string 
    function addCharOperator(char){
        document.getElementById('display').value += char;
    }


// clear the the input field with the is 'display' on 'AC' click
    function clearDisplay() {
        document.getElementById('display').value = '0';
    }


// Delete char from the display string
    function deleteChar(){
        const stringValue = document.getElementById('display').value;
        const arrayValue = stringValue.split("");

        arrayValue.pop();

        const reString = arrayValue.join("");

        document.getElementById('display').value = reString;

        if(stringValue == "Syntax Error" || stringValue == "undefined"){
            document.getElementById('display').value = '0';
        }
    }
    


// Calculate via eval method if there is not any error
    function someMaths() {
        try{
            const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        }catch(error){
            document.getElementById('display').value = "Syntax Error";
        }

        if(document.getElementById('display').value == 'undefined'){
            document.getElementById('display').value = "Syntax Error";
        }
    }



    // Method 2nd--- (will added soon... -coz use of eval is not a good practice.)


    // function someMaths() {

    // }

