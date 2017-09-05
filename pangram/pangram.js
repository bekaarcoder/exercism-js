var Pangram = function(input) {
	this.sentence = input.toLowerCase();
}

Pangram.prototype.isPangram = function() {
	if(this.sentence == "") {
		return false;
	}

	var sentenceLen = this.sentence.length;
	var start = "a".charCodeAt(0);
	var end = "z".charCodeAt(0);
	var codeStack = [];
	var count = "";

	for(var i=0; i<sentenceLen; i++) {
		if(this.sentence.charCodeAt(i) >= start && this.sentence.charCodeAt(i) <= end) {
			codeStack.push(this.sentence.charCodeAt(i));
		}
	}

	for(var i=start; i<=end; i++) {
		if(codeStack.indexOf(i) == -1) {
			return false;
		} else {
			count++;
		}
	}

	if(count == 26) {
		return true;
	}
	
}

module.exports = Pangram;