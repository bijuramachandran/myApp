var module = angular.module("calculatorApp",[]);
module.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl() {
   this.num1 = "";
   this.num2 = "";
   this.operationSelected=""

   this.buttonClicked = function(button) { this.operationSelected = button;}

   this.calc = function() {
	var oper = this.operationSelected;

	var a = parseFloat(this.num1);
        var b = parseFloat(this.num2);

        if ( oper == "+" ) {
		this.result = a + b;
	} else if ( oper == "-" ) {
		this.result = a - b;
        } else if ( oper == "/" ) {
		this.result = a / b;
	} else if ( oper == "*" ) {
		this.result = a * b;
	}
   }
}
