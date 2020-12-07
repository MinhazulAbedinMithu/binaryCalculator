var resultScreen = document.getElementById("output-screen");
        var operandOne = 0;
        var operator = "";
        //zero
        document.getElementById("zero").addEventListener("click", function(event) {
            resultScreen.innerText+="0";
        })
        //one
        document.getElementById("one").addEventListener("click", function(event) {
            resultScreen.innerText+="1";
        })
        //addition
        document.getElementById("addition").addEventListener("click", function(event) {
            operator = "+";
            operandOne = parseInt(resultScreen.innerText, 2);
            resultScreen.innerText += "+";
        });
        //subtraction
        document.getElementById("subtraction").addEventListener("click", function(event) {
            operator = "-";
            operandOne = parseInt(resultScreen.innerText, 2);
            resultScreen.innerText += "-";
        })
        //multiplication
        document.getElementById("multiplication").addEventListener("click", function(event) {
            operator = "*";
            operandOne = parseInt(resultScreen.innerText, 2);
            resultScreen.innerText += "*";
        })
        //divition
        document.getElementById("divition").addEventListener("click", function(event) {
            operator = "/";
            operandOne = parseInt(resultScreen.innerText, 2);
            resultScreen.innerText += "/";
        });
        // help function for equal
        function operation(operator) {
            var position = (resultScreen.innerText).indexOf(operator);
            var operandTwo = parseInt((resultScreen.innerText).substr(position+1), 2);
            return operandTwo;
        };
        //equal
        document.getElementById("equal").addEventListener("click", function(event){
            var result = 0;
            if(operator == "+"){
                var operandTwo = operation(operator);
                result = operandOne + operandTwo;
            }else if(operator == "-"){
                var operandTwo = operation(operator);
                result = operandOne - operandTwo;
            }else if(operator == "*"){
                var operandTwo = operation(operator);
                result = operandOne * operandTwo;
            }else if(operator == "/"){
                var operandTwo = operation(operator);
                result = operandOne / operandTwo;
            }
            resultScreen.innerText = result.toString(2);
        });
        //clear
        document.getElementById("clear").addEventListener("click", function(event) {
            resultScreen.innerText = "";
        })

        

        // //BinaryToDecimal
        // function binToDec(num) {
        //     let dec = 0; 
        //     for(let i = 0; i < num.length; i++) {
        //         if(num[num.length - (i + 1)] === '1') {
        //             dec += 2 ** i;
        //         }
        //     }
        //     return dec;
        // }