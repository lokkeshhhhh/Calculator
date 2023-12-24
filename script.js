


// Whole Calculator code in a variable
    let calculatorCode = `<div class="calculator">


        <div class="display">
            <input type="text" id="display" readonly placeholder="0">
        </div>

        <div class="buttons">
            <button onclick="clearDisplay()" id="ac">AC</button>
            <button onclick="deleteChar()" id="ac-1">⌫</button>
            <button onclick="addCharOperator('.')">.</button>
            <button onclick="addCharOperator('/')" id="operator">/</button>
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
            <button onclick="addCharOperator('00')" >00</button>
            <button onclick="someMaths()" id="operator">=</button>
            
        </div>
    </div>

    <div class="credit">
        <h3 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Made BY <a href="https://www.linkedin.com/in/lokesh-kumawat-1b1692280/" style="text-decoration: none;color: #03313b;">Lokesh
                Kumawat</a></h3>
    </div>`;


// change body's innerHTML form lord icon to  calculator after 2secs
    setTimeout(() => {
        document.body.innerHTML = calculatorCode;
    }, 2000)




/* "Additionally, we can set the container's and credit's display to 'none,' 
    and the icon's and credit-1's display to 'block.' After a 2-second delay(setTimeout function),
    we can change the display property from 'none' to 'block' and 'block' to 'none.'" 
    like this -

        setTimeout(() => {
        document.getElementById("credit-1").style.display = "none";
        document.getElementById("icon").style.display = "none";

        document.getElementById("credit").style.display = "block";
        document.getElementById("calculator").style.display = "block";
    }, 2000)
    
    */



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

        if(stringValue == "Syntax Error"){
            document.getElementById('display').value = '0';
        }
    }
    


// Calculate via eval method if there is not any error
    function someMaths() {
        
        try{
            const stringValue = document.getElementById('display').value;

            let arrayValue;
            let joined;
            
            if(stringValue.includes('+')){
                arrayValue = stringValue.split("+");
                joined = '+';
            } else if(stringValue.includes('-')){
                arrayValue = stringValue.split("-");
                joined = '-';
            }else if(stringValue.includes('*')){
                arrayValue = stringValue.split("*");
                joined = '*';
            }else{
                arrayValue = stringValue.split("/");
                joined = '/';
            }

            const newArrayValue = arrayValue.map((element) => {
                return element.replace(/^0+/,"");
            })

            const reString = newArrayValue.join(joined);
            
            const result = eval(reString);
            console.log(reString);
            
            document.getElementById('display').value = result;
        }catch(error){
            document.getElementById('display').value = "Syntax Error";
        }

        if(document.getElementById('display').value == 'undefined'){
            document.getElementById('display').value = "0";
        }
    }




    // Method 2nd--- (will added soon... -coz use of eval is not a good practice.)


    // function someMaths() {

    // }

