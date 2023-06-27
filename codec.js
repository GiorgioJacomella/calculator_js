// functions

//get elements for hex inputs
function hexCode() {
    var hexInput = document.getElementById("hexInput").value;
    var hexOutput = hex_code(hexInput);
    document.getElementById("hexOutput").textContent = hexOutput;
}

//hex coded function
function hex_code(hex_input) {
    var hex_numbers = "0123456789ABCDEF";
    var hex_output = "";
  
    if (hex_input == 0) {
        hex_output = "0";
    }
  
    if (hex_input < 0) {
        hex_output += "-";
        hex_input = Math.abs(hex_input);
    }
  
    var decimal_part = hex_input - Math.floor(hex_input);
  
    while (hex_input > 0) {
        var rest = hex_input % 16;
        hex_output = hex_numbers.charAt(rest) + hex_output;
        hex_input = Math.floor(hex_input / 16);
    }
  
    if (decimal_part > 0) {
        hex_output += ".";
        var decimal_numbers = 8;
  
        while (decimal_numbers > 0) {
            decimal_part *= 16;
            var decimal_digit = Math.floor(decimal_part);
            hex_output += hex_numbers.charAt(decimal_digit);
            decimal_part -= decimal_digit;
            decimal_numbers--;
        }
    }
  
    return hex_output;
}


//get elements to decode hex
function hexDecode() {
    var hexInput2 = document.getElementById("hexInput2").value;
    var hexDecodeOutput = hex_decode(hexInput2);
    document.getElementById("hexDecodeOutput").textContent = hexDecodeOutput;
}

//function to decode hex
function hex_decode(hex_input) {
    var hex_numbers = "0123456789ABCDEF";
    var decimal = 0;
    var power = hex_input.length - 1;
  
    for (var k = 0; k < hex_input.length; k++) {
        decimal += hex_numbers.indexOf(hex_input.charAt(k)) * Math.pow(16, power);
        power--;
    }
  
    return decimal;
}



//get elements for binary coding
function binCode01() {
    var decInput = document.getElementById("binInput").value;
    var binOutput = bin_code_01(decInput);
    document.getElementById("binOutput").textContent = binOutput;
}
  
//based binary coding function
function bin_code_01(dec_input) {
    if (dec_input == 0) {
      return '0';
    }
  
    var binary = '';
  
    while (dec_input > 0) {
      var remainder = dec_input % 2;
      binary = remainder + binary;
      dec_input = Math.floor(dec_input / 2);
    }
  
    return binary;
}


//get elements for based binary decode
function binDecode01() {
    var binInput3 = document.getElementById("binInput3").value;
    var binDecodeOutput = bin_decode_01(binInput3);
    document.getElementById("binDecodeOutput").textContent = binDecodeOutput;
}

//function to decode based binary
function bin_decode_01(bin_input) {
    var decimal = 0;
    var base = 1;
  
    while (bin_input > 0) {
        var digit = bin_input % 10;
        decimal += digit * base;
        bin_input = Math.floor(bin_input / 10);
        base *= 2;
    }
  
    return decimal;
}



//get elements for hamming code
function binCode02() {
    var decInput2 = document.getElementById("decInput2").value;
    var hammingOutput = bin_code_02(decInput2);
    document.getElementById("hammingOutput").textContent = hammingOutput;
}

//function for hamming code
function bin_code_02(bin_input) {
    var bin_str = bin_code_01(bin_input);
    var remainder = bin_str.length % 4;
  
    if (remainder !== 0) {
        bin_str = "0".repeat(4 - remainder) + bin_str;
    }
  
    var bin_blocks = [];
  
    for (var i = 0; i < bin_str.length; i += 4) {
        bin_blocks.push(bin_str.substr(i, 4));
    }
  
    var hamming_blocks = [];
  
    for (var j = 0; j < bin_blocks.length; j++) {
        var block = bin_blocks[j];
        var _111 = 0;
        var _110 = 0;
        var _101 = 0;
        var _100 = 0;
        var _011 = 0;
        var _010 = 0;
        var _001 = 0;
  
        _111 = parseInt(block.charAt(0));
        _110 = parseInt(block.charAt(1));
        _101 = parseInt(block.charAt(2));
        _011 = parseInt(block.charAt(3));
  
        _100 = (_110 + _101 + _111) % 2;
        _010 = (_110 + _011 + _111) % 2;
        _001 = (_011 + _101 + _111) % 2;
  
        var hamming_block = "" + _111 + _110 + _101 + _100 + _011 + _010 + _001;
        hamming_blocks.push(hamming_block);
    }
  
    return hamming_blocks;
}


//get elements for hamming decode
function hammingDecode() {
    var hammingInput = document.getElementById("hammingInput").value;
    var hammingDecodeOutput = hamming_decode(hammingInput);
    document.getElementById("hammingDecodeOutput").textContent = hammingDecodeOutput;
}

//function for hamming decode
function hamming_decode(inputList) {
    var splitList = inputList.split(" ");
  
    var filteredList = splitList.map(function(string) {
      var filteredString = '';
      for (var i = 0; i < string.length; i++) {
        if (i === 0 || i === 1 || i === 2 || i === 4) {
          filteredString += string[i];
        }
      }
      return filteredString;
    });
  
    var mergedString = filteredList.join('');
  
  
    let decimal = 0;
    
    for (let i = mergedString.length - 1; i >= 0; i--) {
      const bit = parseInt(mergedString.charAt(i));
      
      if (bit === 1) {
        decimal += Math.pow(2, mergedString.length - 1 - i);
      }
    }
  
    return decimal;
  
}



//get elements for ceasar cipher
function caesarcipher() {
    var text = document.getElementById("Text_input").value;
    var shift = parseInt(document.getElementById("rounds").value); // Parse the shift value as an integer
    var encrypted_text = encrypt(text, shift);
    document.getElementById("encrypted_text").textContent = encrypted_text;
}
  
//function for ceasar cipher
function encrypt(message, shift) {
    var encryptedMessage = '';
  
    for (var i = 0; i < message.length; i++) {
      var char = message[i];
      if (char.match(/[a-z]/i)) {
        var code = message.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      encryptedMessage += char;
    }
  
    return encryptedMessage;
}


//get elements for decoding with ceasar cipher
function caesardecipher() {
    var text = document.getElementById("encr_input").value;
    var shift = document.getElementById("rounds2").value;
    var encrypted_text = decrypt(text, shift);
    document.getElementById("decrypted_text").textContent = encrypted_text;
  }
  
//function decoding ceasar cipher
function decrypt(message, shift_set) {
    var shift = 26 - shift_set
    var decryptedMessage = '';
  
    for (var i = 0; i < message.length; i++) {
      var char = message[i];
      if (char.match(/[a-z]/i)) {
        var code = message.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      decryptedMessage += char;
    }
  
    return decryptedMessage;
}
