var Cipher = function(input) {
	var keyStr = input.match(/[0-9A-Z]+/g);
	if(keyStr) {
		throw new Error('Bad key');
	} else if(input == "") {
		this.key = "dddddddddddddddddd";
		throw new Error('Bad key');
	}
}

// Cipher.prototype.key = "dddddddddddddddddd";

Cipher.prototype.encode = function(input) {
	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
	var newInput = "";
	var inputLength = input.length;
	// var cipherKey = new Cipher();
	var key = this.key.substr(0, 10);
	for(var i=0; i<inputLength; i++) {
		var keyIndex = alphabets.indexOf(key[i]);
		var inputIndex = alphabets.indexOf(input[i]);
		var newIndex = keyIndex + inputIndex;
		newInput += alphabets[newIndex]; 
	}
	Cipher.prototype.encodedData = newInput;
	return newInput;
}

Cipher.prototype.decode = function(input) {
	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
	var output = "";
	var inputLength = input.length;
	// var cipherKey = new Cipher();
	var key = this.key.substr(0, 10);
	for(var i=0; i<inputLength; i++) {
		var keyIndex = alphabets.indexOf(key[i]);
		var inputIndex = alphabets.indexOf(input[i]);
		var newIndex = inputIndex - keyIndex;
		output += alphabets[newIndex];
	}
	return output;
}

module.exports = Cipher;