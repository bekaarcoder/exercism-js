var Bob = function() {

}

Bob.prototype.hey = function(input) {
	var askBob = input.trim();
	if(askBob.indexOf('?') != -1 && askBob.indexOf('?') === askBob.length - 1) {
		return 'Sure.';
	} else {
		return 'Whatever.';
	}
}

module.exports = Bob;

