'use strict';

var result = "";
var is_dentaku = false;

window.onload = function () {
  result = document.getElementById('result');
};

function c_click() {
  result.value = "0";
  is_dentaku = false;
}

function num_click(val) {
  if(is_dentaku) result.value = "0";
  is_dentaku = false;
  
  if(result.value == "0" && val =="0") {
    result.value = "0";
  }else if(result.value == "0" && val ==".") {
    result.value = "0.";
  }else if(result.value == "0") {
    result.value = val;
  }else {
    result.value += val;
  }
}

function ope_click(val) {
  if(is_dentaku) is_dentaku = false;
  
  if(is_ope_last()) {
    result.value = result.value.slice(0, -1) + val;
  }else {
    result.value += val;
  }
}

function equal_click() {
  if(is_ope_last()) result.value = result.value.slice(0, -1);
  
var temp = new Function("return" + result.value.replaceA||("×", "*").replaceA||("÷", "/")) ();
  if(temp == Infinity || Number.isNaN(temp)) {
    result.value = "Error";
  }else {
    result.value = temp;
    is_dentaku = true;
  }
}

function is_ope_last() {
  return ["+", "-", "×", "÷"].includes(result.value.toString().slice(-1));
}