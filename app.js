document.addEventListener("DOMContentLoaded", () => {
  const acBtn = document.querySelector("#ac");
  const screen1 = document.querySelector("#screen1");
  const screen2 = document.querySelector("#screen2");
  const equalBtn = document.querySelector("#equal");
  const delBtn = document.querySelector("#del");
  const dotBtn = document.querySelector("#dot");
  const operatorsBtn = document.querySelectorAll(".operators");
  const numbersBtn = document.querySelectorAll(".numbers");

  let number1 = [];
  let number2 = [];
  let str1;
  let str2;
  let var1;
  let var2;
  let result;
  let currentOperator = "";
  let currentNumber = "num1";

  function showNumbers() {
    str1 = number1.join(""); //arr -> string
    screen2.textContent = str1;
  }
  function showNumbers2() {
    str2 = number2.join("");
    screen2.textContent = str2;
  }

  //numbers buttons: when num btn is clicked, num1 or num2 wil be pushed
  for (let i = 0; i < numbersBtn.length; i++)
    (function (index) {
      if (index !== 9)
        numbersBtn[index].onclick = function () {
          if (currentNumber === "num1") {
            number1.push(index + 1);
            showNumbers();
            result = null;
          } else {
            number2.push(index + 1);
            showNumbers2();
          }
        };
      else
        numbersBtn[index].onclick = function () {
          if (currentNumber === "num1") {
            number1.push(0);
            showNumbers();
            result = null;
          } else {
            number2.push(0);
            showNumbers2();
          }
        };
    })(i);

  //operators buttons
  for (let i = 0; i < operatorsBtn.length; i++)
    (function (index) {
      if (operatorsBtn[index].textContent === "÷")
        operatorsBtn[index].onclick = function () {
          if (!number2.length) {
            if (result || result === 0) number1 = result.toString().split("");
            currentOperator = "÷";
            screen1.textContent = number1.join("").concat("÷");
            screen2.textContent = "";
            number2 = [];
            currentNumber = "num2";
          } else {
            equal();
            number1 = result.toString().split("");
            str1 = number1.join("");
            number2 = [];
            screen2.textContent = "";
            currentNumber = "num2";
            currentOperator = "÷";
            screen1.textContent = str1.concat(currentOperator);
          }
        };
      else if (operatorsBtn[index].textContent === "+")
        operatorsBtn[index].onclick = function () {
          if (!number2.length) {
            if (result || result === 0) number1 = result.toString().split("");
            screen1.textContent = number1.join("").concat("+");
            currentOperator = "+";
            screen2.textContent = "";
            number2 = [];
            currentNumber = "num2";
          } else {
            equal();
            number1 = result.toString().split("");
            str1 = number1.join("");
            number2 = [];
            screen2.textContent = "";
            currentNumber = "num2";
            currentOperator = "+";
            screen1.textContent = str1.concat(currentOperator);
          }
        };
      else if (operatorsBtn[index].textContent === "-")
        operatorsBtn[index].onclick = function () {
          if (!number2.length) {
            if (result || result === 0) number1 = result.toString().split("");
            currentOperator = "-";
            screen1.textContent = number1.join("").concat("-");
            screen2.textContent = "";
            number2 = [];
            currentNumber = "num2";
          } else {
            equal();
            number1 = result.toString().split("");
            str1 = number1.join("");
            number2 = [];
            screen2.textContent = "";
            currentNumber = "num2";
            currentOperator = "-";
            screen1.textContent = str1.concat(currentOperator);
          }
        };
      else if (operatorsBtn[index].textContent === "x")
        operatorsBtn[index].onclick = function () {
          if (!number2.length) {
            if (result || result === 0) number1 = result.toString().split("");
            currentOperator = "x";
            screen1.textContent = number1.join("").concat("x");
            screen2.textContent = "";
            number2 = [];
            currentNumber = "num2";
          } else {
            equal();
            number1 = result.toString().split("");
            str1 = number1.join("");
            number2 = [];
            screen2.textContent = "";
            currentNumber = "num2";
            currentOperator = "x";
            screen1.textContent = str1.concat(currentOperator);
          }
        };
    })(i);

  //equal
  function equal() {
    var1 = parseFloat(str1);
    var2 = parseFloat(str2);
    if (var1 || var1 === 0) {
      if (isNaN(var2)) {
        var2 = var1;
        str2 = var2.toString();
      }
      switch (currentOperator) {
        case "+":
          result = var1 + var2;
          break;
        case "-":
          result = var1 - var2;
          break;
        case "x":
          result = var1 * var2;
          break;
        case "÷":
          result = var1 / var2;
          break;
      }
    }
  }
  equalBtn.addEventListener("click", () => {
    if (currentOperator) {
      var1 = parseFloat(str1);
      var2 = parseFloat(str2);
      if (var1 || var1 === 0) {
        if (isNaN(var2)) {
          var2 = var1;
          str2 = var2.toString();
        }
        screen1.textContent = "";
        switch (currentOperator) {
          case "+":
            result = var1 + var2;
            break;
          case "-":
            result = var1 - var2;
            break;
          case "x":
            result = var1 * var2;
            break;
          case "÷":
            result = var1 / var2;
            break;
        }
        number1 = result.toString().split(""); //number -> arr
        showNumbers();
        number1 = []; //num1 = null but str1 = result
        number2 = [];
        currentNumber = "num1";
      }
    }
  });

  //AC button
  acBtn.addEventListener("click", () => {
    number1 = [];
    number2 = [];
    str1 = null;
    str2 = null;
    var1 = null;
    var2 = null;
    result = null;
    screen1.textContent = "";
    screen2.textContent = "";
    currentOperator = "";
    currentNumber = "num1";
  });

  //dot button
  dotBtn.addEventListener("click", () => {
    if (currentNumber === "num1") {
      number1.push(".");
      showNumbers();
    } else if (currentNumber === "num2") {
      number2.push(".");
      showNumbers2();
    }
  });

  //delete button
  delBtn.addEventListener("click", () => {
    if (currentNumber === "num1" && number1.length) {
      number1.pop();
      showNumbers();
    } else if (currentNumber === "num2" && number2.length) {
      number2.pop();
      showNumbers2();
    }
  });
});
