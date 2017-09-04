var Pangram = function(input) {
	this.sentence = input;
}

Pangram.prototype.isPangram = function() {
	if(this.sentence == "") {
		return false;
	}

	var sentenceLen = this.sentence.length;
	
}

module.exports = Pangram;