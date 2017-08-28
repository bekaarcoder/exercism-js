var Cipher = function() {

}

Cipher.prototype.key = "dddddddddddddddddd";

Cipher.prototype.encode = function(input) {
	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
	var newInput = "";
	var inputLength = input.length;
	var cipherKey = new Cipher();
	var key = cipherKey.key.substr(0, 10);
	for(var i=0; i<inputLength; i++) {
		var keyIndex = alphabets.indexOf(key[i]);
		var inputIndex = alphabets.indexOf(input[i]);
		var newIndex = keyIndex + inputIndex;
		newInput += alphabets[newIndex]; 
	}
	return newInput;
}

module.exports = Cipher;