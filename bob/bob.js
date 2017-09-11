var Bob = function() {

}

Bob.prototype.hey = function(input) {
	var askBob = input.trim();
	if(askBob.toUpperCase() == askBob && askBob !== "" && /[A-Z]/g.test(askBob.toUpperCase()) == true) {
		return "Whoa, chill out!";
	} else if(askBob.indexOf('?') != -1 && askBob.indexOf('?') === askBob.length - 1 && askBob !== "") {
		return 'Sure.';
	} else if(askBob === "") {
		return "Fine. Be that way!";
	} else {
		return 'Whatever.';
	}
}

module.exports = Bob;

