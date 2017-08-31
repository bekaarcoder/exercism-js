var Cipher = function(input) {
	if(input == "" || input.match(/[0-9A-Z]+/)) {
		throw new Error('Bad key');
	} else {
		this.key = input;
	}
	/*var keyStr = input.match(/[0-9A-Z]+/g);
	if(keyStr) {
		throw new Error('Bad key');
	} else if(input == "") {
		this.key = "dddddddddddddddddd";
		throw new Error('Bad key');
	}*/
}

Cipher.prototype.key = "dddddddddddddddddd";

Cipher.prototype.encode = function(input) {
	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var newInput = "";
	var inputLength = input.length;
	// var cipherKey = new Cipher();
	var key = this.key;
	for(var i=0; i<inputLength; i++) {
		var keyIndex = alphabets.indexOf(key[i]);
		var inputIndex = alphabets.indexOf(input[i]);
		var newIndex = keyIndex + inputIndex;
		if(newIndex >= (alphabets.length)) {
			newIndex = newIndex - (alphabets.length);
		}
		newInput += alphabets[newIndex]; 
	}
	Cipher.prototype.encodedData = newInput;
	return newInput;
}

Cipher.prototype.decode = function(input) {
	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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