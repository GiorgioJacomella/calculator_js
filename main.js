var input_01 = document.getElementById("input_01");
var input_02 = document.getElementById("input_02");
var form = document.getElementById("form");
var results = document.getElementById("results");

//addition function
function add_inputs(input_01, input_02) {
    var add_return = parseFloat(input_01) + parseFloat(input_02);
    return add_return;
}

// Subtraction function
function sub_inputs(input_01, input_02) {
    var sub_return = parseFloat(input_01) - parseFloat(input_02);
    return sub_return;
}

//multiplication function
function mul_inputs(input_01, input_02) {
    var mul_return = parseFloat(input_01) * parseFloat(input_02);
    return mul_return;
}

//division function
function div_inputs(input_01, input_02) {
    var div_return = parseFloat(input_01) / parseFloat(input_02);
    return div_return;
}

function main(event, input_01, input_02) {
    event.preventDefault();
    var add = add_inputs(input_01, input_02);
    var sub = sub_inputs(input_01, input_02);
    var mul = mul_inputs(input_01, input_02);
    var div = div_inputs(input_01, input_02);
    results.textContent = `Addition: ${add} | Subtraction: ${sub} | Multiplication: ${mul} | Division ${div}`;
}
 
form.addEventListener("submit", function(event) {
    main(event, input_01.value, input_02.value);
});